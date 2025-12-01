"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
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
};

const skillIcons: Record<string, string> = {
  TypeScript: "logos:typescript-icon",
  React: "logos:react",
  Vite: "logos:vitejs",
  "styled-components": "vscode-icons:file-type-styled",
  "React Hook Form": "simple-icons:reacthookform",
  Zod: "logos:zod",
  Jotai: "logos:jotai",
  PHP: "logos:php",
  Laravel: "logos:laravel",
  "C#": "logos:dotnet",
  PostgreSQL: "logos:postgresql",
  MySQL: "logos:mysql",
  Elasticsearch: "logos:elasticsearch",
  AWS: "logos:aws",
  Docker: "logos:docker-icon",
  "GitHub Actions": "logos:github-actions",
  Vitest: "logos:vitest",
  "React Testing Library": "logos:testing-library",
  PHPUnit: "vscode-icons:file-type-phpunit",
  ESLint: "logos:eslint",
  "Claude Code": "logos:anthropic-icon",
  "GitHub Copilot": "logos:github-copilot",
  Figma: "logos:figma",
};

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-8 md:py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-12">
            <span><span className="text-amber-500">★★★</span> Advanced</span>
            <span><span className="text-amber-500">★★</span> Intermediate</span>
            <span><span className="text-amber-500">★</span> Beginner</span>
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
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="cursor-default transition-all px-4 py-2 flex items-center gap-2 text-sm"
                        >
                          {skillIcons[skill.name] && (
                            <span className="flex items-center justify-center">
                              <Icon
                                icon={skillIcons[skill.name]}
                                width={20}
                                height={20}
                              />
                            </span>
                          )}
                          {skill.name}
                          {skill.level && (
                            <span className="ml-1 text-amber-500">
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
