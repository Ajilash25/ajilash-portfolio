"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half of width (150px) to center it
      mouseY.set(e.clientY - 150); // Offset by half of height (150px) to center it
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        background: "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
      }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full blur-2xl z-30 opacity-70 dark:opacity-100"
    />
  );
}
