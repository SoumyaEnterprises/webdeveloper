import { AuroraBackground } from "@/components/aurora-background";
import { Reveal } from "@/components/reveal";

type Variant = "violet" | "gold" | "cyan";

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "violet",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  variant?: Variant;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-40 pb-24 sm:px-8 sm:pt-48 sm:pb-32">
      <AuroraBackground variant={variant} />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow rounded-full border border-white/10 px-4 py-1.5">
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
