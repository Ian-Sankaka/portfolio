"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Code2, Smartphone, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/glow-card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "I help you launch web experiences that look sharp, load quickly, and guide visitors clearly from first impression to action.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "I craft mobile apps that feel natural to use, so your customers can interact with your product comfortably from anywhere.",
  },
  {
    icon: Database,
    title: "API & Backend",
    description:
      "I make sure the engine behind your product is secure, organised, and ready to handle growth without slowing you down.",
  },
  {
    icon: Cpu,
    title: "System Design",
    description:
      "I map out how all the moving parts of your product work together, so new features are easier to integrate and ship.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Software Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-muted-foreground">
              <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500/40 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span>Available</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building digital experiences
              <span className="block text-primary">that matter</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              I craft high-performance web & mobile applications, robust APIs,
              and scalable systems. Let&apos;s turn your ideas into reality.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#contact">
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#work">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Services grid - Start a project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="services"
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-2 items-stretch max-w-5xl mx-auto"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <GlowCard
                glowColor="green"
                customSize
                className="h-full w-full rounded-3xl border border-border/60 bg-card/90 p-6 md:p-7 text-left"
              >
                <div className="flex h-full flex-col justify-between gap-4">
                  <service.icon className="h-7 w-7 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
