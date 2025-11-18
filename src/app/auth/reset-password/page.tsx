"use client"

import { useState } from "react"

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function ResetPasswordPage() {
	const [password, setPassword] = useState("")
	const [confirm, setConfirm] = useState("")

	const hasLength = password.length >= 8
	const hasUppercase = /[A-Z]/.test(password)
	const hasLowercase = /[a-z]/.test(password)
	const hasNumber = /[0-9]/.test(password)
	const hasSpecial = /[^A-Za-z0-9]/.test(password)

	const checks = [hasLength, hasUppercase, hasLowercase, hasNumber || hasSpecial]
	const passed = checks.filter(Boolean).length

	let strengthLabel = "Weak"
	const strengthColors = ["bg-gray-200", "bg-gray-200", "bg-gray-200", "bg-gray-200"]

	if (passed === 1) {
		strengthLabel = "Weak"
		strengthColors[0] = "bg-red-500"
	} else if (passed === 2) {
		strengthLabel = "Medium"
		strengthColors[0] = "bg-red-500"
		strengthColors[1] = "bg-yellow-400"
	} else if (passed === 3) {
		strengthLabel = "Medium"
		strengthColors[0] = "bg-red-500"
		strengthColors[1] = "bg-yellow-400"
		strengthColors[2] = "bg-yellow-400"
	} else if (passed === 4) {
		strengthLabel = "Strong"
		strengthColors[0] = "bg-red-500"
		strengthColors[1] = "bg-yellow-400"
		strengthColors[2] = "bg-yellow-400"
		strengthColors[3] = "bg-green-500"
	}

	const strengthTextClass =
		strengthLabel === "Strong"
			? "text-green-700"
			: strengthLabel === "Medium"
			? "text-yellow-600"
			: "text-red-700"

	const allValid = passed === 4 && password === confirm && password.length > 0

	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
			<Card className="w-full max-w-xl border rounded-3xl shadow-sm">
				<CardHeader className="px-8 pt-8 pb-4 flex flex-col items-center gap-4">
					<div className="inline-flex items-center gap-3">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<img src="/logo.png" alt="StoreKeeper logo" className="h-6 w-6" />
						</div>
						<span className="font-semibold text-lg">StoreKeeper</span>
					</div>

					<div className="text-center space-y-1">
						<CardTitle className="text-2xl">Reset Your Password</CardTitle>
						<CardDescription>
							Enter your new password below. Make sure it&apos;s strong and secure.
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent className="px-8 pb-8 space-y-6">
					<form className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="new-password">New Password</Label>
							<Input
								id="new-password"
								type="password"
								placeholder="Enter new password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between text-xs">
								<span className="font-medium text-foreground">Password strength</span>
								<span className={cn("font-semibold", strengthTextClass)}>
									{strengthLabel}
								</span>
							</div>

							<div className="flex items-center gap-2 mt-1">
								{strengthColors.map((color, index) => (
									<div
										key={index}
										className={cn("h-1.5 w-1/4 rounded-full", color)}
									/>
								))}
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="confirm-password">Confirm Password</Label>
							<Input
								id="confirm-password"
								type="password"
								placeholder="Confirm new password"
								value={confirm}
								onChange={(e) => setConfirm(e.target.value)}
							/>
						</div>

						<div className="rounded-2xl bg-muted border px-4 py-4 space-y-3 text-xs">
							<p className="font-medium text-foreground">Password must contain:</p>

							<div className="space-y-2 text-muted-foreground">
								<div className="flex items-center gap-2">
									<span
										className={cn(
											"inline-flex h-4 w-4 items-center justify-center rounded-full",
											hasLength
												? "bg-green-500"
												: "bg-gray-200 border border-muted-foreground/40"
										)}
									>
										{hasLength && <span className="h-2 w-2 rounded-full bg-white" />}
									</span>
									<span className={cn(hasLength ? "text-green-700" : "")}>
										At least 8 characters
									</span>
								</div>

								<div className="flex items-center gap-2">
									<span
										className={cn(
											"inline-flex h-4 w-4 items-center justify-center rounded-full",
											hasUppercase
												? "bg-green-500"
												: "bg-gray-200 border border-muted-foreground/40"
										)}
									>
										{hasUppercase && (
											<span className="h-2 w-2 rounded-full bg-white" />
										)}
									</span>
									<span className={cn(hasUppercase ? "text-green-700" : "")}>
										One uppercase letter
									</span>
								</div>

								<div className="flex items-center gap-2">
									<span
										className={cn(
											"inline-flex h-4 w-4 items-center justify-center rounded-full",
											hasLowercase
												? "bg-green-500"
												: "bg-gray-200 border border-muted-foreground/40"
										)}
									>
										{hasLowercase && (
											<span className="h-2 w-2 rounded-full bg-white" />
										)}
									</span>
									<span className={cn(hasLowercase ? "text-green-700" : "")}>
										One lowercase letter
									</span>
								</div>

								<div className="flex items-center gap-2">
									<span
										className={cn(
											"inline-flex h-4 w-4 items-center justify-center rounded-full",
											hasNumber || hasSpecial
												? "bg-green-500"
												: "bg-gray-200 border border-muted-foreground/40"
										)}
									>
										{(hasNumber || hasSpecial) && (
											<span className="h-2 w-2 rounded-full bg-white" />
										)}
									</span>
									<span
										className={cn(hasNumber || hasSpecial ? "text-green-700" : "")}
									>
										One number or special character
									</span>
								</div>
							</div>
						</div>

						<Button type="submit" size="lg" className="w-full" disabled={!allValid}>
							<span className="inline-flex items-center gap-2">
								<img src="/lock.png" alt="Lock icon" className="h-5 w-5" />
								Reset Password
							</span>
						</Button>
					</form>

					<div className="flex flex-col items-center gap-3 pt-4">
						<a
							href="/login"
							className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
						>
							<span className="text-base">&#8592;</span>
							Back to Sign In
						</a>

						<div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
							<img src="/security.png" alt="Security icon" className="h-4 w-4" />
							<span>Your password is encrypted and secure</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}