import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, FileText, ShieldCheck, Building2, Receipt, Wallet, Briefcase,
  Sparkles, Star, CheckCircle2, PhoneCall, Search,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Taxsafar — Compliance, simplified for modern businesses" },
      { name: "description", content: "Tech-driven CA consultancy for GST, Income Tax, registrations, notices and financial planning. Trusted by 10,000+ Indian businesses." },
    ],
  }),
});

const services = [
  { icon: FileText, title: "Return Filing", desc: "GST, Income Tax, TDS, FSSAI and more — filed accurately, on time." },
  { icon: ShieldCheck, title: "Notice Resolution", desc: "Expert handling of IT, GST and customs notices end-to-end." },
  { icon: Building2, title: "Registrations", desc: "Company, LLP, GST, MSME, Trademark — start strong, stay compliant." },
  { icon: Receipt, title: "Accounting & Bookkeeping", desc: "Clean books, monthly MIS and audit-ready financials." },
  { icon: Wallet, title: "Financial Planning", desc: "Tax-optimised planning for individuals and businesses." },
  { icon: Briefcase, title: "Virtual CFO", desc: "Strategic finance leadership without the full-time hire." },
];

const chips = ["GST", "Income Tax", "Registrations", "Audit", "Notices", "Virtual Office", "Trademark", "MSME"];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-hero-gradient">
        <div className="absolute inset-0 grain opacity-[0.35] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center relative">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 10,000+ founders & professionals
            </motion.div>

            <h1 className="mt-6 font-display text-[44px] sm:text-6xl md:text-7xl leading-[0.95] text-balance">
              Compliance,
              <br />
              <span className="italic text-primary">beautifully</span> simplified.
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              From GST returns to virtual CFO — Taxsafar pairs senior chartered accountants
              with modern technology so your business runs smarter, faster, and fully compliant.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Explore services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919784818899"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                +91 97848 18899
              </a>
            </div>

            {/* Search */}
            <div className="mt-10 max-w-xl">
              <div className="flex items-center gap-2 rounded-full bg-card border border-border/70 pl-5 pr-1.5 py-1.5 shadow-soft">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search a service: GST, ITR, Trademark…"
                  className="flex-1 bg-transparent outline-none text-sm py-2.5"
                />
                <button className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                  Search
                </button>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                <span className="opacity-70">Popular:</span>{" "}
                {["Return Filing", "Registrations", "Financial Planning", "Compliances"].map((p, i) => (
                  <span key={p}>
                    <a href="#" className="hover:text-primary underline-offset-4 hover:underline">{p}</a>
                    {i < 3 && <span className="mx-2 opacity-40">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "10k+", v: "Filings done" },
                { k: "50+", v: "Expert CAs" },
                { k: "4.9★", v: "Avg. rating" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-primary">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elegant"
              style={{
                background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--primary) 25%, transparent), transparent 70%), var(--cream)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dcsg1cjnt/image/upload/v1776514052/sales_isuver.webp"
                alt="Taxsafar chartered accountant team"
                className="absolute inset-x-0 bottom-0 w-full h-full object-cover"
                width={1024}
                height={1280}
              />
              {/* floating chips */}
              {chips.slice(0, 5).map((c, i) => {
                const positions = [
                  "top-6 -left-6", "top-24 -right-4", "top-1/2 -left-10",
                  "bottom-32 -right-8", "bottom-10 left-6",
                ];
                return (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className={`absolute ${positions[i]} rounded-full bg-card/90 backdrop-blur border border-border/70 px-4 py-2 text-xs font-medium shadow-soft float-slow`}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    {c}
                  </motion.div>
                );
              })}
              {/* Call card */}
              <motion.a
                href="tel:+919784818899"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute left-4 bottom-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur border border-border/70 px-4 py-3 shadow-soft"
              >
                <span className="h-10 w-10 grid place-items-center rounded-full bg-primary-gradient text-primary-foreground">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call now</div>
                  <div className="text-sm font-semibold">Talk to a CA in 2 mins</div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="overflow-hidden py-6">
          <div className="marquee flex gap-12 whitespace-nowrap text-muted-foreground">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0">
                {["GST Suvidha Provider", "ICAI Network", "MSME Registered", "ISO 27001", "Startup India", "Income Tax Bar", "FSSAI Verified", "Trademark Attorney"].map((t) => (
                  <span key={t} className="font-display text-2xl md:text-3xl tracking-tight opacity-70">
                    {t} <span className="text-gold mx-2" style={{ color: "var(--gold)" }}>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What we do</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
              Everything your business needs, under <em className="text-primary">one roof</em>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A curated suite of compliance, advisory and growth services — delivered by senior CAs, powered by automation.
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <article className="group relative h-full rounded-3xl border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40">
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-hero-gradient pointer-events-none" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-soft">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-card/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">How it works</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A journey, not a transaction.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Tell us your need", d: "Share your business goals and current compliance status." },
              { n: "02", t: "Get matched", d: "We pair you with a senior CA specialising in your domain." },
              { n: "03", t: "We execute", d: "Filings, registrations, advisory — done with full transparency." },
              { n: "04", t: "Stay ahead", d: "Proactive reminders, dashboards and year-round support." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative rounded-3xl bg-background border border-border/70 p-7 h-full">
                  <div className="font-display text-5xl text-primary/20">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Client stories</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by founders. <em className="text-primary">Trusted</em> by CFOs.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { q: "Taxsafar handled three years of pending notices in weeks. The team is sharp, responsive and genuinely cares.", n: "Aanya Mehta", r: "Founder, Bloom & Co" },
              { q: "Their virtual CFO model gave us senior finance leadership at a fraction of the cost. Game changer.", n: "Rohan Kapoor", r: "CEO, Northwind Labs" },
              { q: "GST filings used to be a monthly nightmare. Now it’s automated and I sleep better.", n: "Priya Shah", r: "Director, Saffron Retail" },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 0.06}>
                <figure className="rounded-3xl border border-border/70 bg-card p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 text-gold" style={{ color: "var(--gold)" }}>
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 font-display text-xl leading-snug">“{t.q}”</blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border/60">
                    <div className="font-medium">{t.n}</div>
                    <div className="text-sm text-muted-foreground">{t.r}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-gradient text-primary-foreground p-10 md:p-16 shadow-elegant">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-gradient opacity-30 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-balance">
                    Ready to make compliance the easiest part of your business?
                  </h2>
                  <p className="mt-4 opacity-80 max-w-md">
                    Book a free 15-minute consultation. No commitment, just clarity.
                  </p>
                </div>
                <div className="md:justify-self-end flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:shadow-glow transition">
                    Book consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+919784818899" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition">
                    <PhoneCall className="h-4 w-4" /> Call us
                  </a>
                </div>
              </div>
              <div className="relative mt-10 grid sm:grid-cols-3 gap-4 text-sm">
                {["Free first consultation", "Senior CA assigned", "Pan-India support"].map((b) => (
                  <div key={b} className="flex items-center gap-2 opacity-90">
                    <CheckCircle2 className="h-4 w-4" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
