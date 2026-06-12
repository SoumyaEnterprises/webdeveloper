import { cn } from "@/lib/utils";

type AuroraVariant = "violet" | "gold" | "cyan";

const palettes: Record<AuroraVariant, string[]> = {
  violet: ["#6e5bff", "#5bd4ff", "#2a1f5e"],
  gold: ["#d9b675", "#6e5bff", "#3a2a4f"],
  cyan: ["#5bd4ff", "#6e5bff", "#1f3a5e"],
};

export function AuroraBackground({
  variant = "violet",
  className,
}: {
  variant?: AuroraVariant;
  className?: string;
}) {
  const [a, b, c] = palettes[variant];
  return (
    <div className={cn("aurora", className)} aria-hidden="true">
      <div
        className="aurora__blob"
        style={{
          width: "55%",
          height: "55%",
          left: "-10%",
          top: "-15%",
          background: a,
          opacity: 0.35,
          animation: "drift-a 22s ease-in-out infinite",
        }}
      />
      <div
        className="aurora__blob"
        style={{
          width: "45%",
          height: "45%",
          right: "-10%",
          top: "5%",
          background: b,
          opacity: 0.3,
          animation: "drift-b 26s ease-in-out infinite",
        }}
      />
      <div
        className="aurora__blob"
        style={{
          width: "50%",
          height: "50%",
          left: "20%",
          bottom: "-25%",
          background: c,
          opacity: 0.4,
          animation: "drift-c 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 0%, var(--bg) 75%)",
        }}
      />
    </div>
  );
}
