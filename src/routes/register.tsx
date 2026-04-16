import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthCard } from "@/components/AuthCard";
import { GoogleButton } from "@/components/GoogleButton";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Create account — Taxsafar" },
      { name: "description", content: "Create your Taxsafar account to start filing returns and managing compliance." },
    ],
  }),
});

const schema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  business_name: z.string().trim().max(150).optional().or(z.literal("")),
  gstin: z.string().trim().max(20).optional().or(z.literal("")),
  password: z.string().min(8, "Use at least 8 characters").max(128),
});

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    business_name: "",
    gstin: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          full_name: parsed.data.full_name,
          phone: parsed.data.phone,
          business_name: parsed.data.business_name ?? "",
          gstin: parsed.data.gstin ?? "",
          role: "client",
        },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created. Welcome to Taxsafar!");
    navigate({ to: "/dashboard" });
  }

  return (
    <AuthCard
      eyebrow="Create Account"
      title={<>Start your <em className="text-primary">compliance</em> journey.</>}
      subtitle="A few details and you're set up for filings, advisories and more."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-3">
        <Field label="Full name" value={form.full_name} onChange={(v) => update("full_name", v)} required />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required autoComplete="email" />
          <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} required />
        </div>
        <Field label="Business name (optional)" value={form.business_name} onChange={(v) => update("business_name", v)} />
        <Field label="GSTIN (optional)" value={form.gstin} onChange={(v) => update("gstin", v)} />
        <Field label="Password" type="password" value={form.password} onChange={(v) => update("password", v)} required autoComplete="new-password" />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 rounded-xl bg-primary-gradient text-primary-foreground px-4 py-3 text-sm font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>

        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
          <div className="relative flex justify-center text-xs uppercase tracking-wider">
            <span className="bg-card px-3 text-muted-foreground">or</span>
          </div>
        </div>

        <GoogleButton label="Sign up with Google" />
      </form>
    </AuthCard>
  );
}

function Field({
  label, value, onChange, type = "text", required, autoComplete,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; autoComplete?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
