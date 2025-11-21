export default function StockLevelsChart() {
	const dataPoints = [
		{ day: "Mon", value: 2450, x: 60 },
		{ day: "Tue", value: 2480, x: 115 },
		{ day: "Wed", value: 2380, x: 170 },
		{ day: "Thu", value: 2550, x: 225 },
		{ day: "Fri", value: 2480, x: 280 },
		{ day: "Sat", value: 2520, x: 335 },
		{ day: "Sun", value: 2800, x: 390 }
	];

	const getY = (value) => {
		const max = 3000;
		const chartHeight = 200;
		return 220 - ((value / max) * chartHeight);
	};

	return (
		<div className="rounded-xl border bg-white p-6 shadow-sm">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-gray-900">Stock Levels Over Time</h3>
				<span className="text-sm text-gray-500 bg-gray-100 rounded-md px-3 py-1.5">
					Last 7 days
				</span>
			</div>

			{/* Chart Area */}
			<div className="relative h-72">
<svg
	viewBox="0 0 440 280"
	preserveAspectRatio="none"
	className="w-full h-full"
>
					{/* Pink background fill */}
					<rect x="50" y="20" width="390" height="200" fill="#FEE2E2" opacity="0.4" />

					{/* Horizontal grid lines */}
					{[0, 500, 1000, 1500, 2000, 2500, 3000].map((value, i) => {
						const y = 220 - (i * 33.33);
						return (
							<g key={value}>
								<line x1="50" y1={y} x2="440" y2={y} stroke="#E5E7EB" strokeWidth="1" />
								{value > 0 && (
									<text x="40" y={y + 4} textAnchor="end" className="text-xs fill-gray-500">
										{value.toLocaleString()}
									</text>
								)}
							</g>
						);
					})}

					{/* Area fill under the line */}
					<path
						d={`M ${dataPoints[0].x},${getY(dataPoints[0].value)} 
               ${dataPoints.map((p, i) =>
							i === 0 ? '' : `L ${p.x},${getY(p.value)}`
						).join(' ')}
               L ${dataPoints[dataPoints.length - 1].x},220
               L ${dataPoints[0].x},220 Z`}
						fill="#FEE2E2"
						opacity="0.6"
					/>

					{/* Main stock line */}
					<path
						d={dataPoints.map((p, i) =>
							`${i === 0 ? 'M' : 'L'} ${p.x},${getY(p.value)}`
						).join(' ')}
						fill="none"
						stroke="#881337"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>

					{/* Data points */}
					{dataPoints.map((point, i) => (
						<circle
							key={i}
							cx={point.x}
							cy={getY(point.value)}
							r="4"
							fill="#881337"
							stroke="white"
							strokeWidth="2"
						/>
					))}

					{/* X-axis labels */}
					{dataPoints.map((point, i) => (
						<text
							key={i}
							x={point.x}
							y="245"
							textAnchor="middle"
							className="text-sm fill-gray-600"
						>
							{point.day}
						</text>
					))}
				</svg>
			</div>

			{/* Legend */}
			<div className="mt-4 flex items-center justify-center gap-2">
				<div className="w-8 h-3 border-2 border-[#881337] bg-white" />
				<span className="text-sm text-gray-600">Total Stock</span>
			</div>
		</div>
	);
}
