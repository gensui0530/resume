import { resumeData } from "@/data/resume";
import { HeroSection } from "@/components/sections/hero";
import { StrengthsSection } from "@/components/sections/strengths";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { PublicationsSection } from "@/components/sections/publications";
import { ContactSection } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection profile={resumeData.profile} />
      <Separator className="container mx-auto" />
      <StrengthsSection strengths={resumeData.strengths} />
      <Separator className="container mx-auto" />
      <SkillsSection skillCategories={resumeData.skillCategories} />
      <Separator className="container mx-auto" />
      <ExperienceSection experiences={resumeData.experiences} />
      <Separator className="container mx-auto" />
      <PublicationsSection publications={resumeData.publications} />
      <Separator className="container mx-auto" />
      <ContactSection profile={resumeData.profile} />
    </div>
  );
}
