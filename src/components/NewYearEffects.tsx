import { useEffect, useMemo, useState } from "react";

type Snowflake = {
  id: number;
  leftPct: number;
  sizePx: number;
  durationMs: number;
  delayMs: number;
  driftPx: number;
  opacity: number;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function NewYearEffects({ enabled = true }: { enabled?: boolean }) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  const isReduced = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (!enabled || isReduced) {
      setSnowflakes([]);
      return;
    }

    const build = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;

      const snowCount = clamp(Math.round(w / 22), 22, 70);

      const nextSnow: Snowflake[] = Array.from({ length: snowCount }, (_, i) => ({
        id: i,
        leftPct: Math.random() * 100,
        sizePx: Math.random() * 4 + 2,
        durationMs: (Math.random() * 2800 + 4200) | 0,
        delayMs: (Math.random() * 4500) | 0,
        driftPx: (Math.random() * 70 - 35) | 0,
        opacity: Math.random() * 0.55 + 0.25,
      }));

      setSnowflakes(nextSnow);
    };

    build();

    const onResize = () => build();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [enabled, isReduced]);

  if (!enabled || isReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {/* subtle winter tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(175_80%_50%/0.10),transparent_55%)]" />

      {/* snow */}
      {snowflakes.map((f) => (
        <div
          key={`snow-${f.id}`}
          className="snowflake absolute top-[-12vh] rounded-full bg-foreground/80"
          style={{
            left: `${f.leftPct}%`,
            width: `${f.sizePx}px`,
            height: `${f.sizePx}px`,
            opacity: f.opacity,
            // for CSS animation
            ["--drift" as any]: `${f.driftPx}px`,
            animationDuration: `${f.durationMs}ms`,
            animationDelay: `${f.delayMs}ms`,
          }}
        />
      ))}
    </div>
  );
}


