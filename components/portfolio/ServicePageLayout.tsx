"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  BuildProps,
  CaseStudyProps,
  CaseVisual,
  CTAProps,
  DashboardTile,
  DemoProps,
  FlowLabels,
  HeroProps,
  ProblemProps,
  ProcessProps,
  ServicePageLayoutProps,
} from "@/types/service-page";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DEFAULT_FLOW: FlowLabels = {
  trigger: "Evento",
  process: "Bot",
  outputA: "Reporte",
  outputB: "Alerta",
};

/* ─── Animated process-flow diagram ─────────────────────────
   Self-contained SVG (SMIL animation, no globals.css needed).
   Theme-aware via Tailwind color utilities. */

function ProcessFlowDiagram({
  labels = DEFAULT_FLOW,
  className = "",
}: {
  labels?: FlowLabels;
  className?: string;
}) {
  const spark = { filter: "drop-shadow(0 0 6px hsl(var(--primary)))" };
  return (
    <svg viewBox="0 0 400 540" className={className} role="img" aria-label="Diagrama de flujo automatizado">
      {/* connectors */}
      <path d="M200,86 L200,182" className="stroke-border" fill="none" strokeWidth={1.2} />
      <path d="M200,278 C200,330 110,330 110,372" className="stroke-border" fill="none" strokeWidth={1.2} />
      <path d="M200,278 C200,330 290,330 290,372" className="stroke-border" fill="none" strokeWidth={1.2} />

      {/* flowing dashes */}
      {[
        "M200,86 L200,182",
        "M200,278 C200,330 110,330 110,372",
        "M200,278 C200,330 290,330 290,372",
      ].map((d, i) => (
        <path key={i} d={d} className="stroke-primary" fill="none" strokeWidth={1.6} strokeDasharray="5 9">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.1s" repeatCount="indefinite" />
        </path>
      ))}

      {/* traveling sparks */}
      <circle r={3.5} className="fill-primary" style={spark}>
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M200,86 L200,182" />
      </circle>
      <circle r={3} className="fill-primary" style={spark} opacity={0.85}>
        <animateMotion dur="2.6s" begin="0.6s" repeatCount="indefinite" path="M200,278 C200,330 110,330 110,372" />
      </circle>
      <circle r={3} className="fill-primary" style={spark} opacity={0.85}>
        <animateMotion dur="2.6s" begin="1.1s" repeatCount="indefinite" path="M200,278 C200,330 290,330 290,372" />
      </circle>

      {/* nodes */}
      {[
        { x: 176, y: 38, cx: 200, label: labels.trigger },
        { x: 176, y: 230, cx: 200, label: labels.process },
        { x: 86, y: 372, cx: 110, label: labels.outputA },
        { x: 266, y: 372, cx: 290, label: labels.outputB },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width={48} height={48} rx={2} className="fill-card stroke-primary/50" strokeWidth={1} />
          <rect x={n.cx - 5} y={n.y + 19} width={10} height={10} className="fill-primary" />
          <text
            x={n.cx}
            y={n.y + 68}
            textAnchor="middle"
            className="fill-muted-foreground font-mono uppercase"
            style={{ fontSize: 9, letterSpacing: "0.15em" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* Schematic dashboard — an honest, on-brand representation of a data result
   (not a faked screenshot). Used by lines without real UI captures. */

function DashboardSchematic({
  tiles = [],
  series = [],
  caption,
}: {
  tiles?: DashboardTile[];
  series?: number[];
  caption?: string;
}) {
  const W = 480;
  const H = 360;
  const pad = 16;
  const tileGap = 12;
  const nT = Math.min(tiles.length, 3);
  const tileW = nT > 0 ? (W - pad * 2 - tileGap * (nT - 1)) / nT : 0;
  const tileH = 74;
  const tileY = pad;

  const chartX = pad;
  const chartY = tileY + tileH + 16;
  const chartW = W - pad * 2;
  const chartH = H - chartY - pad;
  const baseY = chartY + chartH - 22;
  const top = chartY + 34;
  const usableH = baseY - top;

  const max = Math.max(...series, 1);
  const maxIdx = series.indexOf(max);
  const n = series.length;
  const slot = n > 0 ? chartW / n : 0;
  const bw = Math.min(slot * 0.5, 34);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Tablero esquemático de resultados">
      {/* metric tiles */}
      {tiles.slice(0, 3).map((t, i) => {
        const x = pad + i * (tileW + tileGap);
        const vfs = t.value.length > 8 ? 14 : t.value.length > 5 ? 18 : 22;
        const lfs = t.label.length > 20 ? 7 : 8;
        return (
          <g key={i}>
            <rect x={x} y={tileY} width={tileW} height={tileH} rx={3} className="fill-card stroke-border" strokeWidth={1} />
            <text x={x + 14} y={tileY + 24} className="fill-muted-foreground font-mono uppercase" style={{ fontSize: lfs, letterSpacing: "0.1em" }}>
              {t.label}
            </text>
            <text x={x + 14} y={tileY + 54} className="fill-primary" style={{ fontSize: vfs, fontWeight: 600, letterSpacing: "-0.02em" }}>
              {t.value}
            </text>
          </g>
        );
      })}

      {/* chart panel */}
      <rect x={chartX} y={chartY} width={chartW} height={chartH} rx={3} className="fill-card/40 stroke-border" strokeWidth={1} />
      {caption && (
        <text x={chartX + 14} y={chartY + 22} className="fill-muted-foreground font-mono uppercase" style={{ fontSize: 8, letterSpacing: "0.12em" }}>
          {caption}
        </text>
      )}

      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((g, i) => (
        <line
          key={i}
          x1={chartX + 12}
          x2={chartX + chartW - 12}
          y1={baseY - usableH * g}
          y2={baseY - usableH * g}
          className="stroke-border"
          strokeWidth={0.5}
          strokeDasharray="2 4"
          opacity={0.6}
        />
      ))}

      {/* bars (tallest = highest recurrence, highlighted) */}
      {series.map((v, i) => {
        const h = usableH * (v / max);
        const cx = chartX + slot * i + slot / 2;
        const x = cx - bw / 2;
        const hi = i === maxIdx;
        return (
          <g key={i}>
            <rect x={x} y={baseY - h} width={bw} height={h} rx={1.5} className={hi ? "fill-primary" : "fill-border"} opacity={hi ? 1 : 0.85} />
            {hi && (
              <circle cx={cx} cy={baseY - h - 7} r={3} className="fill-primary" style={{ filter: "drop-shadow(0 0 5px hsl(var(--primary)))" }}>
                <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* baseline */}
      <line x1={chartX + 12} x2={chartX + chartW - 12} y1={baseY} y2={baseY} className="stroke-border" strokeWidth={1} />
    </svg>
  );
}

function CaseVisualBlock({ visual }: { visual: CaseVisual }) {
  if (visual.kind === "image") {
    return (
      <div className="relative border border-border overflow-hidden aspect-4/3 bg-card">
        <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
    );
  }
  if (visual.kind === "dashboard") {
    return (
      <div className="border border-border bg-card/40 p-6">
        <DashboardSchematic tiles={visual.tiles} series={visual.series} caption={visual.caption} />
      </div>
    );
  }
  return (
    <div className="border border-border bg-card/40 flex items-center justify-center p-8 aspect-4/3">
      <ProcessFlowDiagram labels={visual.labels} className="w-full max-w-90 h-auto" />
    </div>
  );
}

/* ─── Hero (Bold layout, Refined type) ──────────────────── */

function PageHero({ label, line1, line2, description, ctaLabel, ticker, flowLabels }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* ambient flow backdrop */}
      <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-end opacity-40">
        <ProcessFlowDiagram labels={flowLabels} className="h-[120%] translate-x-[10%]" />
      </div>

      <div className="relative max-w-350 mx-auto px-6 lg:px-10 min-h-[90vh] flex flex-col justify-center pt-32 pb-20">
        {/* back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 left-6 lg:left-10"
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-3 h-3" /> Inicio
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-7"
          >
            <span className="h-px w-10 bg-primary" />
            {label}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-none tracking-tight"
          >
            {line1}
            <br />
            <span className="text-primary">{line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl mt-8 mb-10"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            onClick={() => document.querySelector("#contact-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-fit cursor-pointer"
          >
            {ctaLabel}
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* subtle ticker (reuses .ticker-animate from globals.css) */}
      {ticker && ticker.length > 0 && (
        <div className="relative border-y border-border bg-card overflow-hidden">
          <div className="ticker-animate flex whitespace-nowrap py-2.5">
            {[...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground px-7 flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Problem ───────────────────────────────────────────── */

function ProblemSection({ label, hook, intro, pains }: ProblemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-6">{label}</div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
          {hook}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-8 max-w-2xl">{intro}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-px mt-14 border-t border-border">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
            className="flex items-start gap-4 py-5 border-b border-border"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-primary pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-muted-foreground leading-snug">{p}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured case study ───────────────────────────────── */

function CaseStudy({ label, title, context, challenge, solution, metrics, visual, tag }: CaseStudyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between gap-4 mb-14"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">{label}</div>
        {tag && (
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-3 py-1.5">
            {tag}
          </span>
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-3">
            {title}
          </h2>
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-10">
            {context}
          </p>

          <div className="space-y-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-3">El reto</div>
              <p className="text-muted-foreground leading-relaxed">{challenge}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-3">Qué construimos</div>
              <p className="text-muted-foreground leading-relaxed">{solution}</p>
            </div>
          </div>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CaseVisualBlock visual={visual} />
        </motion.div>
      </div>

      {/* metrics live inside the case, where they're credible */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 border-t border-border">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            className="py-8 md:px-8 border-b border-border md:border-b-0 md:border-r last:border-r-0"
          >
            <div className="font-heading text-4xl lg:text-5xl font-medium text-primary tracking-tight mb-2">
              {m.value}
            </div>
            <div className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── What we build (reuses .scan-effect from globals.css) ── */

function BuildSection({ label, title, items }: BuildProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">{label}</div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">{title}</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative overflow-hidden border border-border hover:border-primary transition-colors duration-500 p-8 scan-effect"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-heading text-lg font-medium mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Demo project (optional) ───────────────────────────── */

function DemoSection({ label, title, description, modules, image, href }: DemoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <div className="border border-border bg-card/40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">{label}</div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-5">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>

            {modules && modules.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {modules.map((m, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-border px-3 py-1.5"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}

            {href && (
              <Link
                href={href}
                className="group inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-primary hover:gap-4 transition-all"
              >
                Ver el proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative min-h-70 border-t lg:border-t-0 lg:border-l border-border overflow-hidden"
            >
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ───────────────────────────────────────────── */

function ProcessSection({ label, title, steps }: ProcessProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">{label}</div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">{title}</h2>
      </motion.div>
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
          className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
        />
        <div className="space-y-16 lg:space-y-20">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="hidden md:flex md:col-span-1 justify-center pt-1">
                <div className="w-5 h-5 border-2 border-primary bg-background flex items-center justify-center z-10 relative">
                  <div className="w-1.5 h-1.5 bg-primary" />
                </div>
              </div>
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-medium tracking-tight mt-2">{s.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-muted-foreground leading-relaxed text-base">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────── */

function PageCTA({ label, line1, line2, ctaLabel }: CTAProps) {
  return (
    <section id="contact-cta" className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <div className="border-t border-border pt-20 lg:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-6">{label}</div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-10">
            {line1}
            <br />
            <span className="text-primary">{line2}</span>
          </h2>
          <button
            className="group inline-flex items-center gap-3 border border-primary text-primary px-10 py-5 font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer"
            onClick={() => {
              window.location.href = "/#contact";
            }}
          >
            <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors animate-pulse" />
            {ctaLabel}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="px-6 lg:px-10 max-w-350 mx-auto">
      <div className="border-t border-border flex items-center gap-4 py-4">
        <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">{label}</span>
      </div>
    </div>
  );
}

/* ─── Main layout ───────────────────────────────────────── */

export default function ServicePageLayout({
  hero,
  problem,
  caseStudy,
  build,
  demo,
  process,
  cta,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <PageHero {...hero} />
      <SectionDivider label="El Problema" />
      <ProblemSection {...problem} />
      <SectionDivider label="Caso Destacado" />
      <CaseStudy {...caseStudy} />
      <SectionDivider label="Qué Construimos" />
      <BuildSection {...build} />
      {demo && (
        <>
          <SectionDivider label="Proyecto Demostrativo" />
          <DemoSection {...demo} />
        </>
      )}
      <SectionDivider label="Metodología" />
      <ProcessSection {...process} />
      <PageCTA {...cta} />
    </div>
  );
}