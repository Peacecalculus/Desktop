"use client"

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

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-card rounded-3xl border shadow-sm overflow-hidden">
        {/* LEFT SIDE – illustration + brand copy */}
        <div className="px-10 py-12 flex items-center">
          <div className="max-w-md space-y-8">
            {/* Big lock in circle */}
            <div className="flex justify-center">
              <div className="relative inline-flex h-40 w-40 items-center justify-center rounded-full bg-primary/5">
                <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl text-primary">🔒</span>
                </div>
              </div>
            </div>

            {/* Brand block */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-semibold">
                  SK
                </div>
                <p className="font-semibold text-lg">StoreKeeper</p>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                Create a strong password to secure your store management
                account.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – form + strength + rules */}
        <div className="px-10 py-12 flex items-center bg-muted/20">
          <Card className="w-full max-w-md mx-auto border-none shadow-none bg-transparent p-0">
            <CardHeader className="px-0">
              <div className="space-y-1">
                <CardTitle className="text-2xl">Reset Your Password</CardTitle>
                <CardDescription>
                  Enter your new password below. Make sure it&apos;s strong and
                  secure.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0">
              <form className="space-y-4">
                {/* New password */}
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>

                {/* Password strength row */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">
                      Password strength
                    </span>
                    <span className="text-muted-foreground">Medium</span>
                  </div>
                </div>
<div className="flex items-center gap-2 mt-1">
  {/* Segment 1 – Red */}
  <div className="h-1.5 w-1/4 rounded-full bg-red-500" />

  {/* Segment 2 – Yellow */}
  <div className="h-1.5 w-1/4 rounded-full bg-yellow-400" />

  {/* Segment 3 – Grey */}
  <div className="h-1.5 w-1/4 rounded-full bg-gray-200" />

  {/* Segment 4 – Grey */}
  <div className="h-1.5 w-1/4 rounded-full bg-gray-200" />
</div>


                {/* Confirm password */}
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>

                {/* Password rules card */}
                <div className="rounded-2xl bg-muted border px-4 py-4 space-y-3 text-xs">
                  <p className="font-medium text-foreground">
                    Password must contain:
                  </p>

                  <div className="space-y-2 text-muted-foreground">
                    {/* First rule – green with filled circle */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </span>
                      <span>At least 8 characters</span>
                    </div>

                    {/* Other rules – grey circles */}
                    {[
                      "One uppercase letter",
                      "One lowercase letter",
                      "One number or special character",
                    ].map((rule) => (
                      <div
                        key={rule}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/40" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Reset Password
                </Button>
              </form>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <Link
                href="/auth/signin"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                ← Back to Sign In
              </Link>
              <p>Your password is encrypted and stored securely.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
