"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* track */}
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/[0.08] sm:left-[31px]" />
      {/* fill */}
      <motion.div
        className="absolute left-[27px] top-2 w-px origin-top bg-gradient-to-b from-violet via-cyan to-gold sm:left-[31px]"
        style={{ scaleY: progress, height: "100%" }}
      />

      <div className="flex flex-col gap-16">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.03} className="relative flex gap-6 sm:gap-8">
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.1] bg-bg font-mono text-sm text-violet-soft sm:h-16 sm:w-16">
              {step.number}
            </div>
            <div className="pt-1">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
