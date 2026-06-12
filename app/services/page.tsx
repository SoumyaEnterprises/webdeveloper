import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";
import { services, valueProps } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Soumya Enterprises' full range of premium website development services — business websites, ecommerce stores, exporter websites, landing pages and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            One studio.{" "}
            <span className="text-gradient">Every kind of premium website.</span>
          </>
        }
        description="Whether you need a focused landing page or a full ecommerce platform, every project gets the same design discipline, performance focus and business strategy."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <RevealItem key={service.title}>
                  <Link href={service.href} className="block h-full">
                    <SpotlightCard className="flex h-full min-h-[220px] flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                          <Icon className="h-5 w-5 text-violet-soft" />
                        </span>
                        <ArrowRight className="h-4 w-4 -translate-x-1 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-ink group-hover:opacity-100" />
                      </div>
                      <div className="mt-6">
                        <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {service.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="The Standard"
              title="Every project, built to the same premium standard."
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.slice(0, 4).map((item) => (
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
            Not sure which service fits your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Book a free consultation and we&apos;ll recommend the right
            approach for your goals and budget.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact" variant="primary">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
