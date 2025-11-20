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
import { resendVerification } from "@/services/authService";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signup, ApiResponse, SignupData } from "@/services/authService";

function clsx(...args: unknown[]) {
  return args.filter(Boolean).join(" ");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SignupResponse {
  status_code: number;
  message?: string;
  data?: Record<string, unknown>;
}

export default function SignupPage() {
  const router = useRouter();

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  // Custom colors
  const PRIMARY_RED = "#800020";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SUCCESS_GREEN_BG = "#F0FDF4";
  const SUCCESS_GREEN_BORDER = "#BBF7D0";
  const TEXT_GRAY_MEDIUM = "#6B7280";
  const TEXT_GRAY_DARK = "#1F2937";
  const INPUT_BORDER_COLOR = "#D1D5DB";
  const BORDER_DIVIDER = "#E5E7EB";

  const isFormValid = fullName.trim() !== "" && email.trim() !== "" && password.trim().length >= 8 && agreedToTerms && passwordErrors.length === 0;

  const validatePasswordRules = (pwd: string): string[] => {
    const errors: string[] = [];
    if (pwd.length < 8) errors.push("Must be at least 8 characters");
    if (!/[A-Z]/.test(pwd)) errors.push("Must contain at least one capital letter");
    if (!/[0-9]/.test(pwd)) errors.push("Must contain at least one number");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) errors.push("Must contain at least one special character");
    return errors;
  };

  // Handlers for input change to clear errors dynamically
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Real-time validation check for feedback
    const pwdErrors = validatePasswordRules(newPassword);
    setPasswordErrors(pwdErrors);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear inline error when user starts typing in email field
    setErrors({});
  };

 const handleResendVerification = async (userEmail: string) => {
   try {
     const res = await resendVerification({ email: userEmail });
     if (res.status_code === 200) {
       toast.success("Verification email resent!", {
         description: "Check your inbox and spam folder again.",
       });
     } else {
       toast.error(res.message || "Failed to resend email.");
     }
   } catch (err: unknown) {
     if (err instanceof Error) {
       toast.error(err.message);
     } else {
       toast.error("Could not reach server to resend email.");
     }
   }
 };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   // Re-validate password just before submission
   const pwdErrors = validatePasswordRules(password);
   if (pwdErrors.length > 0) {
     setPasswordErrors(pwdErrors);
     return; // stop submission if password invalid
   } else {
     setPasswordErrors([]);
   }

   if (!isFormValid) return;

   setLoading(true);
   setErrors({}); // reset errors before submit

   try {
     const res: ApiResponse<SignupData> = await signup({
       name: fullName,
       email,
       password,
     });

     // --- 🔑 MODIFIED LOGIC: Account created, prompt for sign-in AND offer resend link 🔑 ---
     if (res.status_code === 200) {
       // This logic runs because the backend successfully created the account (status 200)
       // but is NOT sending the token, hence the need for verification.

       // 1. Show the success message and prompt to sign-in.
       // 2. Add an action button to the toast that calls handleResendVerification.
       toast.success(
         "Account created successfully. Please sign in to continue.",
         {
           description:
             res.message || "Check your email inbox to verify your account.",
           // Add the action button here!
           action: {
             label: "Resend Link",
             onClick: () => handleResendVerification(email),
           },
           duration: 10000, // Keep the toast visible longer
         }
       );

       // Redirect to the sign-in page after a short delay (so the toast is visible)
       setTimeout(() => router.push("/signin"), 1000);
     } else {
       // API FAILURE HANDLING (Status code is not 200)
       toast.error(res.message || "Signup failed"); // 👈 TOAST ERROR
       if (res.message?.toLowerCase().includes("email")) {
         // 👈 INLINE EMAIL ERROR
         setErrors({ email: res.message });
       }
     }
     // --- END MODIFIED LOGIC ---
   } catch (err: unknown) {
     // NETWORK/OTHER ERROR HANDLING
     if (err instanceof Error) {
       toast.error(err.message);
     } else {
       toast.error("Signup failed"); // 👈 GENERIC TOAST ERROR
     }
   } finally {
     setLoading(false);
   }
 };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-0">
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 ">
        {/* LEFT SIDE - PROMOTIONAL */}
        <div className={clsx("hidden lg:flex flex-col gap-8 px-10 py-10")}>
          <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
            <Image src="/inventory-management.png" alt="Warehouse shelves with stock inventory" fill className="object-cover" />
          </div>

          <div className="space-y-6 ml-10">
            <div className="flex items-center gap-3">
              <div className={clsx("inline-flex h-10 w-10 items-center justify-center rounded-lg text-white", `bg-[${PRIMARY_RED}]`)}>
                <Image src="/logo.png" alt="StockKeeper Logo" width={32} height={32} className="h-8 w-8 object-cover" />
              </div>
              <div>
              </div>
            </div>

            <div className="space-y-2">
              <ul className="space-y-2 text-sm">
                {[
                  "Real-time inventory tracking across multiple locations",
                  "Automated low stock alerts and reorder points",
                  "Advanced analytics and inventory reports",
                  "Barcode scanning and mobile app access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCircleCheck className={clsx("mt-1 h-4 w-4", `text-[${PRIMARY_RED}]`)} />
                    <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 items-center text-xs">
              <div className="flex items-center gap-2">
                <FaShieldAlt className={clsx("h-4 w-4", `text-[${PRIMARY_RED}]`)} />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2">
                <SlEarphonesAlt className={clsx("h-4 w-4", `text-[${PRIMARY_RED}]`)} />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>24/7 support</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex items-center justify-center bg-[#F9FAFB]">
          <Card className="w-full border-none shadow-none px-6 py-10 max-w-sm mx-auto bg-[#F9FAFB]">
            <CardHeader className="px-0 bg-[#F9FAFB]">
              <div className="flex flex-col items-center gap-4">
                <Image src="/signup-user.png" alt="User icon" width={52} height={52} className="h-15 w-15 object-cover" />
                <div className="space-y-1 text-center">
                  <CardTitle className={clsx("text-2xl font-bold", `text-[${TEXT_GRAY_DARK}]`)}>Create Your Account</CardTitle>
                  <CardDescription className={`text-[${TEXT_GRAY_MEDIUM}]`}>Start your 14-day free trial today</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-0 bg-[#F9FAFB]">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* FULL NAME */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className={`text-[${TEXT_GRAY_DARK}]`}>
                    Full Name
                  </Label>
                  <div className="relative">
                    <FiUser className={clsx("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4", `text-[${TEXT_GRAY_MEDIUM}]`)} />
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={clsx("pl-10", `border-[${INPUT_BORDER_COLOR}]`, `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`)}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <Label htmlFor="email" className={`text-[${TEXT_GRAY_DARK}]`}>
                    Email Address
                  </Label>
                  <div className="relative">
                    <FiMail className={clsx("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4", `text-[${TEXT_GRAY_MEDIUM}]`)} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      className={clsx("pl-10", `border-[${INPUT_BORDER_COLOR}]`, `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`)}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                  <Label htmlFor="password" className={`text-[${TEXT_GRAY_DARK}]`}>
                    Password
                  </Label>
                  <div className="relative">
                    <FiLock className={clsx("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4", `text-[${TEXT_GRAY_MEDIUM}]`)} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={handlePasswordChange}
                      className={clsx("pl-10", `border-[${INPUT_BORDER_COLOR}]`, `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`)}
                    />
                  </div>
                  {passwordErrors.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      {passwordErrors.map((err, index) => (
                        <li key={index} className="text-xs text-red-600">
                          {err}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={clsx("text-xs", `text-[${TEXT_GRAY_MEDIUM}]`)}>Must be at least 8 characters, with a capital letter, number, and special character.</p>
                  )}
                </div>

                {/* TERMS */}
                <div className="flex items-center space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className={clsx(
                      "mt-1 h-4 w-4 rounded text-[0] shrink-0",
                      `border-[${INPUT_BORDER_COLOR}]`,
                      `checked:bg-[${PRIMARY_RED}]`,
                      `checked:border-transparent`,
                      `focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_RED}]`
                    )}
                  />
                  <Label htmlFor="terms" className={clsx("md:text-[10px] text-[4px] flex items-center justify-center font-normal leading-none")}>
                    I agree to the{" "}
                    <Link href="/terms" className={clsx(`text-[${PRIMARY_RED}]`, "underline font-bold")}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className={clsx(`text-[${PRIMARY_RED}]`, "underline font-bold")}>
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>

                {/* SUBMIT BUTTON (UPDATED CLASSNAMES FOR LOADING STATE) */}
                <Button
                  type="submit"
                  size="lg"
                  className={clsx("w-full text-white transition-colors duration-200", `bg-[${PRIMARY_RED}]`, `hover:bg-[#6a001a]`, loading && "opacity-75 cursor-not-allowed")}
                  disabled={!isFormValid || loading}
                >
                  {/* 👈 LOADING TEXT */}
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              {/* OR CONTINUE WITH GOOGLE (UNCHANGED) */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className={clsx("h-px flex-1", `bg-[${BORDER_DIVIDER}]`)} />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>Or continue with</span>
                <div className={clsx("h-px flex-1", `bg-[${BORDER_DIVIDER}]`)} />
              </div>

              <Button variant="outline" size="lg" className={clsx("w-full text-sm", `border-[${INPUT_BORDER_COLOR}]`, `text-[${TEXT_GRAY_DARK}]`, `hover:bg-gray-50`)}>
                <FaGoogle className={clsx("mr-2 h-4 w-4", `text-[#EF4444]`)} />
                Continue with Google
              </Button>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-4 text-xs text-muted-foreground bg-[#F9FAFB]">
              <div className="flex items-center gap-1">
                <span>Already have an account?</span>
                <Link href="/signin" className={clsx(`text-[${PRIMARY_RED}]`, "font-medium hover:underline ml-1")}>
                  Sign in here
                </Link>
              </div>

              <div
                className={clsx(
                  "w-full rounded-lg py-3 md:px-4 px-1 flex items-center justify-center gap-2 md:text-sm text-[12px]",
                  `bg-[#F0FDF4]`,
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
