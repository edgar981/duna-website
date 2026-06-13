export type HeroProps = {
  label: string;
  line1: string;
  line2: string;
  description: string;
  ctaLabel: string;
};

export type OverviewProps = {
  label: string;
  headline: string;
  paragraphs: string[];
};

export type CapabilityItem = {
  title: string;
  description: string;
};

export type CapabilitiesProps = {
  label: string;
  title: string;
  items: CapabilityItem[];
};

export type Metric = {
  value: string;
  label: string;
  context: string;
  description: string;
};

export type MetricsProps = {
  label: string;
  title: string;
  metrics: Metric[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessProps = {
  label: string;
  title: string;
  steps: ProcessStep[];
};

export type CTAProps = {
  label: string;
  line1: string;
  line2: string;
  ctaLabel: string;
};

export type ServicePageLayoutProps = {
  hero: HeroProps;
  overview: OverviewProps;
  capabilities: CapabilitiesProps;
  metrics: MetricsProps;
  process: ProcessProps;
  cta: CTAProps;
};