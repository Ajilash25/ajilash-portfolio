"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowDown, FileText, Send, Briefcase } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const roles = [
  "Python Developer",
  "AI & ML Enthusiast",
  "Full Stack Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Generate background particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * -20,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/20 dark:bg-secondary/20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ["0vh", "-100vh"],
              x: ["0vw", `${(Math.random() - 0.5) * 10}vw`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-pulse-slow pointer-events-none z-0" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary dark:text-accent mb-6 border border-primary/20 dark:border-accent/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Available for Hire & Collaboration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ajilash Edward
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-8 mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 dark:text-foreground/90">
              <span className="cursor-blink border-r-2 border-primary dark:border-accent pr-1">
                {displayedText}
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-foreground/70 dark:text-foreground/60 max-w-xl mb-8 leading-relaxed"
          >
            Computer Science graduate passionate about designing intelligent applications and scalable software solutions. Experienced in AI, Machine Learning, Full Stack Development, and Data Structures. Always eager to solve real-world problems through technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full glass border border-card-border font-medium hover:bg-foreground/5 dark:hover:bg-white/5 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass border border-card-border font-medium hover:bg-foreground/5 dark:hover:bg-white/5 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (placeholder link)");
              }}
              className="px-6 py-3 rounded-full glass border border-primary/30 dark:border-accent/30 text-primary dark:text-accent font-medium hover:bg-primary/5 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/Ajilash25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-card-border hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-90 transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ajilashedwarda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-card-border hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-90 transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ajilashedward25@gmail.com"
              className="p-3 rounded-full glass border border-card-border hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-90 transition-all cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
          >
            {/* Animated Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/20 dark:border-accent/20 pointer-events-none"
            />
            
            {/* Rotating Glow Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-gradient-to-r from-primary/10 via-transparent to-secondary/15 pointer-events-none"
            />

            {/* Inner Dashboard Glass Container */}
            <motion.div
              className="w-[88%] aspect-square glass rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl z-20 animate-float"
            >
              {/* Card Header (Mac OS Buttons style) */}
              <div className="flex justify-between items-center pb-4 border-b border-card-border">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-foreground/40 dark:text-foreground/50">
                  python_agent.py
                </span>
              </div>

              {/* Card Body - Simulated Python AI Script */}
              <div className="flex-1 font-mono text-[11px] sm:text-xs text-foreground/75 dark:text-foreground/80 py-4 leading-relaxed overflow-hidden">
                <div className="text-secondary dark:text-accent">import tensorflow as tf</div>
                <div className="text-secondary dark:text-accent">from models import PulmoCareModel</div>
                <div>&nbsp;</div>
                <div><span className="text-primary">def</span> <span className="text-emerald-500 font-semibold">analyze_image</span>(path):</div>
                <div className="pl-4">model = PulmoCareModel()</div>
                <div className="pl-4 text-slate-400"># Load chest X-ray sample</div>
                <div className="pl-4">x = load_img(path)</div>
                <div className="pl-4">pred, cam = model.predict(x)</div>
                <div className="pl-4">accuracy = <span className="text-emerald-400 font-bold">0.982</span></div>
                <div className="pl-4"><span className="text-primary">return</span> {'{ "accuracy": accuracy }'}</div>
                <div>&nbsp;</div>
                <div className="text-amber-500">{'>> analyze_image("xray.png")'}</div>
                <div className="text-emerald-500">{'{"accuracy": "98%", "label": "Normal"}'}</div>
              </div>

              {/* Floating statistics/badge in card footer */}
              <div className="flex justify-between items-center pt-4 border-t border-card-border">
                <span className="text-xs font-semibold text-primary dark:text-accent">
                  AI & ML Engine
                </span>
                <span className="text-[10px] px-2 py-1 rounded bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent font-mono">
                  v2.0.4
                </span>
              </div>
            </motion.div>

            {/* Floating Visual Badges */}
            <motion.div
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl flex items-center gap-3 z-30 shadow-lg animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-accent font-bold text-lg">
                Py
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold">Python Core</span>
                <span className="text-[10px] text-foreground/50">ML Models</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl flex items-center gap-3 z-30 shadow-lg animate-float-slow"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/15 dark:bg-secondary/20 flex items-center justify-center text-secondary dark:text-purple-400 font-bold text-lg">
                TF
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold">TensorFlow</span>
                <span className="text-[10px] text-foreground/50">Deep Learning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 dark:text-foreground/50">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" className="text-foreground/40 hover:text-primary dark:hover:text-accent transition-colors">
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
