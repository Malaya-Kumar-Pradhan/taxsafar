import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Briefcase } from "lucide-react";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/partner-login")({
  component: PartnerLoginPage,
  head: () => ({
    meta: [
      { title: "Partner sign in — Taxsafar" },
      { name: "description", content: "Channel partners and associates sign in to the Taxsafar partner portal." },
    ],
  }),
});

function PartnerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("This is a demo form — connect a backend to enable partner sign in.");
  }

  return (
    <AuthCard
      eyebrow="Partner Portal"
      title={<>For our <em className="text-primary">channel partners</em>.</>}
      subtitle="Restricted access. Use the credentials provided to your firm."
      footer={
        <>
          Not a partner?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Client login
          </Link>
          {" · "}
          <Link to="/contact" className="text-primary font-medium hover:underline">
            Become a partner
          </Link>
        </>
      }
    >
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
        <div className="h-9 w-9 rounded-lg bg-primary-gradient grid place-items-center text-primary-foreground">
          <Briefcase className="h-4 w-4" />
        </div>
        <p className="text-xs text-muted-foreground">
          Partner accounts unlock co-branded filings, commissions and a dedicated relationship manager.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Partner email</label>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-primary-gradient text-primary-foreground px-4 py-3 text-sm font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
        >
          Sign in to Partner Portal
        </button>
      </form>
    </AuthCard>
  );
}
