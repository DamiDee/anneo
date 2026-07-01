import HeroSection from "@/components/home/HeroSection";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import WorksSection from "@/components/home/WorksSection";
import DualExpertiseSection from "@/components/home/DualExpertiseSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsMarquee />
      <WorksSection />
      <DualExpertiseSection />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
