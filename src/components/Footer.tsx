"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-card-border mt-auto relative z-10 glass">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Attribution */}
        <span className="text-xs sm:text-sm text-foreground/50 font-medium">
          &copy; {new Date().getFullYear()} &bull; Designed & Developed by{" "}
          <span className="text-primary dark:text-accent font-semibold">
            Ajilash Edward
          </span>
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ajilash25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-95 transition-all p-2 rounded-lg cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ajilashedwarda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-95 transition-all p-2 rounded-lg cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ajilashedward25@gmail.com"
            className="text-foreground/50 hover:text-primary dark:hover:text-accent hover:scale-110 active:scale-95 transition-all p-2 rounded-lg cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
