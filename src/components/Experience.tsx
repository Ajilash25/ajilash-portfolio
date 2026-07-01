"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const duties = [
  "Performed extensive data preprocessing, cleaning, and features scaling using Pandas and NumPy libraries.",
  "Developed robust Machine Learning models utilizing algorithms for classification and regression tasks.",
  "Executed model evaluations, tracking performance metrics including accuracy, precision, and F1-score.",
  "Maintained version control systems (Git & GitHub) for organizing experimental code iterations.",
  "Collaborated with developers in team environments, participating in code reviews and milestone updates."
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Visual background blob */}
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-secondary/5 dark:bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 hover:shadow-2xl hover:border-primary/20 dark:hover:border-accent/20 transition-all cursor-default"
          >
            {/* Header info */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-6 border-b border-card-border">
              <div className="flex gap-4 text-left">
                <div className="p-3.5 rounded-2xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border border-primary/20 dark:border-accent/20 mt-1">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                    AI / ML Intern
                  </h3>
                  <h4 className="text-base font-semibold text-primary dark:text-accent mt-0.5">
                    ICT Academy Kerala
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/50 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    Technopark, Trivandrum, India
                  </div>
                </div>
              </div>

              {/* Date badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-foreground/5 dark:bg-white/5 border border-card-border text-foreground/75 dark:text-foreground/60 font-mono text-xs sm:text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                Jan 2025 – Feb 2025
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="flex flex-col gap-4 text-left">
              <h5 className="font-mono text-xs uppercase tracking-wider text-foreground/45 dark:text-foreground/40 font-bold">
                Key Responsibilities & Contributions
              </h5>
              <div className="flex flex-col gap-3.5">
                {duties.map((duty, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="mt-1 text-emerald-500 shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground/75 dark:text-foreground/65 leading-relaxed">
                      {duty}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
