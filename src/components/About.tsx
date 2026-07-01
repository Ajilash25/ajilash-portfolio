"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Terminal, Server, Layers, Cloud, Sparkles, BookOpen } from "lucide-react";

const interests = [
  { icon: Brain, label: "Artificial Intelligence", desc: "Building systems that simulate human intelligence." },
  { icon: Cpu, label: "Machine Learning", desc: "Developing classification, regression & deep learning models." },
  { icon: Terminal, label: "Python Development", desc: "Writing clean, scalable backend and analysis scripts." },
  { icon: Server, label: "Backend Engineering", desc: "Designing robust, fast REST APIs and database structures." },
  { icon: Layers, label: "Full Stack Development", desc: "Constructing responsive UIs integrated with server logic." },
  { icon: Cloud, label: "Cloud Technologies", desc: "Deploying and scaling models on containerized environments." },
];

const milestones = [
  {
    year: "2026",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Carmel College of Engineering and Technology",
    desc: "Graduated with a CGPA of 7.29/10. Gained extensive theoretical knowledge in Algorithms, OS, DBMS, and OOP concepts.",
  },
  {
    year: "2025",
    title: "AI/ML Internship & Pulmo Care Project",
    institution: "ICT Academy Kerala",
    desc: "Built a hybrid CNN + Vision Transformer model with 98% accuracy for early lung disease detection, winning 2nd prize at an International Conference.",
  },
  {
    year: "2024",
    title: "NPTEL Certification & Java Mastery",
    institution: "NPTEL / IIT Madras",
    desc: "Acquired Java Programming certification, solidifying concepts of object-oriented designs and structures.",
  },
  {
    year: "2022",
    title: "Began CSE Academic Journey",
    institution: "CCET",
    desc: "Initiated professional education in software engineering, mastering fundamental languages like C, Java, and Python.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] rounded-full bg-accent/5 dark:bg-accent/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] rounded-full bg-secondary/5 dark:bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold"
          >
            Who I Am
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Interests */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-2 text-primary dark:text-accent mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-sm font-bold uppercase tracking-wider">Professional Profile</span>
              </div>
              <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/75 leading-relaxed mb-6 font-medium">
                Computer Science graduate with a strong foundation in programming, software engineering, machine learning, and web development.
              </p>
              <p className="text-sm sm:text-base text-foreground/70 dark:text-foreground/60 leading-relaxed">
                Hands-on experience building AI-powered applications, REST APIs, and full-stack web solutions. Passionate about linking front-end responsive designs with intelligent back-end frameworks to solve real-world problems.
              </p>
            </motion.div>

            {/* Interest Badges Grid */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-foreground/50 font-bold uppercase tracking-wider pl-1">Primary Interests</span>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="glass p-5 rounded-2xl flex items-start gap-4 hover:border-primary/40 dark:hover:border-accent/40 transition-all cursor-default"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <h4 className="text-sm font-bold">{interest.label}</h4>
                        <p className="text-[11px] text-foreground/60 dark:text-foreground/45 mt-1 leading-snug">{interest.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Academic & Milestone Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="font-mono text-xs text-foreground/50 font-bold uppercase tracking-wider pl-1">Milestones Timeline</span>
            
            <div className="relative border-l-2 border-card-border ml-4 pl-8 py-2 flex flex-col gap-8">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full glass border-2 border-primary dark:border-accent flex items-center justify-center bg-background z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                  </div>

                  {/* Timeline milestone card */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="glass p-6 rounded-2xl transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent font-mono text-xs font-bold">
                        {m.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
                        <BookOpen className="w-3.5 h-3.5" />
                        {m.institution}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/60 dark:text-foreground/50 leading-relaxed">
                      {m.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
