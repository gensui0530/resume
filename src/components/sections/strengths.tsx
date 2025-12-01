"use client";

import { motion } from "motion/react";
import { Users, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Strength } from "@/types/resume";

const iconMap = {
  users: Users,
  lightbulb: Lightbulb,
  rocket: Rocket,
};

interface StrengthsSectionProps {
  strengths: Strength[];
}

function StrengthCard({ strength, index }: { strength: Strength; index: number }) {
  const Icon = iconMap[strength.icon];

  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{strength.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {strength.subtitle}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2">
              {strength.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground grid grid-cols-[auto_1fr] items-center gap-2"
                >
                  <span className="text-primary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );
}

export function StrengthsSection({ strengths }: StrengthsSectionProps) {
  return (
    <section id="strengths" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Strengths</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.id} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
