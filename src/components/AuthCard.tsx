import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function AuthCard({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-hero-gradient grid place-items-center px-5 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="h-10 w-10 rounded-xl bg-primary-gradient grid place-items-center shadow-elegant">
            <span className="font-display text-primary-foreground text-lg leading-none">T</span>
          </div>
          <div className="font-display text-2xl tracking-tight">
            Tax<span className="text-primary">safar</span>
          </div>
        </Link>

        <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
            {eyebrow}
          </div>
          <h1 className="mt-2 font-display text-3xl">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>

        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </div>
  );
}
