"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset status after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-0 w-[200px] h-[200px] bg-primary/5 dark:bg-primary/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-secondary/5 dark:bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-primary dark:text-accent font-semibold">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-foreground">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="font-mono text-xs text-foreground/50 font-bold uppercase tracking-wider pl-1">
              Contact Details
            </span>

            {/* Email Card */}
            <motion.a
              href="mailto:ajilashedward25@gmail.com"
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="p-3.5 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent border border-primary/10">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/50 font-mono">Email Address</span>
                <span className="text-sm sm:text-base font-bold text-foreground truncate">
                  ajilashedward25@gmail.com
                </span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/50 font-mono">Location</span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  Alappuzha, Kerala, India
                </span>
              </div>
            </motion.div>

            {/* Socials Group */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-foreground/50 font-bold uppercase tracking-wider pl-1">
                Social Networks
              </span>
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/ajilashedwarda"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="glass p-4 rounded-2xl flex items-center gap-3.5 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold">LinkedIn</span>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/Ajilash25"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="glass p-4 rounded-2xl flex items-center gap-3.5 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="p-2.5 rounded-lg bg-foreground/5 dark:bg-white/10 text-foreground">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold">GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-3xl relative text-left"
            >
              <span className="font-mono text-xs text-foreground/50 font-bold uppercase tracking-wider mb-6 block">
                Send a Message
              </span>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-foreground/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl bg-foreground/5 dark:bg-white/5 border text-sm focus:outline-none focus:border-primary transition-all text-foreground ${
                      errors.name ? "border-rose-500" : "border-card-border"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-rose-500 pl-1">{errors.name}</span>}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-foreground/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl bg-foreground/5 dark:bg-white/5 border text-sm focus:outline-none focus:border-primary transition-all text-foreground ${
                      errors.email ? "border-rose-500" : "border-card-border"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-rose-500 pl-1">{errors.email}</span>}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl bg-foreground/5 dark:bg-white/5 border text-sm focus:outline-none focus:border-primary transition-all resize-none text-foreground ${
                      errors.message ? "border-rose-500" : "border-card-border"
                    }`}
                    placeholder="Hi, I would like to discuss a project..."
                  />
                  {errors.message && <span className="text-xs text-rose-500 pl-1">{errors.message}</span>}
                </div>

                {/* Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitted
                      ? "bg-emerald-500 text-white"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                  } disabled:opacity-85`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
