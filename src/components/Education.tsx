"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BarChart3, ShieldCheck } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background visual glow */}
      <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-accent/5 dark:bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Education Column */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-foreground/50">Academy</span>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-6 relative hover:shadow-xl hover:border-primary/20 transition-all cursor-default"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent font-mono text-xs font-bold">
                  2022 – 2026
                </span>
                <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  B.Tech Graduate
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-1">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-sm font-semibold text-primary dark:text-accent mb-4">
                Carmel College of Engineering and Technology
              </p>

              {/* CGPA display */}
              <div className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-card-border max-w-[200px]">
                <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-foreground/45 dark:text-foreground/40 font-bold">Cumulative CGPA</span>
                  <span className="text-base font-extrabold text-foreground">7.29 / 10</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-foreground/50">Qualifications</span>
                <h2 className="text-2xl font-bold text-foreground">Certification</h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-6 hover:shadow-xl hover:border-secondary/20 transition-all cursor-default"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-purple-400 font-mono text-xs font-bold">
                  2024
                </span>
                <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-1">
                Programming in Java
              </h3>
              <p className="text-sm font-semibold text-secondary dark:text-purple-400 mb-4">
                NPTEL (National Programme on Technology Enhanced Learning)
              </p>
              
              <p className="text-xs sm:text-sm text-foreground/60 dark:text-foreground/50 leading-relaxed mb-6">
                Completed professional curriculum on advanced Java architecture, concurrency, collection frameworks, and memory models under joint research bodies (IIT Madras).
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
