"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { fadeInUp, defaultTransition } from "@/lib/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction = "up",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={directionVariants[direction]}
      transition={{ ...defaultTransition, delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInOnLoad({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: Omit<FadeInProps, "direction">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={{ ...defaultTransition, delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
