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

export default function ResetSuccessPage() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4">
			<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-card rounded-3xl border shadow-sm overflow-hidden">
				{/* LEFT SIDE – image + StoreKeeper text */}
				<div className="px-10 py-12 flex items-center">
					<div className="space-y-6 max-w-md">
						{/* Image (use any image in /public, they used a backpack in Figma) */}
						<div className="relative w-full max-w-sm aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
							{/* change src to your real image later (e.g. /backpack.jpg) */}
							<Image
								src="/window.svg"
								alt="StoreKeeper illustration"
								fill
								className="object-cover"
							/>
						</div>

						{/* StoreKeeper brand text */}
						<div className="space-y-2">
							<div className="inline-flex items-center gap-3">
								<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-semibold">
									SK
								</div>
								<p className="font-semibold text-lg">StoreKeeper</p>
							</div>
							<p className="text-sm text-muted-foreground max-w-sm">
								Your store management system is ready to use with your new
								password.
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE – success info */}
				<div className="px-10 py-12 flex items-center bg-muted/20">
					<Card className="w-full max-w-md mx-auto border-none shadow-none bg-transparent p-0">
						<CardHeader className="px-0">
							<div className="flex flex-col items-center gap-4">
								{/* Green success circle */}
								<div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
									✓
								</div>

								<div className="space-y-1 text-center">
									<CardTitle className="text-2xl">
										Password Reset Successful!
									</CardTitle>
									<CardDescription>
										Your password has been changed successfully. You can now
										sign in with your new credentials.
									</CardDescription>
								</div>
							</div>
						</CardHeader>

						<CardContent className="space-y-6 px-0">
							{/* Secure + Active cards */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
								<div className="rounded-xl border bg-card px-4 py-3 space-y-1">
									<div className="flex items-center gap-2">
										<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-[11px]">
											!
										</span>
										<p className="font-medium text-foreground">Secure</p>
									</div>
									<p className="text-muted-foreground">
										Your new password is encrypted and protected.
									</p>
								</div>

								<div className="rounded-xl border bg-card px-4 py-3 space-y-1">
									<div className="flex items-center gap-2">
										<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-[11px]">
											✓
										</span>
										<p className="font-medium text-foreground">Active</p>
									</div>
									<p className="text-muted-foreground">
										Your account is ready to use immediately.
									</p>
								</div>
							</div>

							{/* Continue button */}
							<Button asChild size="lg" className="w-full mt-1">
								<Link href="/auth/signin">Continue to sign in</Link>
							</Button>

							{/* Security tips – blue card */}
							<div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs space-y-2">
								<div className="flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-[11px]">
										i
									</span>
									<p className="font-medium text-blue-900">Security Tips</p>
								</div>

								<div className="space-y-1 text-blue-800">
									<div className="flex items-center gap-2">
										<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
											<span className="h-2 w-2 rounded-full bg-white" />
										</span>
										<span>Use a unique password for StoreKeeper.</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
											<span className="h-2 w-2 rounded-full bg-white" />
										</span>
										<span>Avoid sharing your credentials with others.</span>
									</div>
								</div>
							</div>
						</CardContent>

						<CardFooter className="px-0 pt-4 flex justify-center text-xs text-muted-foreground">
							<p>
								Need help?{" "}
								<Link
									href="/support"
									className="text-primary font-medium hover:underline"
								>
									Contact support
								</Link>
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	)
}
