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

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-card rounded-xl border shadow-sm overflow-hidden">
        {/* LEFT SIDE */}
        <div className="bg-muted/40 px-8 py-10 flex flex-col gap-8">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/Inventory management.png"
              alt="Warehouse shelves"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-semibold">SK</span>
              </div>
              <div>
                <p className="font-semibold text-lg">StoreKeeper</p>
                <p className="text-sm text-muted-foreground">
                  Everything you need to manage stock in one simple workspace.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-medium">Real-time quantities</p>
                  <p className="text-muted-foreground text-xs">
                    Always know what&apos;s available in your store.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-medium">Photo history</p>
                  <p className="text-muted-foreground text-xs">
                    Capture item conditions with every movement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                  ✓
                </span>
                <div>
                  <p className="font-medium">Staff accountability</p>
                  <p className="text-muted-foreground text-xs">
                    Track who took what and when in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-8 py-10 flex items-center">
          <Card className="w-full border-none shadow-none p-0">
            <CardHeader className="px-0">
              <div className="flex flex-col items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="space-y-1 text-center">
                  <CardTitle className="text-2xl">
                    Create your account
                  </CardTitle>
                  <CardDescription>
                    Start your 14-day free trial of StoreKeeper
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0">
              <form className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="Sandra" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Analaba" />
                  </div>
                </div>

                {/* Work email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-input"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-xs text-muted-foreground font-normal"
                  >
                    I agree to the{" "}
                    <span className="text-primary underline-offset-2 hover:underline">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-primary underline-offset-2 hover:underline">
                      Privacy Policy
                    </span>
                    .
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Create account
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                <span>Or continue with</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Google */}
              <Button variant="outline" size="lg" className="w-full">
                Continue with Google
              </Button>
            </CardContent>

           <CardFooter className="px-0 pt-4 flex flex-col items-center gap-4 text-xs text-muted-foreground">
  <div className="flex items-center gap-1">
    <span>Already have an account?</span>
    <Link
      href="/login"
      className="text-primary font-medium hover:underline ml-1"
    >
      Sign in here
    </Link>
  </div>

  {/* Free trial banner */}
  <div className="w-full rounded-lg bg-green-50 border border-green-200 text-green-700 py-3 px-4 flex items-center justify-center gap-2">
    {/* Gift icon (you can replace with a real icon later) */}
    <span className="text-lg">🎁</span>
    <span className="text-sm">
      14-day free trial • No credit card required
    </span>
  </div>
</CardFooter>

          </Card>
        </div>
      </div>
    </div>
  )
}
