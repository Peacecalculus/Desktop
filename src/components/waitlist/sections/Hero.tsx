"use client";

import React from "react";
// import Image from "next/image";
import { FaRocket as FaRocketAlt } from "react-icons/fa6";
import { MdNotifications } from "react-icons/md";
// import { FaCalendarCheck } from "react-icons/fa6";
// import { HiUserGroup } from "react-icons/hi2";
import Button from "@/components/waitlist/ui/Button";
import { PRIMARY_COLOR } from "@/lib/constants";

interface HeroProps {
  handleScrollToJoin: () => void;
}

export default function Hero({ handleScrollToJoin }: HeroProps) {
  return (
    <>
      <section className="py-12 md:py-24 text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div
            onClick={handleScrollToJoin}
            className="bg-[#FCE7EB] font-bold text-xs sm:text-[14px] mx-auto flex items-center justify-center rounded-3xl w-auto max-w-xs sm:max-w-md p-2 mb-4 sm:mb-6 cursor-pointer"
            style={{
              color: PRIMARY_COLOR,
              animation: "pulseScaleShadow 2s infinite",
            }}
          >
            <FaRocketAlt className="mr-2 h-4 w-4" />
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Smart Inventory Management
            <br />
            <span className="" style={{ color: PRIMARY_COLOR }}>
              Made Simple
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join <b>2,847</b> businesses waiting for the revolutionary platform
            that will transform how they handle stock, shipments, and supply
            chain logistics.
          </p>
          <Button
            variant="primary"
            className={`
              text-base sm:text-lg flex items-center mx-auto justify-center gap-2 
              border border-transparent hover:cursor-pointer
              hover:bg-white 
              hover:text-[${PRIMARY_COLOR}] 
              hover:border-[${PRIMARY_COLOR}]
            `}
            onClick={handleScrollToJoin}
          >
            <MdNotifications />
            Join the Waitlist
          </Button>
        </div>
        <div className="text-[#6B7280] mt-3 text-sm">
          Get 50% off when we launch • No credit card required
        </div>
      </section>
    </>
  );
}