"use client";

import React, { useState, useEffect } from "react";
import { PRIMARY_COLOR } from "@/lib/constants";

interface CountdownProps {
	targetDate: Date;
}

interface CountdownState {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState<CountdownState | null>(null);

	useEffect(() => {
		const updateTime = () => {
			const difference = +new Date(targetDate) - +new Date();
			let calculatedTime: CountdownState | null = null;

			if (difference > 0) {
				calculatedTime = {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				};
			}
			setTimeLeft(calculatedTime);
		};

		updateTime();

		const timer = setInterval(updateTime, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const timerComponents: React.ReactElement[] = [];
	if (timeLeft) {
		Object.keys(timeLeft).forEach((intervalKey) => {
			const interval = intervalKey as keyof CountdownState;
			const value = timeLeft[interval];

			timerComponents.push(
				<div
					key={interval}
					className="flex flex-col items-center mx-1 sm:mx-2 md:mx-4 p-4 sm:p-6 bg-white/10 bg-opacity-10 rounded-xl w-16 sm:w-20 md:w-35 shadow-lg"
				>
					<span className="text-xl sm:text-3xl md:text-5xl font-extrabold tabular-nums">
						{value < 10 ? `0${value}` : value || "00"}
					</span>
					<span className="text-xs md:text-sm uppercase tracking-wider mt-1 opacity-80">
						{interval}
					</span>

				</div>
			);
		});
	}

	return (
		<div className="flex justify-center mt-6">
			{timerComponents.length ? (
				timerComponents
			) : (
				<span className="text-white text-lg">Launching Soon!</span>
			)}
		</div>
	);
};

interface CountdownSectionProps {
	launchDate: Date;
}

export default function Countdown({ launchDate }: CountdownSectionProps) {
	return (
		<section
			className="py-10 md:py-16 text-white"
			style={{ backgroundColor: PRIMARY_COLOR }}
		>
			<div className="text-center container mx-auto px-4 sm:px-6">
				<h2 className="text-xl sm:text-2xl font-bold mb-2">Launching in</h2>
				<p className="text-sm opacity-80 mb-6">
					Dont miss the exclusive early adopter benefits!
				</p>
				<CountdownTimer targetDate={launchDate} />
			</div>
		</section>
	);
}