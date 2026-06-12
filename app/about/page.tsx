import type { Metadata } from "next";
import { Compass, Eye, HeartHandshake, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";
import { MagneticButton } from "@/components/magnetic-button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Soumya Enterprises — our mission, vision, values and approach to designing premium websites for businesses, exporters and startups.",
};

const values = [
  {
    icon: Sparkles,
    title: "Design with intent",
    description: "Every layout, color and animation choice has a reason behind it — nothing is left to default.",
  },
  {
    icon: Layers,
    title: "Built to last",
    description: "Clean architecture and modern code mean your website stays maintainable as you grow.",
  },
  {
    icon: HeartHandshake,
    title: "Honest communication",
    description: "Clear timelines, transparent pricing and straightforward updates throughout the project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality over shortcuts",
    description: "We'd rather take the time to get a detail right than ship something that just looks finished.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Soumya Enterprises"
        title={
          <>
            We design websites the way{" "}
            <span className="text-gradient">we&apos;d want one built for us.</span>
          </>
        }
        description="Soumya Enterprises is a website development studio focused on one thing: building premium, high-performing websites for businesses that want to look as good as they perform."
      />

      {/* MISSION / VISION */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <RevealItem>
              <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
                <Compass className="h-7 w-7 text-violet-soft" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Our Mission</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  To give businesses of every size access to the kind of
                  premium website design that was once reserved for large
                  brands with large budgets — without compromising on quality
                  or speed.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
                <Eye className="h-7 w-7 text-cyan" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Our Vision</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  To be the studio businesses think of first when they want a
                  website that truly represents the quality of their work —
                  recognised for design, performance and dependable
                  partnership.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="The principles behind every project."
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <RevealItem key={v.title}>
                  <SpotlightCard className="h-full">
                    <Icon className="h-6 w-6 text-violet-soft" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.description}</p>
                  </SpotlightCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 sm:p-14">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Strategy first. Design second. Code third."
              description="We don't start with a template — we start with your business. Every project begins by understanding what the website needs to communicate and who it needs to convince, so the design and development that follow are working toward a clear goal rather than just filling pages."
            />
          </Reveal>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Why Clients Choose Us"
              title="Because the details aren't an afterthought."
              description="From the first conversation to the final handover, every part of the process is designed to feel considered, transparent and focused on your business — not just the website."
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s talk about your business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Book a free consultation — no pressure, just a clear
            conversation about what would work for you.
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
