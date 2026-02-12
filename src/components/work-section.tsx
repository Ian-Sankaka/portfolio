"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Caly Flora",
    description:
      "Kenyan flower export company specialising in high-quality cut flowers for international markets. Sustainable sourcing, quality control, and cold-chain logistics for global freshness. The site showcases their product range, export capabilities, and excellence in floriculture.",
    tags: ["Ecommerce", "Export", "Frontend"],
    image: "/calyflora-home.png",
    href: "https://www.calyflora.co.ke/",
    imagePosition: "top" as const,
    mobileObjectFit: "contain" as const,
  },
  {
    title: "Leah & Gibson",
    description:
      "Nairobi-based culinary brand offering artisanal meals, pastries, and full-service catering for private and corporate events. Premium ingredients and curated dining with seamless online ordering. Customers browse menus, place orders, and book catering in one place.",
    tags: ["Ecommerce", "Food", "Shop"],
    image: "/leahgibson.png",
    href: "https://shop.leahandgibson.com",
    imagePosition: "top" as const,
    mobileObjectPosition: "40% top" as const,
  },
  {
    title: "Dawit Consult",
    description:
      "Strategic advisory firm providing tailored business and professional consulting to organisations and entrepreneurs. Structured solutions for operational efficiency and sustainable growth. The site establishes credibility, outlines services, and guides client engagement.",
    tags: ["Consulting", "Operations", "Web"],
    image: "/dawit.png",
    href: "https://dawitconsult.com/",
    imagePosition: "top" as const,
  },
  {
    title: "DonateX",
    description:
      "Donation and fundraising platform where users create and run campaigns, complete KYC verification, and receive real-time updates. Payment integration (Cybersource, M-Pesa) for secure giving and receiving of funds. Next.js and Supabase with an admin dashboard for reviewing campaigns and users.",
    tags: ["Next.js", "Supabase", "Payments"],
    image: "/donatex.png",
    imagePosition: "top" as const,
  },
  {
    title: "Greenit Decors",
    description:
      "Nairobi-based eco-centric plant and decor business offering indigenous and exotic flora, garden solutions, and event greening for homes, offices, and public spaces. Champions sustainability through organic gardening and environmental care. The website showcases plant offerings, garden centre experiences, and green lifestyle products.",
    tags: ["Web", "Eco", "Garden"],
    image: "/greenit.png",
    href: "https://greenitdecors.co.ke/",
    imagePosition: "top" as const,
  },
  {
    title: "Mizizi Eco Circle",
    description:
      "Initiative under Greenit Decors empowering children and youth with environmental knowledge and practical nature experiences. Playful activities, gardening, nature lessons, and the “Green Journal” program foster future green champions. The platform promotes interactive learning that connects young minds with nature and conservation.",
    tags: ["Education", "Eco", "Web"],
    image: "/mizizi.png",
    href: "https://mizizi.greenitdecors.co.ke/",
    imagePosition: "top" as const,
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects I&apos;ve worked on. More coming soon.
          </p>
        </motion.div>

        {/* Desktop: original layout */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={`desktop-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(148,163,184,0.35)] dark:hover:shadow-[0_0_25px_rgba(148,163,184,0.2)]"
            >
              <div className="mb-4 h-52 w-full overflow-hidden rounded-xl bg-muted/60">
                {"image" in project && project.image ? (
                  project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} website`}
                      className="block size-full"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} website preview`}
                        width={800}
                        height={400}
                        className={`h-full w-full object-cover ${"imagePosition" in project && project.imagePosition === "top" ? "object-top" : "object-center"}`}
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      width={800}
                      height={400}
                      className={`h-full w-full object-cover ${"imagePosition" in project && project.imagePosition === "top" ? "object-top" : "object-center"}`}
                    />
                  )
                ) : null}
              </div>
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: optimized layout */}
        <div className="md:hidden grid gap-8 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={`mobile-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="mb-4 w-full overflow-hidden rounded-xl bg-muted/60 aspect-video shrink-0 flex items-center justify-center">
                {"image" in project && project.image ? (
                  project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} website`}
                      className="block size-full min-h-0"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} website preview`}
                        width={800}
                        height={450}
                        sizes="100vw"
                        className={`size-full rounded-xl ${"mobileObjectFit" in project && project.mobileObjectFit === "contain" ? "object-contain" : "object-cover"} ${!("mobileObjectPosition" in project) || !project.mobileObjectPosition ? ("imagePosition" in project && project.imagePosition === "top" ? "object-top" : "object-center") : ""}`}
                        style={("mobileObjectPosition" in project && project.mobileObjectPosition) ? { objectPosition: project.mobileObjectPosition as string } : undefined}
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      width={800}
                      height={450}
                      sizes="100vw"
                      className={`size-full rounded-xl ${"mobileObjectFit" in project && project.mobileObjectFit === "contain" ? "object-contain" : "object-cover"} ${!("mobileObjectPosition" in project) || !project.mobileObjectPosition ? ("imagePosition" in project && project.imagePosition === "top" ? "object-top" : "object-center") : ""}`}
                      style={("mobileObjectPosition" in project && project.mobileObjectPosition) ? { objectPosition: project.mobileObjectPosition as string } : undefined}
                    />
                  )
                ) : null}
              </div>
              <h3 className="font-semibold text-base">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="default" className="px-5 py-2.5 text-sm md:text-base" asChild>
            <Link href="#contact" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
              <span>Explore more</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
