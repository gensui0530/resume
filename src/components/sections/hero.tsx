"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Mail, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types/resume";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { ComponentType } from "react";

const iconifyIcons: Record<string, string> = {
  github: "mdi:github",
  linkedin: "mdi:linkedin",
  twitter: "mdi:twitter",
};

const lucideIcons: Record<string, ComponentType<{ className?: string }>> = {
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
      className="flex flex-col pt-24 pb-12 md:pt-32 md:pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center gap-8 md:gap-12">
          {/* 左カラム: テキストコンテンツ */}
          <motion.div
            initial="initial"
            animate="animate"
            className="flex-1"
          >
            {/* モバイル: 名前とアバターを横並び */}
            <div className="flex items-center gap-4 md:block">
              <div className="flex-1">
                <motion.p
                  variants={fadeInUp}
                  transition={{ ...defaultTransition, delay: 0.2 }}
                  className="text-primary font-medium mb-2"
                >
                  Hello, I&apos;m
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  transition={{ ...defaultTransition, delay: 0.3 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2"
                >
                  {profile.name}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  transition={{ ...defaultTransition, delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
                >
                  {profile.title}
                </motion.p>
              </div>

              {/* モバイル用アバター */}
              {profile.avatar && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...defaultTransition, delay: 0.3 }}
                  className="shrink-0 md:hidden"
                >
                  <Avatar className="size-24">
                    <AvatarImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${profile.avatar}`} alt={profile.name} />
                    <AvatarFallback className="text-2xl">GK</AvatarFallback>
                  </Avatar>
                </motion.div>
              )}
            </div>

            <motion.div
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground mt-4 mb-6"
            >
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8 max-w-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {profile.social.map((link) => {
                const iconifyIcon = iconifyIcons[link.platform];
                const LucideIcon = lucideIcons[link.platform];
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
                        {iconifyIcon ? (
                          <Icon icon={iconifyIcon} className="h-5 w-5" />
                        ) : LucideIcon ? (
                          <LucideIcon className="h-5 w-5" />
                        ) : null}
                        {link.label}
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* デスクトップ用アバター（右カラム） */}
          {profile.avatar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...defaultTransition, delay: 0.3 }}
              className="hidden md:block shrink-0"
            >
              <Avatar className="size-64">
                <AvatarImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${profile.avatar}`} alt={profile.name} />
                <AvatarFallback className="text-4xl">GK</AvatarFallback>
              </Avatar>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
