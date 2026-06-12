import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Premium business website development — custom design, fast performance and conversion-focused structure for companies, startups and professionals.",
};

const included = [
  "Custom-designed pages, not a recycled template",
  "Responsive layouts for mobile, tablet and desktop",
  "Clear navigation and conversion-focused page structure",
  "On-page SEO foundations and clean metadata",
  "Optimized images and fast loading performance",
  "Contact forms and enquiry-friendly layouts",
  "Accessible markup and keyboard-friendly navigation",
  "Analytics setup so you can track visitors from day one",
];

const useCases = [
  {
    title: "Startups & founders",
    description: "A confident first impression that helps you raise, sell and hire.",
  },
  {
    title: "Service businesses",
    description: "Clear presentation of what you offer, who you've helped, and how to get in touch.",
  },
  {
    title: "Professionals & consultants",
    description: "A site that builds credibility before the first conversation even happens.",
  },
  {
    title: "Established companies",
    description: "A modern upgrade from an outdated site, without losing existing content or rankings.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Service — Website Development"
        title={
          <>
            Business websites that{" "}
            <span className="text-gradient">earn trust on arrival.</span>
          </>
        }
        description="A premium, custom-designed website is often the first real interaction a customer has with your business. We design and build it to reflect the quality of what you do."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="What's Included"
                title="Everything a premium business website needs."
                description="No bolt-on extras or unfinished sections — every site we deliver includes these foundations as standard."
              />
            </Reveal>
            <RevealGroup className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <RevealItem key={item}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-soft" />
                    <p className="text-sm leading-relaxed text-ink-muted">{item}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Who It's For"
              title="Built for businesses that take their image seriously."
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <RevealItem key={item.title}>
                <SpotlightCard className="h-full">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s design a website your business deserves.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Book a free consultation to discuss your goals, timeline and
            budget — no pressure, just a clear plan.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="primary">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/pricing" variant="ghost">
              See Pricing
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
