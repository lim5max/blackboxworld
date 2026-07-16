import { enContent } from "./i18n/content";

export const hero = enContent.hero;
export const workCarousel = enContent.workCarousel;
export const stats = enContent.stats;
export const logos = enContent.logos.items;
export const howWeWork = enContent.howWeWork;
export const exploreWork = enContent.exploreWork;
export const whySubscribe = enContent.whySubscribe;
export const pricing = enContent.pricing.development.plans.map((plan) => ({
  ...plan,
  ctaVariant: plan.isDark ? ("dark" as const) : ("light" as const),
}));
export const testimonials = enContent.testimonials.items;
export const faqs = enContent.faqs.groups;
export const cta = {
  title: enContent.cta.title,
  buttonLabel: enContent.cta.button.label,
  href: enContent.cta.button.href,
};
export const footer = enContent.footer;
export const nav = enContent.nav;
