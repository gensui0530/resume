"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Experience } from "@/types/resume";

interface ExperienceSectionProps {
  experiences: Experience[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  const [year, month] = dateStr.split("-");
  return `${year}/${month}`;
}

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2,
        }}
        className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10"
      />

      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? -50 : 50 }
        }
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-card rounded-xl border ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <span className="text-sm text-muted-foreground">
          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
        </span>
        <h3 className="text-xl font-semibold mt-1">{experience.company}</h3>
        <p className="text-primary font-medium">{experience.position}</p>
        <p className="text-muted-foreground mt-3">{experience.description}</p>

        {experience.achievements.length > 0 && (
          <ul className="mt-3 grid gap-1">
            {experience.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground grid grid-cols-[auto_1fr] items-center gap-2"
              >
                <span className="text-primary">-</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-8 md:py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Experience</h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
