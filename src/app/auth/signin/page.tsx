"use client"

import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-card rounded-3xl border shadow-sm overflow-hidden">
        {/* LEFT SIDE – warehouse image + StoreKeeper info */}
        <div className="px-10 py-12 flex items-center">
          <div className="space-y-8 max-w-md">
            {/* Warehouse image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden  ">
              {/* change src to the real image later (warehouse photo) */}
              <Image
                src="/Inventory management.png"
                alt="Warehouse shelves"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* StoreKeeper title + description */}
            <div className="space-y-3">
  <div className="inline-flex items-center gap-3">
    <div className="relative h-10 w-10">
      <Image
        src="/logo.png"
        alt="logo"
        fill
        className="object-contain"
      />
    </div>

    <p className="text-lg text-[30px] font-bold leading-relaxed text-[#111827]">StoreKeeper</p>
  </div>

  <p className="text-[18px] font-weight[400] leading-relaxed max-w-sm text-[#4B5563]">
    Simple store management system for tracking items in and out of
    your facility.
  </p>
</div>

            {/* Feature bullets: Check in/out, Item snapshots, Activity logs */}
            {/* Feature bullets: Check in/out, Item snapshots, Activity logs */}
<div className="space-y-4 text-sm">

  {/* 1 — Check In/Out */}
  <div className="flex items-start gap-3">
    <div className="relative h-8 w-8 rounded-full bg-[#FCE7EB] flex items-center justify-center">
      <Image
        src="/bgget.png"
        alt="check in/out"
        fill
        className="object-contain p-1"
      />
    </div>

    <div>
      <p className="font-bold text-[16px] leading-relaxed font-weight[600]">Check In/Out</p>
      <p className="text-[14px] font-weight[400] text-[#4B5563] leading-relaxed">
        Track who takes what and when.
      </p>
    </div>
  </div>

  {/* 2 — Item Snapshots */}
  <div className="flex items-start gap-3">
    <div className="relative h-8 w-8 rounded-full bg-[#FCE7EB] flex items-center justify-center">
      <Image
        src="/camera.png"
        alt="camera"
        fill
        className="object-contain p-1"
      />
    </div>

    <div>
      <p className="font-bold text-[16px] leading-relaxed font-weight[600]">Item Snapshots</p>
      <p className="text-[14px] font-weight[400] text-[#4B5563] leading-relaxed">
        Document item conditions quickly.
      </p>
    </div>
  </div>

  {/* 3 — Activity Logs */}
  <div className="flex text-[16px] leading-relaxed font-weight[600] items-start gap-3">
    <div className="relative h-8 w-8 rounded-full bg-[#FCE7EB] text-[14px] font-weight[400] flex items-center justify-center">
      <Image
        src="/round.png"
        alt="activity log"
        fill
        className="object-contain p-1"
      />
    </div>

    <div>
      <p className="font-medium">Activity Logs</p>
      <p className="text-xs text-muted-foreground">
        Complete movement history.
      </p>
    </div>
  </div>

</div>

          </div>
        </div>

        {/* RIGHT SIDE – form */}
        <div className="px-10 py-12 flex items-center bg-[#F9FAFB]">
          <Card className="w-full max-w-md mx-auto border-none shadow-none bg-transparent p-0">
            <CardHeader className="px-0">
              <div className="flex flex-col items-center gap-4">
                {/* top circle icon */}
           <div className="relative h-17 w-17 inline-flex items-center justify-center rounded-full ">
  <Image
    src="/gift.png"
    alt="logo log"
    fill
    className="object-contain p-2"
  />
</div>

                <div className="space-y-1 text-center">
                  <CardTitle className="text-[30px] font-weight[700] font-bold leading-relaxed text-[#111827]">Welcome Back</CardTitle>
                  <CardDescription className="text-[#4B5563] font-weight[400] text-[16px] leading-relaxed">
                    Sign in to manage your store inventory
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0">
              <form className="space-y-4">
                {/* Email */}
                <div className="space-y-2 leading-relaxed text-[14px]  text-[#374151] font-weight[500]">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className=" bg-[#FFFFFF]"
                  />
                </div>

                {/* Password + forgot */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between leading-relaxed text-[14px]  text-[#374151] font-weight[500]">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/auth/reset-password"
                      className="  text-[14px] font-weight[500]   text-[#800020] leading-relaxed font-normal hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className=" bg-[#FFFFFF]"
                  />
                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-input text-[14px] font-weight[400] leading-relaxed text-[#4B5563]"
                    />
                    <span>Remember me</span>
                  </label>
                </div>

                {/* Sign in button */}
                <Button type="submit" size="lg" className="w-full bg-[#800020]">
                  Sign In
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-px flex-1 bg-border text-[14px] text-[#6B7280] font-weight-[400]" />
                <span>Or continue with</span>
                <div className="h-px flex-1 bg-border text-[14px] text-[#6B7280]" />
              </div>

              {/* Google button */}
<Button
  variant="outline"
  size="lg"
  className="w-full flex items-center justify-center gap-2"
>
  <Image
    src="/google.png"
    alt="Google"
    width={18}
    height={18}
    className="object-contain"
  />
  Continue with Google
</Button>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex justify-center text-xs text-muted-foreground">
              <div>
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-[#4B5563] font-medium hover:underline font-weight[400] text-[14px] leading-relaxed "
                >
                <span className="text-[#800020] font-weight[600] texx-bold leading-relaxed text-[14px]"> Sign up for free</span>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
