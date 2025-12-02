"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { SkillBadge } from "@/components/ui/skill-badge";
import { SkillCategory } from "@/types/resume";

const STORAGE_KEY = "skills-popover-shown";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (isInView && typeof window !== "undefined") {
      const hasShown = localStorage.getItem(STORAGE_KEY);
      if (!hasShown) {
        setShowOnboarding(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="skills" className="py-8 md:py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-12">
            <span>
              <span className="text-amber-500">★★★</span> Advanced
            </span>
            <span>
              <span className="text-amber-500">★★</span> Intermediate
            </span>
            <span>
              <span className="text-amber-500">★</span> Beginner
            </span>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.category} delay={categoryIndex * 0.05}>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillBadge
                        skill={skill}
                        autoShow={showOnboarding && skill.name === "TypeScript"}
                      />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
