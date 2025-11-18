"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PRIMARY_COLOR } from "@/lib/constants";

export default function Preview() {
  return (
    <section className="pb-12 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative rounded-xl overflow-hidden ">
          <Image
            src="/dashboard-preview.png"
            alt="StockKeeper Dashboard Preview"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
          <div
            className="absolute top-4 right-4 sm:top-7 sm:right-12 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <div className="bg-white/20 p-2 sm:p-3 rounded-full">
              <FaCalendarCheck size={16} />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-[24px]">Q2 2026</p>
              <p className="font-medium text-[10px] sm:text-[14px]">
                Launch Date
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-9 sm:left-16 bg-white text-xs sm:text-sm font-semibold shadow-lg flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2">
            <div className="bg-[#FCE7EB] p-2 sm:p-3 rounded-full">
              <HiUserGroup size={16} style={{ color: PRIMARY_COLOR }} />
            </div>
            <div>
              <p className="font-bold text-lg sm:text-[24px] text-[#111827]">
                2867
              </p>
              <p className="font-medium text-[10px] sm:text-[14px] text-[#4B5563]">
                On waitlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}