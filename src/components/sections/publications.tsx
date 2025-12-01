"use client";

import { FileText, Mic } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Publication } from "@/types/resume";

interface PublicationsSectionProps {
  publications: Publication[];
}

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section id="publications" className="py-8 md:py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Publications & Presentations
          </h2>
        </FadeIn>

        <div className="max-w-3xl">
          <ul className="space-y-4">
            {publications.map((pub, index) => (
              <FadeIn key={pub.id} delay={index * 0.05}>
                <li className="flex items-start gap-3 group">
                  <span className="mt-1 text-primary">
                    {pub.type === "paper" ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </span>
                  <div className="flex-1">
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {pub.venue}
                      <span className="mx-2">·</span>
                      {pub.year}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
