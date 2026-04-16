import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText, ShieldCheck, Building2, Receipt, Wallet, Briefcase,
  Scale, Globe2, Calculator, Stamp, BookOpenCheck, ArrowRight,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Taxsafar" },
      { name: "description", content: "GST, Income Tax, Registrations, Audit, Virtual CFO and more. Explore the full suite of Taxsafar services." },
      { property: "og:title", content: "Services — Taxsafar" },
      { property: "og:description", content: "Explore Taxsafar's full suite of compliance and advisory services." },
    ],
  }),
});

const groups = [
  {
    title: "Returns & Compliance",
    items: [
      { icon: FileText, name: "GST Returns", desc: "Monthly, quarterly & annual GST filings." },
      { icon: Calculator, name: "Income Tax Returns", desc: "Salary, business and capital gains ITRs." },
      { icon: ShieldCheck, name: "TDS & TCS", desc: "Quarterly returns and reconciliations." },
      { icon: BookOpenCheck, name: "ROC Compliances", desc: "Annual filings for companies & LLPs." },
    ],
  },
  {
    title: "Registrations",
    items: [
      { icon: Building2, name: "Company / LLP", desc: "Incorporation done in days, not weeks." },
      { icon: Stamp, name: "GST Registration", desc: "New, amendments and cancellations." },
      { icon: Globe2, name: "Trademark & IP", desc: "Search, file and prosecute trademarks." },
      { icon: Briefcase, name: "MSME / Udyam", desc: "Get the benefits you’re entitled to." },
    ],
  },
  {
    title: "Advisory",
    items: [
      { icon: Wallet, name: "Financial Planning", desc: "Personal & business tax-optimised plans." },
      { icon: Briefcase, name: "Virtual CFO", desc: "Fractional senior finance leadership." },
      { icon: Scale, name: "Notice & Litigation", desc: "Handle IT, GST, customs notices." },
      { icon: Receipt, name: "Bookkeeping", desc: "Clean books and monthly MIS reports." },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-36 pb-16 bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Services</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-3xl">
              A full-stack practice for the <em className="text-primary">modern</em> business.
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
              Whether you’re filing your first GST return or scaling to a Series A, we’ve got the
              compliance, accounting and advisory muscle to keep you moving.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 space-y-20">
        {groups.map((g, gi) => (
          <div key={g.title} className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-4">
                <h2 className="font-display text-3xl md:text-4xl">{g.title}</h2>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">0{gi + 1} / 0{groups.length}</div>
              </div>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.items.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div className="group h-full rounded-3xl border border-border/70 bg-card p-7 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40 transition-all">
                    <div className="h-11 w-11 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Get started <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
