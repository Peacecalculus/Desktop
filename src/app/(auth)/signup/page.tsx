"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiLock, FiUser, FiGift } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaCircleCheck } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function clsx(...args: unknown[]) {
  return args.filter(Boolean).join(" ");
}

export default function SignupPage() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Custom colors
  const PRIMARY_RED = "#800020";
  const LIGHT_RED_BG = "#FDF2F4";
  const LIGHT_RED_BORDER = "#F9D0D9";
  const SUCCESS_GREEN_BG = "#F0FDF4";
  const SUCCESS_GREEN_BORDER = "#BBF7D0";
  const TEXT_GRAY_MEDIUM = "#6B7280";
  const TEXT_GRAY_DARK = "#1F2937";
  const INPUT_BORDER_COLOR = "#D1D5DB";
  const BORDER_DIVIDER = "#E5E7EB";

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim().length >= 8 &&
    agreedToTerms;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE */}
        <div className={clsx("hidden lg:flex flex-col gap-8 p-10")}>
          <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
            <Image
              src="/inventory-management.png"
              alt="Warehouse shelves with stock inventory"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className={clsx(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg text-white",
                  `bg-[${PRIMARY_RED}]`
                )}
              >
                <Image
                  src="/logo.png"
                  alt="StockKeeper Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-cover"
                />
              </div>
              <div>
                <p
                  className={clsx(
                    "font-semibold text-lg",
                    `text-[${TEXT_GRAY_DARK}]`
                  )}
                >
                  StockKeeper
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h2
                className={clsx(
                  "text-2xl font-bold leading-snug",
                  `text-[${TEXT_GRAY_DARK}]`
                )}
              >
                Transform Your Inventory Management
              </h2>
              <p className={clsx("text-sm", `text-[${TEXT_GRAY_MEDIUM}]`)}>
                Join thousands of businesses streamlining their stock operations
                with our powerful platform.
              </p>
            </div>

            <div
              className={clsx(
                "rounded-lg p-5 space-y-3",
                `bg-[${LIGHT_RED_BG}]`,
                `border-[${LIGHT_RED_BORDER}]`,
                "border"
              )}
            >
              <p
                className={clsx(
                  "font-medium text-sm",
                  `text-[${TEXT_GRAY_DARK}]`
                )}
              >
                Everything you need to manage stock:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Real-time inventory tracking across multiple locations",
                  "Automated low stock alerts and reorder points",
                  "Advanced analytics and inventory reports",
                  "Barcode scanning and mobile app access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCircleCheck
                      className={clsx("mt-1 h-4 w-4", `text-[${PRIMARY_RED}]`)}
                    />
                    <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 items-center text-xs">
              <div className="flex items-center gap-2">
                <FaShieldAlt
                  className={clsx("h-4 w-4", `text-[${PRIMARY_RED}]`)}
                />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                  Bank-level security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SlEarphonesAlt
                  className={clsx("h-4 w-4", `text-[${PRIMARY_RED}]`)}
                />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                  24/7 support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-6 py-10 sm:px-8 flex items-center justify-center bg-[#F9FAFB]">
          <Card className="w-full border-none shadow-none p-0 max-w-sm mx-auto bg-[#F9FAFB]">
            <CardHeader className="px-0 bg-[#F9FAFB]">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/signup-user.png"
                  alt="User icon"
                  width={52}
                  height={52}
                  className="h-15 w-15 object-cover"
                />
                <div className="space-y-1 text-center">
                  <CardTitle
                    className={clsx(
                      "text-2xl font-bold",
                      `text-[${TEXT_GRAY_DARK}]`
                    )}
                  >
                    Create Your Account
                  </CardTitle>
                  <CardDescription className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                    Start your 14-day free trial today
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0 bg-[#F9FAFB]">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className={`text-[${TEXT_GRAY_DARK}]`}
                  >
                    Full Name
                  </Label>
                  <div className="relative">
                    <FiUser
                      className={clsx(
                        "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
                        `text-[${TEXT_GRAY_MEDIUM}]`
                      )}
                    />
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={clsx(
                        "pl-10",
                        `border-[${INPUT_BORDER_COLOR}]`,
                        `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={`text-[${TEXT_GRAY_DARK}]`}>
                    Email Address
                  </Label>
                  <div className="relative">
                    <FiMail
                      className={clsx(
                        "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
                        `text-[${TEXT_GRAY_MEDIUM}]`
                      )}
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={clsx(
                        "pl-10",
                        `border-[${INPUT_BORDER_COLOR}]`,
                        `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className={`text-[${TEXT_GRAY_DARK}]`}
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <FiLock
                      className={clsx(
                        "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
                        `text-[${TEXT_GRAY_MEDIUM}]`
                      )}
                    />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={clsx(
                        "pl-10",
                        `border-[${INPUT_BORDER_COLOR}]`,
                        `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`
                      )}
                    />
                  </div>
                  <p className={clsx("text-xs", `text-[${TEXT_GRAY_MEDIUM}]`)}>
                    Must be at least 8 characters
                  </p>
                </div>

                {/* T's and C's Baby*/}
                <div className="flex items-center space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className={clsx(
                      "mt-1 h-4 w-4 rounded text-sm shrink-0",
                      `border-[${INPUT_BORDER_COLOR}]`,
                      `checked:bg-[${PRIMARY_RED}]`,
                      `checked:border-transparent`,
                      `focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_RED}]`
                    )}
                  />
                  <Label
                    htmlFor="terms"
                    className={clsx(
                      "md:text-sm text-[8px] flex items-center justify-center font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    )}
                  >
                    I agree to the{" "}
                    <Link
                      href="/external/terms-and-conditions"
                      className={clsx(
                        `text-[${PRIMARY_RED}]`,
                        "underline font-bold"
                      )}
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/external/privacy-policy"
                      className={clsx(
                        `text-[${PRIMARY_RED}]`,
                        "underline font-bold"
                      )}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={clsx(
                    "w-full text-white",
                    `bg-[${PRIMARY_RED}]`,
                    `hover:bg-[#6a001a]`
                  )}
                  disabled={!isFormValid}
                >
                  Create Account
                </Button>
              </form>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div
                  className={clsx("h-px flex-1", `bg-[${BORDER_DIVIDER}]`)}
                />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                  Or continue with
                </span>
                <div
                  className={clsx("h-px flex-1", `bg-[${BORDER_DIVIDER}]`)}
                />
              </div>

              <Button
                variant="outline"
                size="lg"
                className={clsx(
                  "w-full text-sm",
                  `border-[${INPUT_BORDER_COLOR}]`,
                  `text-[${TEXT_GRAY_DARK}]`,
                  `hover:bg-gray-100 hover:cursor-pointer`
                )}
              >
                <FaGoogle className={clsx("mr-2 h-4 w-4", `text-[#EF4444]`)} />
                Continue with Google
              </Button>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>Already have an account?</span>
                <Link
                  href="/signin"
                  className="text-primary font-medium hover:underline ml-1"
                >
                  Sign in here
                </Link>
              </div>

              {/* Free trial banner */}
              <div
                className={clsx(
                  "w-full rounded-lg py-3 md:px-4 px-1 flex items-center justify-center gap-2 md:text-sm text-[12px]",
                  `bg-[${SUCCESS_GREEN_BG}]`,
                  `border-[${SUCCESS_GREEN_BORDER}]`,
                  `text-green-700`,
                  "border"
                )}
              >
                <FiGift className="text-lg" />
                <span>14-day free trial • No credit card required</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
