"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#111827] text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-4 sm:mb-0">
            <a
              href="#"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="StockKeeper Logo"
                width={30}
                height={30}
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold">StockKeeper</span>
            </a>
            {/* Motto added below the logo/title */}
            <p className="text-gray-400 text-xs mt-1 sm:ml-9">
              Smart inventory management made simple for modern businesses.
            </p>
          </div>

          {/* RIGHT: Copyright and Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-xs sm:text-sm gap-4">
            <span className="order-2 sm:order-1">
              &copy; {currentYear} StockKeeper. All rights reserved.
            </span>
            <div className="flex space-x-4 order-1 sm:order-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}