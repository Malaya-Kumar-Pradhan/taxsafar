import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Heart, Target, Zap, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Taxsafar" },
      { name: "description", content: "Taxsafar is a tech-driven CA consultancy on a mission to make Indian compliance simple, transparent and human." },
      { property: "og:title", content: "About — Taxsafar" },
      { property: "og:description", content: "A tech-driven CA consultancy making compliance simple and human." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-36 pb-16 bg-hero-gradient">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our story</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">
              We believe compliance should feel
              <em className="text-primary"> effortless</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Taxsafar was born from a simple frustration: India’s most ambitious businesses
              spend too much time on paperwork and not enough time building. So we built a
              practice that pairs senior chartered accountants with thoughtful technology —
              and a service experience that actually delights.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-5">
          {[
            { icon: Heart, t: "Human first", d: "Real people, real expertise. Not a chatbot in disguise." },
            { icon: Target, t: "Outcome obsessed", d: "We measure ourselves on your peace of mind." },
            { icon: Zap, t: "Tech-powered", d: "Automation handles the routine. Humans handle the rest." },
            { icon: Users, t: "Pan-India team", d: "Senior CAs across 30+ cities, working as one team." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05}>
              <div className="rounded-3xl border border-border/70 bg-card p-7 h-full">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { k: "10,000+", v: "Returns filed" },
            { k: "50+", v: "Senior CAs in network" },
            { k: "98%", v: "Client retention" },
          ].map((s) => (
            <Reveal key={s.v}>
              <div>
                <div className="font-display text-6xl md:text-7xl text-primary">{s.k}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">Let’s build something compliant together.</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-elegant hover:shadow-glow transition">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
