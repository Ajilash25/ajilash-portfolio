"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Image, Code2, Trophy } from "lucide-react";

type Stat = {
  label: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  textValue?: string; // fallback if not purely numeric (e.g. "2nd Prize")
  icon: any;
  color: string;
};

const stats: Stat[] = [
  {
    label: "Model Accuracy",
    targetValue: 98,
    suffix: "%",
    icon: Target,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Images Processed",
    targetValue: 10000,
    suffix: "+",
    icon: Image,
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    label: "Major Projects",
    targetValue: 3,
    suffix: "+",
    icon: Code2,
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    label: "International Conference",
    targetValue: 0,
    suffix: "",
    textValue: "2nd Prize",
    icon: Trophy,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
];

function StatCard({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || stat.textValue) return;

    let start = 0;
    const end = stat.targetValue;
    if (start === end) return;

    // Calculate dynamic duration based on target size
    const duration = 2000; // 2 seconds total
    const incrementTime = Math.max(10, Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // increment by steps
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, stat.targetValue, stat.textValue]);

  const StatIcon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass rounded-3xl p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-all cursor-default"
    >
      <div className={`p-4 rounded-2xl border ${stat.color} mb-4`}>
        <StatIcon className="w-6 h-6" />
      </div>
      
      <div className="flex flex-col mb-2">
        <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          {stat.textValue ? (
            stat.textValue
          ) : (
            <>
              {stat.prefix}
              {count.toLocaleString()}
              {stat.suffix}
            </>
          )}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-foreground/50 mt-1 uppercase tracking-wider">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 dark:bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            Achievements & Metrics
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
