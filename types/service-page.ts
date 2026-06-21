/* types/service-page.ts
   Architecture: problem → featured case → what we build → optional demo → process → CTA
   The case-study visual is a discriminated union so lines with screenshots use images
   and lines without use an on-brand schematic diagram. */

export interface HeroProps {
  label: string;
  line1: string;
  line2: string;
  description: string;
  ctaLabel: string;
  /** Short, true facts only — runs as a subtle ticker. */
  ticker?: string[];
  /** Labels for the animated flow diagram in the hero backdrop. */
  flowLabels?: FlowLabels;
}

export interface FlowLabels {
  trigger: string;
  process: string;
  outputA: string;
  outputB: string;
}

export interface ProblemProps {
  label: string;
  /** The hook question, in the client's own language. */
  hook: string;
  intro: string;
  /** Pain points the visitor will recognize. */
  pains: string[];
}

export interface DashboardTile {
  label: string;
  value: string;
}

export type CaseVisual =
  | { kind: "flow"; labels?: FlowLabels }
  | { kind: "image"; src: string; alt: string }
  | { kind: "dashboard"; tiles?: DashboardTile[]; series?: number[]; caption?: string };

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudyProps {
  label: string;
  /** Case headline / name. */
  title: string;
  /** e.g. "Sector eléctrico · Operación en campo" */
  context: string;
  challenge: string;
  solution: string;
  metrics: CaseMetric[];
  visual: CaseVisual;
  /** Optional honesty tag, e.g. "Caso real" or "Proyecto demostrativo". */
  tag?: string;
}

export interface BuildItem {
  title: string;
  description: string;
}

export interface BuildProps {
  label: string;
  title: string;
  items: BuildItem[];
}

export interface DemoProps {
  label: string;
  title: string;
  description: string;
  modules?: string[];
  image?: { src: string; alt: string };
  href?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessProps {
  label: string;
  title: string;
  steps: ProcessStep[];
}

export interface CTAProps {
  label: string;
  line1: string;
  line2: string;
  ctaLabel: string;
}

export interface ServicePageLayoutProps {
  hero: HeroProps;
  problem: ProblemProps;
  caseStudy: CaseStudyProps;
  build: BuildProps;
  /** Optional — used most on the Apps line. */
  demo?: DemoProps;
  process: ProcessProps;
  cta: CTAProps;
}