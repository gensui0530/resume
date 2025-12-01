"use client";

import { Target, Heart, Handshake } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Vision } from "@/types/resume";

interface VisionSectionProps {
  vision: Vision;
}

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section id="vision" className="py-6 md:py-6">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Vision
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-lg bg-muted/50 h-full">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Target className="h-5 w-5" />
                <span className="font-semibold">目指す姿</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {vision.goal}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 rounded-lg bg-muted/50 h-full">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">大切にしていること</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {vision.philosophy}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-6 rounded-lg bg-muted/50 h-full">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Handshake className="h-5 w-5" />
                <span className="font-semibold">貢献スタンス</span>
              </div>
              <ul className="space-y-2">
                {vision.contributions.map((item) => (
                  <li key={item.target} className="text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">{item.target}:</span>{" "}
                    {item.stance}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
