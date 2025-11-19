"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import {
  FaCircleCheck,
  FaCirclePlay,
  FaGift,
  FaRocket,
  FaUsers,
} from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import Button from "../ui/Button";

// --- FIX 1 & 2: Define missing constants/functions ---
// Define the primary color constant locally (or import it if it's elsewhere)
const PRIMARY_COLOR = "#800020"; // Based on your text-[#800020]

const HomeHero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Define the scrolling function within the component
  const handleScrollToJoin = () => {
    // Logic to scroll to the "Join Now" section would go here.
    // Example: document.getElementById('join-section').scrollIntoView({ behavior: 'smooth' });
    console.log("Scrolling to join section...");
  };
  // --- END FIX ---

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(".hero-heading", {
          y: 40,
          opacity: 0,
          duration: 0.7,
        })
        .from(".hero-text", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        })
        .from(".hero-buttons", {
          opacity: 0,
          y: 30,
          duration: 0.6,
        })
        .from(".hero-checks", {
          opacity: 0,
          stagger: 0.15,
          y: 15,
          duration: 0.5,
        })
        .from(".hero-image", {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
        })
        .from(".hero-overlay", {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.6,
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="mt-16 flex flex-col gap-12 px-4 md:px-6 lg:flex-row lg:px-20"
    >
      {/* TEXT CONTENT */}
      <div className="flex flex-col justify-center gap-6 lg:w-1/2">
        <div
          onClick={handleScrollToJoin} // FIXED: Function is now defined
          className="bg-[#FCE7EB] font-bold text-xs sm:text-[14px] flex items-center justify-center rounded-3xl w-auto max-w-xs sm:max-w-md p-2 mb-4 sm:mb-6 cursor-pointer hero-badge" // Added hero-badge class for GSAP
          style={{
            color: PRIMARY_COLOR, // FIXED: Constant is now defined
            animation: "pulseScaleShadow 2s infinite",
          }}
        >
          <FaGift className="mr-2 h-4 w-4" />
          Launching Soon - Reserve Your Spot Now
          <style jsx>{`
            @keyframes pulseScaleShadow {
              0%,
              100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(252, 231, 235, 0.5);
              }
              50% {
                transform: scale(1.05);
                box-shadow: 0 0 20px 10px rgba(252, 231, 235, 0.5);
              }
            }
          `}</style>
        </div>

        <h1 className="hero-heading text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
          Manage Your Inventory with{" "}
          <span className="text-[#800020]">Confidence</span>
        </h1>
        {/* ... rest of the component remains the same ... */}
        <p className="hero-text text-xl leading-relaxed text-[#4B5563] max-w-[95%]">
          StockKeeper helps businesses track, manage, and optimize their
          inventory in real-time.
        </p>

        <div className="hero-buttons flex flex-col gap-4 md:flex-row">
          <Button className="flex items-center justify-center gap-2 py-4 font-semibold hover:cursor-pointer hover:border border-[#800020] hover:text-[#800020] hover:bg-white">
            <FaRocket /> Start Free Trial – No Credit Card
          </Button>

          <Button className="bg-[#D1D5DB] py-4 hover:bg-[#c3c7cd] transition hover:cursor-pointer hover:border-[#374151] border">
            <span className="flex items-center justify-center gap-2 font-semibold text-[#374151]">
              <FaCirclePlay /> Watch Demo
            </span>
          </Button>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 md:gap-4">
          {[
            "No credit card required",
            "14-day free trial",
            "Cancel anytime",
          ].map((text, i) => (
            <div
              key={i}
              className="hero-checks flex items-center gap-2 text-sm text-[#4B5563]"
            >
              <FaCircleCheck className="text-[#22C55E]" /> <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO IMAGES */}
      <div className="relative lg:w-1/2">
        <Image
          src="/home-hero.png"
          alt="Inventory management dashboard"
          width={380}
          height={285}
          className="hero-image md:hidden"
          priority
        />

        <Image
          src="/hero-image-tablet.png"
          alt="Inventory management dashboard"
          width={720}
          height={540}
          className="hero-image hidden md:block lg:hidden"
          priority
        />

        <Image
          src="/hero-image-desktop.png"
          alt="Inventory management dashboard"
          width={616}
          height={462}
          className="hero-image hidden lg:block"
          priority
        />

        {/* USERS OVERLAY */}
        <div className="hero-overlay absolute right-2 top-0 flex items-center gap-2 rounded-xl bg-[#800020] p-6 text-white shadow-lg">
          <div className="rounded-full bg-white/20 p-3">
            <FaUsers size={24} />
          </div>
          <div>
            <p className="text-lg font-bold sm:text-2xl">5,000+</p>
            <p className="text-[11px] sm:text-sm">Happy Users</p>
          </div>
        </div>

        {/* ACCURACY OVERLAY */}
        <div className="hero-overlay absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white p-6 shadow-lg">
          <div className="rounded-full bg-[#DCFCE7] p-3 text-[#16A34A] font-bold">
            <BsGraphUp size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-[#111827] sm:text-2xl">98%</p>
            <p className="text-[11px] font-medium text-[#4B5563] sm:text-sm">
              Accuracy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
