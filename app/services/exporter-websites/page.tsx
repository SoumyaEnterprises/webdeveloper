import { ArrowRight, Globe2, FileCheck2, Languages, BadgeCheck, Factory, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";

export const metadata: Metadata = {
  title: "Exporter Websites",
  description:
    "Premium websites for exporters and manufacturers — built to present products, certifications and capabilities clearly to international buyers.",
};

const features = [
  {
    icon: Factory,
    title: "Product & Capability Showcase",
    description: "Present your manufacturing capacity, product range and specifications clearly to overseas buyers.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications & Compliance",
    description: "Dedicated space for certifications, quality standards and compliance documentation.",
  },
  {
    icon: Globe2,
    title: "International-Ready Design",
    description: "Layouts and imagery designed to read well across regions and business cultures.",
  },
  {
    icon: Languages,
    title: "Multi-Language Ready",
    description: "Structure that can support additional languages as you expand into new markets.",
  },
  {
    icon: FileCheck2,
    title: "Catalog & Brochure Downloads",
    description: "Easy access to product catalogs, spec sheets and brochures for buyer due diligence.",
  },
  {
    icon: MessageSquare,
    title: "Buyer Enquiry Forms",
    description: "Structured enquiry forms that capture the details buyers and your team both need.",
  },
];

export default function ExporterWebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service — Exporter Websites"
        variant="gold"
        title={
          <>
            Websites that help global buyers{" "}
            <span className="text-gradient-gold">trust you at first glance.</span>
          </>
        }
        description="For exporters and manufacturers, a website is often the first due-diligence step a buyer takes. We design websites that present your business with the clarity and credibility international buyers look for."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Built For International Buyers"
              title="Everything an export-ready website needs."
              description="Beyond good design, an exporter's website needs to answer the questions a buyer has before they ever pick up the phone."
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <RevealItem key={f.title}>
                  <SpotlightCard className="h-full">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.description}</p>
                  </SpotlightCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Present your business the way global buyers expect.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Tell us about your products and markets — we&apos;ll show you how
            an export-ready website could look for your business.
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
