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

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-card rounded-3xl border shadow-sm overflow-hidden">
        {/* LEFT SIDE – matches Figma more */}
        <div className="px-10 py-12 bg-card flex items-center">
          <div className="max-w-md space-y-8">
            {/* Big round key icon */}
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary text-3xl">
              🔑
            </div>

            {/* Logo + title + text */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-semibold">
                  SK
                </div>
                <div>
                  <p className="font-semibold text-lg">StoreKeeper</p>
                  <p className="text-sm text-muted-foreground">
                    Reset your password to regain secure access to your store
                    management system.
                  </p>
                </div>
              </div>
            </div>

            {/* Pink reset process card */}
            <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 space-y-3">
              <p className="font-semibold text-sm">Password Reset Process:</p>

              <div className="space-y-3 text-sm">
                {[
                  "Enter your registered email address",
                  "Check your inbox for reset link",
                  "Create a new secure password",
                  "Sign in with your new password",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-xs"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                      {index + 1}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-10 py-12 flex items-center bg-muted/20">
          <Card className="w-full max-w-md mx-auto border-none shadow-none bg-transparent p-0">
            <CardHeader className="px-0">
              <div className="flex flex-col items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
                  📧
                </div>
                <div className="space-y-1 text-center">
                  <CardTitle className="text-2xl">Forgot Password?</CardTitle>
                  <CardDescription>
                    No worries, we&apos;ll send you reset instructions.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the email address associated with your account.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Reset Link
                </Button>
              </form>

              {/* Blue info card */}
              <div className="space-y-3 text-xs">
                <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 space-y-1">
                  <p className="font-medium text-blue-900">What happens next?</p>
                  <p className="text-blue-800">
                    We&apos;ll send you an email with a secure link to reset your
                    password. The link expires in 1 hour for security purposes.
                  </p>
                </div>

                {/* Grey info card */}
                <div className="rounded-xl border bg-muted px-4 py-3 space-y-1">
                  <p className="font-medium text-foreground">Security Notice</p>
                  <p className="text-muted-foreground">
                    If you don&apos;t receive an email within a few minutes,
                    check your spam folder or contact support.
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <Link
                href="/login"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                ← Back to Sign In
              </Link>
              <div>
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up for free
                </Link>
              </div>
              <div>
                Need help?{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Contact Support
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
