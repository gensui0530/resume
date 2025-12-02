"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px -50px 0px" });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={directionVariants[direction]}
        transition={{ ...defaultTransition, delay, duration }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
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
