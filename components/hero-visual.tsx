"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 7) % 5),
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i % 10) * 0.4,
  duration: 6 + (i % 5),
}));

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div ref={ref} className="relative mx-auto mt-20 w-full max-w-4xl px-4">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-violet-soft/60"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ rotateX: -tilt.y * 4, rotateY: tilt.x * 6 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-violet/30 via-cyan/10 to-transparent blur-3xl" />

        {/* browser window */}
        <div className="glass-strong overflow-hidden rounded-2xl shadow-[0_30px_120px_-30px_rgba(110,91,255,0.45)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-center font-mono text-[11px] text-ink-faint">
              soumyaenterprises.com
            </div>
          </div>
          <div className="grid gap-px bg-white/[0.04] p-px sm:grid-cols-3">
            <div className="col-span-2 space-y-3 bg-bg p-6 sm:p-8">
              <div className="h-2 w-20 rounded-full bg-gradient-to-r from-violet to-cyan" />
              <div className="h-5 w-3/4 rounded bg-white/10" />
              <div className="h-5 w-1/2 rounded bg-white/10" />
              <div className="mt-6 flex gap-3">
                <div className="h-9 w-28 rounded-full bg-ink" />
                <div className="h-9 w-28 rounded-full border border-white/15" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 rounded-xl border border-white/[0.06] bg-white/[0.02]" />
                ))}
              </div>
            </div>
            <div className="space-y-3 bg-bg p-6">
              <div className="h-3 w-16 rounded-full bg-white/10" />
              <div className="h-24 rounded-xl border border-white/[0.06] bg-gradient-to-br from-violet/20 to-cyan/10" />
              <div className="h-3 w-full rounded-full bg-white/[0.06]" />
              <div className="h-3 w-4/5 rounded-full bg-white/[0.06]" />
              <div className="h-3 w-2/3 rounded-full bg-white/[0.06]" />
            </div>
          </div>
        </div>

        {/* floating chip */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -right-6 -top-8 hidden rounded-2xl px-4 py-3 text-xs sm:block"
        >
          <p className="text-ink-muted">Lighthouse</p>
          <p className="mt-1 font-display text-xl font-semibold text-gradient">98 / 100</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -bottom-8 -left-6 hidden rounded-2xl px-4 py-3 text-xs sm:block"
        >
          <p className="text-ink-muted">Status</p>
          <p className="mt-1 flex items-center gap-2 font-display text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live &amp; deployed
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
