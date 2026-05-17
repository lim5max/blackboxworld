import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkCarousel } from "@/components/WorkCarousel";
import { StatsSection } from "@/components/StatsSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { ExploreWorkSection } from "@/components/ExploreWorkSection";
import { WhySubscribeSection } from "@/components/WhySubscribeSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqsSection } from "@/components/FaqsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorkCarousel />
        <StatsSection />
        <HowWeWorkSection />
        <ExploreWorkSection />
        <WhySubscribeSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqsSection />
      </main>
      <Footer />
    </>
  );
}
