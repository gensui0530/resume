"use client";

import { useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skill } from "@/types/resume";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "skills-popover-shown";
const ONBOARDING_DELAY_MS = 800;
const ONBOARDING_DURATION_MS = 5000;
const HOVER_ANIMATION = { scale: 1.05, y: -2 };
const TAP_ANIMATION = { scale: 0.95 };

const levelStars: Record<NonNullable<Skill["level"]>, string> = {
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
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  triggerOnboarding?: boolean;
}

export function SkillBadge({ skill, isOpen, onOpenChange, triggerOnboarding = false }: SkillBadgeProps) {
  // オンボーディング自動表示（外部システムlocalStorageとの同期）
  useEffect(() => {
    if (!triggerOnboarding || !skill.description) return;

    const hasShown = localStorage.getItem(STORAGE_KEY);
    if (hasShown) return;

    const showTimer = setTimeout(() => {
      onOpenChange(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }, ONBOARDING_DELAY_MS);

    const hideTimer = setTimeout(() => {
      onOpenChange(false);
    }, ONBOARDING_DELAY_MS + ONBOARDING_DURATION_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [triggerOnboarding, skill.description, onOpenChange]);

  // PCのみホバーで開閉（スマホはRadix UIのタップ動作に任せる）
  const handlePointerEnter = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") onOpenChange(true);
  }, [onOpenChange]);

  const handlePointerLeave = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") onOpenChange(false);
  }, [onOpenChange]);

  // ホバーアニメーションはPopoverが閉じている時のみ（ブレ防止）
  const hoverAnimation = isOpen ? {} : HOVER_ANIMATION;

  const badgeContent = (
    <Badge
      variant="secondary"
      className={cn(
        "transition-all px-4 py-2 flex items-center gap-2 text-sm",
        "focus:outline-none focus-visible:ring-0",
        skill.description ? "cursor-pointer" : "cursor-default"
      )}
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
      <motion.div whileHover={HOVER_ANIMATION} whileTap={TAP_ANIMATION}>
        {badgeContent}
      </motion.div>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <motion.div
          className="outline-none"
          whileHover={hoverAnimation}
          whileTap={TAP_ANIMATION}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {badgeContent}
        </motion.div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        updatePositionStrategy="always"
        className={cn(
          "w-auto max-w-[280px] p-4 text-sm rounded-xl",
          "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg",
          "border border-white/20 dark:border-gray-700/50",
          "shadow-xl shadow-black/5 dark:shadow-black/20"
        )}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <p className="text-center leading-relaxed">{skill.description}</p>
      </PopoverContent>
    </Popover>
  );
}
