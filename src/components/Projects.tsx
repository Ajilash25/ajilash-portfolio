"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, HeartPulse, Leaf, Droplet, Layers } from "lucide-react";
import { Github } from "@/components/Icons";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: "ai-ml" | "web-fs" | "all";
  tech: string[];
  features: string[];
  icon: any;
  iconColor: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Pulmo Care",
    subtitle: "Early Detection of Lung Disease",
    category: "ai-ml",
    tech: ["Python", "TensorFlow", "PyTorch", "Vision Transformer", "InceptionV3"],
    features: [
      "Hybrid CNN + Vision Transformer model",
      "98% detection accuracy",
      "Grad-CAM local visual explainability",
      "Chest X-ray multi-class classification",
      "Full Stack Deployment integration",
      "International Conference 2nd Prize Award",
    ],
    icon: HeartPulse,
    iconColor: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    githubUrl: "https://github.com/Ajilash25",
    demoUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 2,
    title: "Crop Intelligence System",
    subtitle: "Smart Agriculture Advisor",
    category: "ai-ml",
    tech: ["Python", "Flask", "React", "Scikit-Learn", "Machine Learning"],
    features: [
      "Precision Crop Recommendation engine",
      "Soil nutrient analysis & profiles",
      "Real-time climate data correlation",
      "Interactive charts & dashboard UI",
      "Scalable REST API endpoints",
    ],
    icon: Leaf,
    iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    githubUrl: "https://github.com/Ajilash25",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Blood Management System",
    subtitle: "Life-Saving Supply Chain",
    category: "web-fs",
    tech: ["Next.js", "MongoDB", "Node.js", "Express", "REST APIs"],
    features: [
      "Secure donor authentication & registration",
      "Real-time blood stock inventory updates",
      "Location-based real-time match search",
      "Fully responsive, mobile-first design",
      "Clean separation of frontend and API routes",
    ],
    icon: Droplet,
    iconColor: "text-red-500 bg-red-500/10 border-red-500/20",
    githubUrl: "https://github.com/Ajilash25",
    demoUrl: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai-ml" | "web-fs">("all");

  const filteredProjects = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent/5 dark:bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters Panel */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai-ml", label: "AI & Machine Learning" },
            { id: "web-fs", label: "Full Stack & Web" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-full font-medium text-xs sm:text-sm border transition-all duration-300 cursor-pointer ${
                filter === btn.id
                  ? "bg-primary text-white border-transparent shadow-md shadow-primary/25"
                  : "glass border-card-border hover:bg-foreground/5 dark:hover:bg-white/5 text-foreground/75 dark:text-foreground/80"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with smooth Framer Motion layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const ProjectIcon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl p-6 flex flex-col justify-between hover:shadow-2xl hover:border-primary/20 dark:hover:border-accent/20 transition-all cursor-default relative overflow-hidden"
                >
                  <div>
                    {/* Project Header Info */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`p-3 rounded-2xl border ${p.iconColor}`}>
                        <ProjectIcon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col text-left">
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                          {p.title}
                        </h3>
                        <span className="text-xs text-foreground/50 font-medium">
                          {p.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-foreground/5 dark:bg-white/5 border border-card-border text-foreground/70 dark:text-foreground/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-2.5 mb-8 text-left">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-foreground/45 dark:text-foreground/40 font-bold">
                        Key Features
                      </span>
                      <ul className="flex flex-col gap-2">
                        {p.features.map((feature, i) => (
                          <li key={i} className="text-xs sm:text-sm text-foreground/75 dark:text-foreground/60 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 dark:bg-accent/60 mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Buttons Action Group */}
                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-card-border">
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        onClick={(e) => {
                          if (p.demoUrl === "#") {
                            e.preventDefault();
                            alert(`${p.title} Demo is running (local mockup link)`);
                          }
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 rounded-xl glass border border-card-border text-foreground text-xs font-semibold hover:bg-foreground/5 dark:hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                    {p.caseStudyUrl && (
                      <a
                        href={p.caseStudyUrl}
                        onClick={(e) => {
                          if (p.caseStudyUrl === "#") {
                            e.preventDefault();
                            alert(`Case study for ${p.title} is coming soon!`);
                          }
                        }}
                        className="py-2 px-3 rounded-xl glass border border-accent/20 text-primary dark:text-accent text-xs font-semibold hover:bg-accent/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Case Study
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
