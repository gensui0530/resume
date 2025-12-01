"use client";

import { motion } from "motion/react";
import { Mail, Clock, Sparkles, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Profile, ContactInfo } from "@/types/resume";

interface ContactSectionProps {
  profile: Profile;
  contact: ContactInfo;
}

export function ContactSection({ profile, contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get In Touch
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              {contact.casualMessage}
            </p>

            {/* 対応条件 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {contact.workStyles.map((style) => (
                <Badge key={style} variant="secondary" className="text-sm px-3 py-1">
                  {style}
                </Badge>
              ))}
            </div>

            {/* 興味のある領域 & 得意ドメイン */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">興味のある領域</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {contact.interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm font-medium">得意ドメイン</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {contact.domains.map((domain) => (
                    <Badge key={domain} variant="outline" className="text-sm">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* メールボタン */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-6"
            >
              <Button size="lg" asChild>
                <a href={`mailto:${profile.email}`} className="gap-2">
                  <Mail className="h-5 w-5" />
                  {profile.email}
                </a>
              </Button>
            </motion.div>

            {/* レスポンス目安 */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{contact.responseTime}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
