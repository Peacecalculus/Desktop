"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

// React Icons
import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiCircle,
  FiArrowLeft,
} from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function clsx(...args: unknown[]) {
  return args.filter(Boolean).join(" ");
}

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Custom colors
  const PRIMARY_RED = "#800020";
  const TEXT_GRAY_MEDIUM = "#6B7280";
  const TEXT_GRAY_DARK = "#1F2937";
  const INPUT_BORDER_COLOR = "#D1D5DB";
  const GREEN_CHECK = "#34D399"; 

  const passwordValidation = useMemo(() => {
    const hasMinLength = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasNumberOrSpecial = /[0-9!@#$%^&*()]/.test(newPassword);

    let score = 0;
    if (hasMinLength) score += 1;
    if (hasUppercase) score += 1;
    if (hasLowercase) score += 1;
    if (hasNumberOrSpecial) score += 1;

    let strengthText = "";
    let strengthColor = "bg-gray-200";

    if (score === 1) {
      strengthText = "Weak";
      strengthColor = "bg-red-500";
    } else if (score === 2 || score === 3) {
      strengthText = "Medium";
      strengthColor = "bg-yellow-500";
    } else if (score === 4) {
      strengthText = "Strong";
      strengthColor = "bg-green-500";
    }

    return {
      hasMinLength,
      hasUppercase,
      hasLowercase,
      hasNumberOrSpecial,
      score,
      strengthText,
      strengthColor,
    };
  }, [newPassword]);

  const isFormValid =
    newPassword.length > 0 &&
    confirmPassword.length > 0 &&
    newPassword === confirmPassword &&
    passwordValidation.score === 4; 
  const shouldShowPasswordDetails = newPassword.length >= 4;

  const RequirementIcon = ({ isMet }: { isMet: boolean }) =>
    isMet ? (
      <FiCheckCircle className={`h-4 w-4 text-[${GREEN_CHECK}]`} />
    ) : (
      <FiCircle className={`h-3 w-3 text-gray-400`} />
    );
  const passwordRequirements = [
    { text: "At least 8 characters", isMet: passwordValidation.hasMinLength },
    { text: "One uppercase letter", isMet: passwordValidation.hasUppercase },
    { text: "One lowercase letter", isMet: passwordValidation.hasLowercase },
    {
      text: "One number or special character",
      isMet: passwordValidation.hasNumberOrSpecial,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-0">
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE */}
        <div
          className={clsx(
            "hidden lg:flex flex-col p-10 items-center text-center mt-35"
          )}
        >
          <div className="flex flex-col items-center justify-center pt-16">
            <div className="relative w-40 h-40 ">
              <Image
                src="/reset-pass-lock.png"
                alt="User icon"
                width={52}
                height={52}
                className="h-35 w-35 object-cover"
              />
            </div>
          </div>
          {/* Logo & Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/logo.png"
                alt="StoreKeeper Logo"
                width={28}
                height={28}
                className="h-8 w-8 object-cover"
              />
              <p
                className={clsx(
                  "font-semibold text-xl",
                  `text-[${TEXT_GRAY_DARK}]`
                )}
              >
                StoreKeeper
              </p>
            </div>
            <p className={clsx("text-sm", `text-[${TEXT_GRAY_MEDIUM}]`)}>
              Create a strong password to secure your store management account.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form Panel) */}
        <div
          className="px-6 py-10 sm:px-8 flex items-center justify-center bg-[#F9FAFB] w-full"
        >
          <Card className="w-full border-none shadow-none p-0 max-w-sm mx-auto bg-[#F9FAFB]">
            <CardHeader className="px-0 bg-[#F9FAFB]">
              <CardTitle
                className={clsx(
                  "text-2xl font-bold text-center",
                  `text-[${TEXT_GRAY_DARK}]`
                )}
              >
                Reset Your Password
              </CardTitle>
              <p
                className={clsx(
                  "text-sm text-center mt-1",
                  `text-[${TEXT_GRAY_MEDIUM}]`
                )}
              >
                Enter your new password below. Make sure its strong and secure.
              </p>
            </CardHeader>

            <CardContent className="space-y-6 px-0 bg-[#F9FAFB]">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="newPassword"
                    className={`text-[${TEXT_GRAY_DARK}]`}
                  >
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className={clsx(
                        "pr-10",
                        `border-[${INPUT_BORDER_COLOR}]`,
                        `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`
                      )}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>

                {/* Pass Strength*/}
                {shouldShowPasswordDetails && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200 mr-2">
                        <div
                          className={clsx(
                            "h-full transition-all duration-300",
                            passwordValidation.strengthColor
                          )}
                          style={{
                            width: `${(passwordValidation.score / 4) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span
                        className={clsx(
                          "font-medium",
                          passwordValidation.strengthColor === "bg-red-500" &&
                            "text-red-500",
                          passwordValidation.strengthColor ===
                            "bg-yellow-500" && "text-yellow-500",
                          passwordValidation.strengthColor === "bg-green-500" &&
                            "text-green-500",
                          passwordValidation.strengthColor === "bg-gray-200" &&
                            `text-[${TEXT_GRAY_MEDIUM}]`
                        )}
                      >
                        {passwordValidation.strengthText}
                      </span>
                    </div>
                    <ul className="space-y-1 text-sm pt-2">
                      {passwordRequirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <RequirementIcon isMet={req.isMet} />
                          <span
                            className={clsx(
                              "text-xs",
                              req.isMet
                                ? `text-[${TEXT_GRAY_DARK}]`
                                : `text-[${TEXT_GRAY_MEDIUM}]`
                            )}
                          >
                            {req.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className={`text-[${TEXT_GRAY_DARK}]`}
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={clsx(
                        "pr-10",
                        `border-[${INPUT_BORDER_COLOR}]`,
                        `focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[${PRIMARY_RED}]`
                      )}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={clsx(
                    "w-full text-white mt-8",
                    `bg-[${PRIMARY_RED}]`,
                    `hover:bg-[#6a001a]`
                  )}
                  disabled={!isFormValid}
                >
                  <FiLock className="mr-2 h-4 w-4" />
                  Reset Password
                </Button>
              </form>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-col items-center gap-4 text-xs text-muted-foreground bg-[#F9FAFB]">
              <Link
                href="/auth/signin"
                className={clsx(
                  "font-medium text-sm flex items-center gap-1",
                  `text-[${PRIMARY_RED}]`,
                  "hover:underline"
                )}
              >
                <FiArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
              <div className="flex items-center gap-2 text-xs">
                <FaShieldAlt
                  className={clsx("h-3 w-3", `text-[${PRIMARY_RED}]`)}
                />
                <span className={`text-[${TEXT_GRAY_MEDIUM}]`}>
                  Your password is encrypted and secure
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
