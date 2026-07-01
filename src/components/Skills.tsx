"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code, Database, Wrench, Lightbulb, Languages, Cpu, Terminal } from "lucide-react";

type Skill = {
  name: string;
  level: number; // 0 to 100
};

type Category = {
  id: string;
  name: string;
  icon: any;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    id: "languages-frameworks",
    name: "Languages & Web",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "C Language", level: 70 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    id: "ai-ml-db",
    name: "AI, ML & Databases",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas & NumPy", level: 95 },
      { name: "Vision Transformer", level: 80 },
      { name: "InceptionV3", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "tools-concepts",
    name: "Tools & Concepts",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code & Jupyter", level: 95 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Deep Learning (CNNs)", level: 85 },
      { name: "Excel, PPT & Word", level: 80 },
    ],
  },
  {
    id: "spoken-languages",
    name: "Languages Spoken",
    icon: Languages,
    skills: [
      { name: "English", level: 90 },
      { name: "Malayalam", level: 100 },
      { name: "Tamil", level: 80 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[250px] h-[250px] bg-primary/5 dark:bg-primary/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] bg-secondary/5 dark:bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            My Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/25"
                    : "glass border-card-border hover:bg-foreground/5 dark:hover:bg-white/5 text-foreground/70 dark:text-foreground/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-primary/30 dark:hover:border-accent/30 transition-all cursor-default"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground/90 text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-primary dark:text-accent">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-foreground/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 + 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
