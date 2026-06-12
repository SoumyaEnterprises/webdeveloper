import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Soumya Enterprises designs and builds premium websites — from discovery and strategy through design, development, testing and launch.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title={
          <>
            A clear, six-step process —{" "}
            <span className="text-gradient">from idea to launch.</span>
          </>
        }
        description="No guesswork, no disappearing for weeks at a time. Every project follows the same structured process, so you always know what's happening and what comes next."
      />

      <section className="px-5 pb-24 sm:px-8 lg:pb-40">
        <ProcessTimeline />
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to start with Discovery?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Book a free consultation and we&apos;ll walk you through how this
            process would apply to your project.
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
