import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Taxsafar" },
      { name: "description", content: "Talk to a senior chartered accountant. Free 15-minute consultation." },
      { property: "og:title", content: "Contact — Taxsafar" },
      { property: "og:description", content: "Book a free 15-minute consultation with a senior CA." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-36 pb-16 bg-hero-gradient">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">
              Let’s talk <em className="text-primary">numbers</em>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Tell us what you’re working on. A senior CA will get back within one business day —
              usually faster.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-5">
            {[
              { icon: Phone, t: "Call us", d: "+91 97848 18899", href: "tel:+919784818899" },
              { icon: Mail, t: "Email", d: "support@taxsafar.com", href: "mailto:support@taxsafar.com" },
              { icon: MapPin, t: "Office", d: "Jaipur, Rajasthan, India" },
            ].map((c) => (
              <Reveal key={c.t}>
                <a href={c.href ?? "#"} className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all">
                  <div className="h-11 w-11 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-medium">{c.d}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-3">
            <Reveal>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-3xl border border-border/70 bg-card p-7 md:p-9 shadow-soft space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" placeholder="Aarav Sharma" />
                  <Field label="Email" type="email" placeholder="you@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" placeholder="+91 …" />
                  <Field label="Service" placeholder="GST, Income Tax, …" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                  <textarea rows={5} placeholder="Tell us a bit about your business…" className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-elegant hover:shadow-glow transition">
                  {sent ? (<><CheckCircle2 className="h-4 w-4" /> Sent — we’ll be in touch</>) : (<><Send className="h-4 w-4" /> Send message</>)}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
    </div>
  );
}
