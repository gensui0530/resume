"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { SkillCategory } from "@/types/resume";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const levelStars = {
  beginner: "★",
  intermediate: "★★",
  advanced: "★★★",
  expert: "★★★★",
};

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Skills</h2>
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
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="cursor-default transition-all px-3 py-1"
                        >
                          {skill.name}
                          {skill.level && (
                            <span className="ml-1.5 text-primary">
                              {levelStars[skill.level]}
                            </span>
                          )}
                        </Badge>
                      </motion.div>
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
