import { ArrowRight, Check, X as XIcon } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { HeroVisual } from "@/components/hero-visual";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading, SpotlightCard } from "@/components/section";
import { services, valueProps, comparisons } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-center overflow-hidden pt-32 pb-20">
        <AuroraBackground variant="violet" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-center text-center">
            <span className="eyebrow rounded-full border border-white/10 px-4 py-1.5">
              Premium Website Development
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              We Build Websites That Make Businesses{" "}
              <span className="text-gradient">Look Unstoppable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Premium design quality, affordable pricing and fast delivery —
              built with modern technology and a strategy focused on growing
              your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="primary">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="/services" variant="ghost">
                View Our Work
              </MagneticButton>
            </div>
          </Reveal>
          <HeroVisual />
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Why It Works"
              title="Premium quality, built for business growth."
              description="Every project is approached the same way — with design discipline, technical performance and a strategy that's focused on real results."
              align="center"
            />
          </Reveal>

          <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <RevealItem key={item.title}>
                <SpotlightCard className="h-full">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="What We Build"
              title="A complete range of premium web services."
              description="From first impression to full ecommerce experience, every type of website is designed and built in-house."
            />
          </Reveal>

          <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-template-rows:repeat(2,minmax(0,1fr))]">
            {services.map((service) => {
              const Icon = service.icon;
              const spanClass =
                service.size === "lg"
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : service.size === "md"
                  ? "sm:col-span-1 lg:col-span-2"
                  : "sm:col-span-1 lg:col-span-1";
              return (
                <RevealItem key={service.title} className={spanClass}>
                  <Link href={service.href} className="block h-full">
                    <SpotlightCard className="flex h-full min-h-[180px] flex-col justify-between">
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

      {/* WHY CHOOSE — COMPARISON */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <AuroraBackground variant="gold" className="opacity-60" />
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Soumya Enterprises"
              title="A different standard of website partner."
              description="Most businesses have worked with a freelancer or agency before. Here's what changes when you work with us."
              align="center"
            />
          </Reveal>

          <RevealGroup className="mt-14 flex flex-col gap-4">
            {comparisons.map((item) => (
              <RevealItem key={item.soumya}>
                <div className="grid items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl p-4">
                    <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                    <p className="text-sm leading-relaxed text-ink-faint">{item.old}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p className="text-sm leading-relaxed text-ink">{item.soumya}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready for a website that{" "}
            <span className="text-gradient-gold">works as hard as you do?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Tell us about your business and we&apos;ll show you exactly what
            a premium website built for it could look like.
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
