import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing plans for premium website development — Starter, Business and Enterprise options for businesses of every size.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Premium quality,{" "}
            <span className="text-gradient">priced for real businesses.</span>
          </>
        }
        description="Every plan includes custom design, responsive development and SEO foundations. Final pricing depends on scope — book a consultation for a quote tailored to your project."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {pricingPlans.map((plan) => (
              <RevealItem key={plan.name} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8 sm:p-10",
                    plan.highlight
                      ? "border-white/[0.16] bg-white/[0.04] shadow-[0_30px_120px_-40px_rgba(110,91,255,0.5)]"
                      : "border-white/[0.08] bg-white/[0.02]"
                  )}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-violet to-cyan px-3 py-1 text-[11px] font-medium text-bg">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{plan.description}</p>
                  <p className="mt-6 font-display text-xl font-semibold text-gradient">{plan.price}</p>

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-soft" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    href="/contact"
                    variant={plan.highlight ? "primary" : "ghost"}
                    className="mt-10 w-full justify-center"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="A Note On Pricing"
              title="Why we don't publish a fixed price list."
              description="Every business has a different scope — number of pages, features, content readiness and timeline all affect the final cost. Rather than fitting your project into a rigid package, we provide a transparent quote based on what you actually need, agreed before any work begins."
              align="center"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
