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

export type PricingTier = {
  icon: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  cadence: string;
  cta: string;
  ctaVariant: "light" | "dark";
  included: string[];
  isDark?: boolean;
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
