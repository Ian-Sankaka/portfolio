"use client";

import { motion } from "motion/react";
import { Sparkles } from "@/components/sparkles";

const techStack = [
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000", invertInDarkMode: true },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Swift", slug: "swift", color: "F05138" },
  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "Svelte", slug: "svelte", color: "FF3E00" },
  { name: "WordPress", slug: "wordpress", color: "21759B" },
  { name: "MySQL", customSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", slug: "mysql", color: "4479A1" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 relative overflow-hidden">
      <Sparkles
        className="absolute inset-0 pointer-events-none"
        color="#94a3b8"
        background="transparent"
        size={2}
        density={60}
        speed={0.5}
        opacity={0.35}
      />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack: The Secret Sauce
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The tools and technologies I use to build fast, scalable, and
            delightful experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:rotate-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"customSrc" in tech && tech.customSrc ? tech.customSrc : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className={`w-full h-full object-contain ${"invertInDarkMode" in tech && tech.invertInDarkMode ? "dark-theme-invert" : ""}`}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
