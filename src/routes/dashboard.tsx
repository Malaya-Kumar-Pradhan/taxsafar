import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FileText, ShieldCheck, Receipt, LogOut, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Dashboard — Taxsafar" }] }),
});

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Client Dashboard</div>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-4xl md:text-5xl">
              Hello, <em className="text-primary">there</em>.
            </h1>
            <button
              onClick={() => navigate({ to: "/" })}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
          <p className="mt-3 text-muted-foreground">
            Demo dashboard — connect a backend to enable accounts and live data.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { icon: FileText, title: "GST returns", desc: "File monthly and quarterly returns with our team.", to: "/services" },
            { icon: ShieldCheck, title: "Income Tax", desc: "Salary, business and capital gains ITR filings.", to: "/services" },
            { icon: Receipt, title: "Bookkeeping", desc: "Clean books, MIS reports and reconciliations.", to: "/services" },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group rounded-3xl border border-border/70 bg-card p-7 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40 transition-all"
            >
              <div className="h-11 w-11 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
