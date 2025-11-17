import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

const PRIMARY_MAROON = "#800020";
const DARK_BG = "#111827";
const INPUT_BG = "#1F2937";

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => (
  <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs hover:bg-gray-600 transition-colors cursor-pointer">
    {children}
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 text-white" style={{ backgroundColor: DARK_BG }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="h-6 w-6 rounded overflow-hidden"
                style={{ backgroundColor: PRIMARY_MAROON }}
              >
                <Image
                  src="/logo.png"
                  alt="StockKeeper Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-cover"
                />
              </div>
              <span className="text-xl font-bold">StockKeeper</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Smart inventory management made simple for modern businesses.
            </p>

            {/* Newsletter Section */}
            <h3 className="font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and inventory management tips.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 w-full rounded-l-md text-sm text-white focus:outline-none border-[#374151]"
                style={{ backgroundColor: INPUT_BG }}
              />
              <Button
                className="py-3 px-6 rounded-r-md text-sm font-semibold whitespace-nowrap hover:brightness-110"
                style={{ backgroundColor: PRIMARY_MAROON, color: "white" }}
              >
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-3 mt-6">
              <SocialIcon>f</SocialIcon>
              <SocialIcon>t</SocialIcon>
              <SocialIcon>in</SocialIcon>
              <SocialIcon>i</SocialIcon>
            </div>
          </div>

          {/* COLUMN 2: Product */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Support */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Company/Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright and Terms */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} StockKeeper. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
