"use client";

import React, { useState } from "react";
import { FaRocket as FaRocketAlt } from "react-icons/fa6";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Card from "@/components/waitlist/ui/Card";
import Input from "@/components/waitlist/ui/Input";
import Button from "@/components/waitlist/ui/Button";
import { PRIMARY_COLOR } from "@/lib/constants";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function JoinWaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

    try {
      const response = await fetch("/api/waitlist/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email.trim(),
          fullName: data.fullName.trim(),
          companyName: data.companyName?.trim() || null,
        }),
        signal: controller.signal, // This enables timeout
      });

      // Clear timeout since request succeeded in time
      clearTimeout(timeoutId);

      const result = await response.json();
      console.log("Waitlist API Response:", {
        ok: response.ok,
        status: response.status,
        result,
      });

      // Success (new or already registered)
      if (response.ok || result.message?.toLowerCase().includes("already registered") || result.message?.toLowerCase().includes("already exists")) {
        const isDuplicate = !response.ok;
        toast.success(isDuplicate ? "Welcome back!" : "You're on the list!");
        reset();
        router.push(`/waitlist/success${isDuplicate ? "?type=returning" : ""}`);
        return;
      }

      // Other API errors (400, 500, etc.)
      throw new Error(result.message || "Something went wrong");
    } catch (error: unknown) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.warn("Request timed out after 10 seconds");
          toast.error("Request timed out. Please check your connection.");
          router.push("/waitlist/error");
          return;
        }

        console.error("Waitlist error:", error);
        toast.error(error.message || "Unable to connect. Please try again.");
      } else {
        console.error("Unknown error:", error);
        toast.error("An unknown error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="join">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Secure Your Spot Today</h2>
        <p className="text-md text-gray-600 mb-10 md:mb-12">Join 2,847 businesses already on the waitlist!</p>

        <Card className="bg-white p-5 md:p-10 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left mb-1">Full Name</label>
                <Input type="text" placeholder="John Doe" {...register("fullName")} disabled={isSubmitting} className="placeholder:text-gray-400" />
                {errors.fullName && <p className="text-red-500 text-sm mt-1 text-left">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 text-left mb-1">Email Address</label>
                <Input type="email" placeholder="john@company.com" {...register("email")} disabled={isSubmitting} className="placeholder:text-gray-400" />
                {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 text-left mb-1">Company Name (Optional)</label>
              <Input type="text" placeholder="Your Company" {...register("companyName")} disabled={isSubmitting} className="placeholder:text-gray-400" />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-base md:text-lg py-3.5 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <FaRocketAlt size={22} />
              {isSubmitting ? "Joining..." : "Join the Waitlist Now"}
            </Button>

            <p className="text-sm text-gray-500 mt-4">We&apos;ll notify you as soon as we launch. No spam, ever.</p>

            <div className="pt-6 border-t border-gray-100 mt-6">
              <div className="grid grid-cols-2 gap-y-4 max-w-sm mx-auto md:flex md:justify-around">
                {["50% Off", "Priority Access", "Exclusive Features", "Free Trial"].map((benefit) => (
                  <div key={benefit} className="flex flex-col items-center">
                    <span className="h-6 w-6 rounded-full bg-emerald-400 text-white flex items-center justify-center mb-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
