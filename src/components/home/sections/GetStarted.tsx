"use client"

import React, { useEffect, useRef } from "react";
import Card from "../ui/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: "Sign Up Free",
    description:
      "Create your account in seconds. No credit card required for your 14-day free trial.",
    image: "/sign-up-image.png",
  },
  {
    number: 2,
    title: "Add Your Products",
    description:
      "Import your inventory via CSV or add products manually. Bulk upload supported.",
    image: "/add-product-image.png",
  },
  {
    number: 3,
    title: "Start Managing",
    description:
      "Track stock, set alerts, generate reports, and optimize your inventory effortlessly.",
    image: "/manage-inventory-image.png",
  },
];

const GetStarted = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
    });

    // Card animations
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="bg-[#F9FAFB] flex flex-col gap-16 px-4 py-20 md:px-6 lg:px-20">
      {/* Header */}
      <header
        ref={headerRef}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h1 className="font-bold text-4xl md:text-5xl text-[#111827] leading-10 md:leading-12">
          Get Started in Minutes
        </h1>
        <p className="text-[#4B5563] text-xl leading-7 max-w-3xl">
          Simple setup process to get your inventory management up and running
        </p>
      </header>

      {/* Cards */}
      <div className="rounded-2xl grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(el) => {cardsRef.current[index] = el}}
          >
            <Card
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
