"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CapabilitiesProps, CTAProps, HeroProps, MetricsProps, OverviewProps, ProcessProps, ServicePageLayoutProps } from '@/types/service-page';

/* ─── Shared sub-components ─────────────────────────────── */

function PageHero({ label, line1, line2, description, ctaLabel }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end px-6 lg:px-10 pb-20 pt-32 max-w-350 mx-auto">
      {/* Back link */}
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

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-primary/10" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-8">
          {label}
        </div>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-none tracking-tight mb-8">
          {line1}
          <br />
          <span className="text-primary">{line2}</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-10">
          {description}
        </p>
        <button
          onClick={() => document.querySelector('#contact-cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-primary transition-colors duration-300 w-fit cursor-pointer"
        >
          {ctaLabel}
          <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}

function PageOverview({ label, headline, paragraphs }: OverviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <section ref={ref} className="px-6 lg:px-10 py-20 lg:py-32 max-w-350 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">{label}</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            {headline}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed">{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PageCapabilities({ label, title, items }: CapabilitiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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
            className="group border border-border hover:border-primary transition-colors duration-500 p-8"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="font-heading text-lg font-medium mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PageMetrics({ label, title, metrics }: MetricsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="group border border-border hover:border-primary transition-colors duration-500 p-8 lg:p-10 flex flex-col justify-between min-h-60"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {m.context}
            </span>
            <div>
              <div className="font-heading text-5xl lg:text-6xl font-medium text-primary mb-2">
                {m.value}
              </div>
              <div className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-4">
                {m.label}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PageProcess({ label, title, steps }: ProcessProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
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
                <span className="font-mono text-[10px] tracking-[0.3em] text-primary">{String(i + 1).padStart(2, '0')}</span>
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
              window.location.href = '/#contact';
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

function SectionDividerThin({ label }: { label: string }) {
  return (
    <div className="px-6 lg:px-10 max-w-350 mx-auto">
      <div className="border-t border-border flex items-center gap-4 py-4">
        <span className="font-mono text-[9px] tracking-[0.4em] text-muted-foreground uppercase">{label}</span>
      </div>
    </div>
  );
}

/* ─── Main layout ────────────────────────────────────────── */

export default function ServicePageLayout({ hero, overview, capabilities, metrics, process, cta }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <PageHero {...hero} />
      <SectionDividerThin label="Visión General" />
      <PageOverview {...overview} />
      <SectionDividerThin label="Capacidades" />
      <PageCapabilities {...capabilities} />
      <SectionDividerThin label="Resultados" />
      <PageMetrics {...metrics} />
      <SectionDividerThin label="Metodología" />
      <PageProcess {...process} />
      <PageCTA {...cta} />
    </div>
  );
}