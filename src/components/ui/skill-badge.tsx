"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skill } from "@/types/resume";

const STORAGE_KEY = "skills-popover-shown";

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

interface SkillBadgeProps {
  skill: Skill;
  triggerOnboarding?: boolean;
}

export function SkillBadge({ skill, triggerOnboarding = false }: SkillBadgeProps) {
  const [open, setOpen] = useState(false);

  // オンボーディング自動表示（外部システムlocalStorageとの同期）
  useEffect(() => {
    if (!triggerOnboarding || !skill.description) return;

    const hasShown = localStorage.getItem(STORAGE_KEY);
    if (hasShown) return;

    const showTimer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }, 800);

    const hideTimer = setTimeout(() => {
      setOpen(false);
    }, 800 + 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [triggerOnboarding, skill.description]);

  const badgeContent = (
    <Badge
      variant="secondary"
      className={`transition-all px-4 py-2 flex items-center gap-2 text-sm focus:outline-none focus-visible:ring-0 ${skill.description ? "cursor-pointer" : "cursor-default"}`}
    >
      {skillIcons[skill.name] && (
        <span className="flex items-center justify-center">
          <Icon icon={skillIcons[skill.name]} width={20} height={20} />
        </span>
      )}
      {skill.name}
      {skill.level && (
        <span className="ml-1 text-amber-500">{levelStars[skill.level]}</span>
      )}
    </Badge>
  );

  // descriptionがない場合はPopoverなしで表示
  if (!skill.description) {
    return (
      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
        {badgeContent}
      </motion.div>
    );
  }

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <motion.div
          className="outline-none"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {badgeContent}
        </motion.div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        updatePositionStrategy="always"
        className="w-auto max-w-[280px] p-4 text-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-black/20 rounded-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-center leading-relaxed">{skill.description}</p>
      </PopoverContent>
    </Popover>
  );
}
