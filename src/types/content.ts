export type PageKey = "home" | "about" | "terms" | "privacy" | "refund";

export type MetadataContent = {
  title: string;
  description: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type NavContent = {
  links: Cta[];
  cta: Cta;
  languageLabel: string;
};

export type WorkCard = {
  id: string;
  image: string;
  logo: string;
  title: string;
  variant: "phone" | "wide";
};

export type StatCard = {
  label: string;
  value: string;
};

export type LogoEntry = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProcessCard = {
  tag: string;
  title: string;
  body: string;
  bgFrom: string;
  bgTo: string;
};

export type ProjectCard = {
  id: string;
  image: string;
  logo: string;
  title: string;
  subtitle: string;
};

export type FeatureCard = {
  title: string;
  body: string;
};

export type PricingPlan = {
  kind: "trial" | "subscription" | "development";
  icon: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  cadence: string;
  cta: string;
  note: string;
  included: string[];
  featured?: boolean;
  isDark?: boolean;
};

export type PricingMode = {
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
};

export type PricingContent = {
  selectorLabel: string;
  includedLabel: string;
  featuredLabel: string;
  trialCta: string;
  design: PricingMode;
  development: PricingMode;
};

export type Testimonial = {
  body: string;
  name: string;
  role: string;
  avatar: string;
  logo: string;
};

export type FaqGroup = {
  category: string;
  items: { q: string; a: string }[];
};

export type TeamMember = {
  role: string;
  body: string;
  image: string;
};

export type AboutContent = {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  intro: string;
  founderEyebrow: string;
  founderTitle: string;
  founderBody: string[];
  founderImageAlt: string;
  founderCta: string;
  teamEyebrow: string;
  teamTitle: string;
  teamSubtitle: string;
  team: TeamMember[];
  principlesTitle: string;
  principles: { title: string; body: string }[];
  closingTitle: string;
  closingBody: string;
};

export type SiteContent = {
  meta: Record<PageKey, MetadataContent>;
  nav: NavContent;
  hero: {
    badge: { prefix: string; emphasis: string; suffix: string };
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  workCarousel: WorkCard[];
  stats: StatCard[];
  logos: { title: string; items: LogoEntry[] };
  howWeWork: {
    title: string;
    subtitle: string;
    cards: ProcessCard[];
  };
  exploreWork: {
    title: string;
    body: string;
    cta: Cta;
    cards: ProjectCard[];
  };
  whySubscribe: {
    title: string;
    subtitle: string;
    cards: FeatureCard[];
    sayNoMoreLabel: string;
    sayNoMoreTo: string[];
  };
  pricing: PricingContent;
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  faqs: { title: string; groups: FaqGroup[] };
  cta: { title: string; button: Cta };
  footer: {
    title: string;
    body: string;
    emailPlaceholder: string;
    submitLabel: string;
    siteLabel: string;
    legalLabel: string;
    links: Cta[];
    legalLinks: Cta[];
    brand: string;
    year: string;
    rightsText: string;
  };
  about: AboutContent;
  legal: { updatedLabel: string; updatedDate: string };
};
