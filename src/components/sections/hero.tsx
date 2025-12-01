"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types/resume";
import { fadeInUp, defaultTransition } from "@/lib/animations";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: MapPin,
};

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            {profile.title}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground mb-6"
          >
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {profile.social.map((link, i) => {
              const Icon = socialIcons[link.platform];
              return (
                <motion.div
                  key={link.platform}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
