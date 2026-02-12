"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "The project was handled with great professionalism from start to finish. Our vision was clearly understood, communication was smooth, and the final delivery exceeded expectations.",
    by: "Catherine Gichungu, Managing Director, Caly Flora",
    imgSrc: "https://i.pravatar.cc/150?img=32",
  },
  {
    tempId: 1,
    testimonial:
      "From the initial discussions to delivery, the process was well structured and efficient. Attention to detail and problem-solving stood out throughout the engagement.",
    by: "Ephy Hunja, Chief Operating Officer, Dawit Consult",
    imgSrc: "https://i.pravatar.cc/150?img=52",
  },
  {
    tempId: 2,
    testimonial:
      "The solution delivered was reliable, user-friendly, and well thought out. It addressed our needs effectively while maintaining a high level of professionalism.",
    by: "Brian Otieno, Partnerships Manager, DonateX",
    imgSrc: "https://i.pravatar.cc/150?img=33",
  },
  {
    tempId: 3,
    testimonial:
      "Strong technical expertise and a clear understanding of our requirements were evident throughout the project. Delivery was timely and aligned perfectly with our objectives.",
    by: "Nicholas Wafula, CEO, KISM",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    tempId: 4,
    testimonial:
      "Our ideas were translated into a functional and visually appealing solution. The balance between design, performance, and usability was handled exceptionally well.",
    by: "Aisha Mwende, Creative Director, Greenit Decors",
    imgSrc: "https://i.pravatar.cc/150?img=47",
  },
  {
    tempId: 5,
    testimonial:
      "The work aligned seamlessly with our sustainability goals. The approach was thoughtful, efficient, and delivered meaningful impact for our organization.",
    by: "Samuel Kariuki, Sustainability Programs Lead, Mizizi Eco Circle",
    imgSrc: "https://i.pravatar.cc/150?img=28",
  },
  {
    tempId: 6,
    testimonial:
      "The entire process was smooth and well managed. Our brand is now presented more clearly and professionally, and the results met our expectations.",
    by: "Catherine Kinyua, Head Chef, Leah & Gibson",
    imgSrc: "https://i.pravatar.cc/150?img=45",
  },
  {
    tempId: 7,
    testimonial:
      "A practical understanding of our operations was demonstrated, resulting in a solution that supports our daily work and improves efficiency.",
    by: "Kinyua, Agronomist, Uncle Bob's Farm",
    imgSrc: "https://i.pravatar.cc/150?img=60",
  },
  {
    tempId: 8,
    testimonial:
      "The technical implementation was clean, well documented, and reliable. Everything was set up in a way that made ongoing operations straightforward.",
    by: "Eric, Technical Operations, KISM",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 9,
    testimonial:
      "Our brand was well captured and translated into a solution that resonates with our clients. Feedback since launch has been very positive.",
    by: "Laban Sogomo, CEO, Javilla Eagles Safari",
    imgSrc: "https://i.pravatar.cc/150?img=15",
  },
  {
    tempId: 10,
    testimonial:
      "A strong understanding of fintech requirements was demonstrated, particularly around performance and reliability. The final product met our standards and expectations.",
    by: "Kevin Kigima, CEO, PokeaPay",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    tempId: 11,
    testimonial:
      "Collaboration was smooth and aligned with our technical standards. Flexibility and the ability to adapt to evolving requirements made the engagement very effective.",
    by: "Vivian Wagumba, Tech Lead, CITAM",
    imgSrc: "https://i.pravatar.cc/150?img=22",
  },
  {
    tempId: 13,
    testimonial:
      "We needed a clean, fast site for our legal practice. Ian delivered exactly that. Clients find us easily and our team can update content without hassle.",
    by: "Wameyo Onyango, Wameyo Advocates",
    imgSrc: "https://i.pravatar.cc/150?img=24",
  },
  {
    tempId: 12,
    testimonial:
      "Processes became clearer and more efficient after implementation. The structured approach made collaboration easy and productive.",
    by: "Diana Daniel, Operations, RFP",
    imgSrc: "https://i.pravatar.cc/150?img=23",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: isCenter
          ? "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)"
          : undefined,
        borderRadius: isCenter ? undefined : 0,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3
        className={cn(
          "text-sm sm:text-base font-medium",
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-xs italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        <strong>{testimonial.by.split(",")[0].trim()}</strong>
        {testimonial.by.includes(",") ? ", " + testimonial.by.split(",").slice(1).map((s) => s.trim()).join(", ") : ""}
      </p>
    </div>
  );
};

const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30 rounded-none border-y border-border/60 px-8 md:px-16"
      style={{ height: 560 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-colors rounded-full",
            "bg-background border border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-colors rounded-full",
            "bg-background border border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export function TestimonialsColumn() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A rotating stack of testimonials from teams I've helped ship
            and scale products with.
          </p>
        </div>
      </div>

      <div className="w-full">
        <StaggerTestimonials />
      </div>
    </section>
  );
}
