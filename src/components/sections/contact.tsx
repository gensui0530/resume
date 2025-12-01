"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Profile } from "@/types/resume";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: Mail,
};

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className="pt-6 pb-6 md:pt-6 md:pb-6">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              お気軽にご連絡ください。新しいプロジェクトやコラボレーションの機会をお待ちしています。
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-8"
            >
              <Button size="lg" asChild>
                <a href={`mailto:${profile.email}`} className="gap-2">
                  <Mail className="h-5 w-5" />
                  {profile.email}
                </a>
              </Button>
            </motion.div>

            <div className="flex justify-center gap-4">
              {profile.social.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.div
                    key={link.platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
