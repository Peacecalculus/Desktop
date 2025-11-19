"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiCheckSquare, FiUsers } from "react-icons/fi";
import { FaClipboardCheck, FaGoogle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
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
import { login } from "@/services/authService";
import { toast } from "sonner";

function clsx(...args: unknown[]) {
  return args.filter(Boolean).join(" ");
}

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const PRIMARY_RED = "#800020";
  const TEXT_GRAY_MEDIUM = "#6B7280";
  const TEXT_GRAY_DARK = "#1F2937";
  const INPUT_BORDER_COLOR = "#D1D5DB";
  const BORDER_DIVIDER = "#E5E7EB";

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const features = [
    {
      icon: FaClipboardCheck,
      title: "Check In/Out",
      description: "Track who takes what and when",
    },
    {
      icon: FaCamera,
      title: "Item Snapshots",
      description: "Document item conditions quickly",
    },
    {
      icon: GoHistory,
      title: "Activity Logs",
      description: "Complete movement history",
    },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!isFormValid) return;

  setLoading(true);

  try {
    // Call login without generic type - it already returns ApiResponse<LoginData>
    const res = await login({ email, password });

    if (res.status_code === 200 && res.data?.token) {
      // Save token if rememberMe is true
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      }

      toast.success("Login successful!");
      // Navigate to onboarding
      router.push("/onboarding");
    } else {
      // Handle invalid credentials or user not found
      toast.error(res.message || "User does not exist");
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err);
      toast.error(err.message || "Login failed");
    } else {
      console.error("Unexpected error:", err);
      toast.error("Login failed");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
                  StoreKeeper
                </p>
                <p className={clsx("text-xs", `text-[${TEXT_GRAY_MEDIUM}]`)}>
                  Simple store management system for tracking items in and out
                  of your facility.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon
                    className={clsx(
                      "mt-1 h-10 w-10 bg-[#FCE7EB] p-3 rounded-full",
                      `text-[${PRIMARY_RED}]`
                    )}
                  />
                  <div>
                    <h3
                      className={clsx(
                        "font-semibold text-sm",
                        `text-[${TEXT_GRAY_DARK}]`
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={clsx("text-xs", `text-[${TEXT_GRAY_MEDIUM}]`)}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-6 py-10 sm:px-8 flex items-center justify-center bg-[#F9FAFB]">
          <Card className="w-full border-none shadow-none p-0 max-w-sm mx-auto bg-[#F9FAFB]">
            <CardHeader className="px-0 bg-[#F9FAFB]">
              <div className="flex flex-col items-center gap-4">
                <div
                  className={clsx(
                    "inline-flex h-12 w-12 items-center justify-center rounded-full text-white",
                    `bg-[${PRIMARY_RED}]`
                  )}
                >
                  <FiUsers className="text-xl" />
                </div>
                <div className="space-y-1 text-center">
                  <CardTitle
                    className={clsx(
                      "text-2xl font-bold",
                      `text-[${TEXT_GRAY_DARK}]`
                    )}
                  >
                    Welcome Back
                  </CardTitle>
                  <CardDescription className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                    Sign in to manage your store inventory
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0 bg-[#F9FAFB]">
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                      placeholder="you@company.com"
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
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center space-x-2">
                    <div
                      onClick={() => setRememberMe(!rememberMe)}
                      className={clsx(
                        "cursor-pointer h-4 w-4 rounded border flex items-center justify-center",
                        rememberMe
                          ? `bg-[${PRIMARY_RED}] border-transparent`
                          : `border-[${INPUT_BORDER_COLOR}]`
                      )}
                    >
                      {rememberMe && (
                        <FiCheckSquare className="text-white h-4 w-4" />
                      )}
                    </div>
                    <Label
                      htmlFor="remember-me"
                      className={clsx(
                        "text-sm font-normal leading-none",
                        `text-[${TEXT_GRAY_MEDIUM}]`
                      )}
                    >
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className={clsx(
                      `text-xs font-medium hover:underline`,
                      `text-[${PRIMARY_RED}]`
                    )}
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={clsx(
                    "w-full text-white",
                    `bg-[${PRIMARY_RED}]`,
                    `hover:bg-[#6a001a]`
                  )}
                  disabled={!isFormValid || loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              {/* Divider */}
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

              {/* Google */}
              <Button
                variant="outline"
                size="lg"
                className={clsx(
                  "w-full text-sm",
                  `border-[${INPUT_BORDER_COLOR}]`,
                  `text-[${TEXT_GRAY_DARK}]`,
                  `hover:bg-gray-50`
                )}
              >
                <FaGoogle
                  className={clsx("mr-2 h-4 w-4", `text-[${TEXT_GRAY_DARK}]`)}
                />
                Continue with Google
              </Button>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-4 text-xs text-muted-foreground bg-[#F9FAFB]">
              <div className="flex items-center gap-1 text-sm">
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                  Dont have an account?
                </span>
                <Link
                  href="/auth/signup"
                  className={clsx(
                    `text-[${PRIMARY_RED}]`,
                    "font-medium hover:underline text-sm leading-relaxed"
                  )}
                >
                  Sign up for free
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
