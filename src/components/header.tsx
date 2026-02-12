"use client";

import React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Get in touch", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Ian Sankaka
        </Link>

        <nav className="hidden md:flex items-center gap-12 ml-8 md:ml-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button size="default" className="px-5 py-2.5 text-sm md:text-base" asChild>
            <Link href="#contact" className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 md:h-5 md:w-5" />
              <span>Book a discovery call</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            onClick={() => setOpen(!open)}
            size="icon"
            variant="outline"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} />
          </Button>
        </div>
      </div>

      <MobileMenu open={open}>
        <div className="fixed inset-0 top-16 z-50 flex flex-col gap-6 bg-background p-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button asChild>
              <Link href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>Book a discovery call</span>
              </Link>
            </Button>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children }: MobileMenuProps) {
  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}
