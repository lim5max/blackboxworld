import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExploreWorkSection } from "@/components/ExploreWorkSection";
import { FaqsSection } from "@/components/FaqsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { LogosMarquee } from "@/components/LogosMarquee";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhySubscribeSection } from "@/components/WhySubscribeSection";
import { WorkCarousel } from "@/components/WorkCarousel";
import { isLocale } from "@/lib/i18n/config";
import { getLocalizedMetadata, getSiteContent } from "@/lib/i18n/content";

type HomeProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLocalizedMetadata(locale, "home");
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getSiteContent(locale);

  return (
    <>
      <Navbar locale={locale} content={content.nav} />
      <main className="flex-1">
        <HeroSection content={content.hero} />
        <WorkCarousel content={content.workCarousel} />
        <StatsSection content={content.stats} />
        <LogosMarquee content={content.logos} />
        <HowWeWorkSection content={content.howWeWork} />
        <ExploreWorkSection content={content.exploreWork} />
        <WhySubscribeSection content={content.whySubscribe} />
        <PricingSection locale={locale} content={content.pricing} />
        <TestimonialsSection content={content.testimonials} />
        <FaqsSection content={content.faqs} />
      </main>
      <Footer locale={locale} cta={content.cta} content={content.footer} />
    </>
  );
}
