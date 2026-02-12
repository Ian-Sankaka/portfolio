import { Hero } from "@/components/hero";
import { TechStackSection } from "@/components/tech-stack-section";
import { TestimonialsColumn } from "@/components/testimonials";
import { WorkSection } from "@/components/work-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStackSection />
      <WorkSection />
      <TestimonialsColumn />
      <ContactSection />
    </>
  );
}
