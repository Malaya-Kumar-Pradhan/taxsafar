import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Briefcase, LogOut, Users, TrendingUp, Coins } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/partner/dashboard")({
  component: PartnerDashboard,
  head: () => ({ meta: [{ title: "Partner Dashboard — Taxsafar" }] }),
});

function PartnerDashboard() {
  const { user, roles, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate({ to: "/partner-login" });
      return;
    }
    const allowed = roles.includes("partner") || roles.includes("admin");
    if (!allowed && roles.length > 0) {
      navigate({ to: "/dashboard" });
    }
  }, [loading, user, roles, navigate]);

  if (loading || !user) {
    return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            <Briefcase className="h-3.5 w-3.5" /> Partner Portal
          </div>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-4xl md:text-5xl">
              Your <em className="text-primary">partnership</em> at a glance.
            </h1>
            <button
              onClick={async () => { await signOut(); navigate({ to: "/" }); }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { icon: Users, label: "Referred clients", value: "—" },
            { icon: TrendingUp, label: "Active engagements", value: "—" },
            { icon: Coins, label: "Pending commissions", value: "₹ —" },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl border border-border/70 bg-card p-7">
              <div className="h-11 w-11 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-3xl font-display">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 rounded-3xl border border-dashed border-border p-10 text-center text-muted-foreground">
          Partner workflows (referrals, commissions, co-branded filings) will live here.
        </div>
      </section>
    </div>
  );
}
