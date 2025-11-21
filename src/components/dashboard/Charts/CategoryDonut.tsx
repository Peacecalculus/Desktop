import { ArrowRight } from "lucide-react";

export default function CategoryDonut() {
	return (
		<div className="rounded-xl border bg-white p-6 shadow-sm">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-gray-900">Stock by Category</h3>
				<button className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors">
					View All
					<ArrowRight className="h-4 w-4" />
				</button>
			</div>

			<div className="flex flex-col items-center">
				{/* Donut Chart */}
				<div className="relative">
					<svg width="240" height="240" viewBox="0 0 200 200" className="transform -rotate-90">
						{/* Electronics - Maroon - 35% */}
						<circle
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="#8B1538"
							strokeWidth="40"
							strokeDasharray="154 490"
							strokeDashoffset="0"
							strokeLinecap="butt"
						/>

						{/* Fashion - Blue - 22% */}
						<circle
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="#3B82F6"
							strokeWidth="40"
							strokeDasharray="97 490"
							strokeDashoffset="-154"
							strokeLinecap="butt"
						/>

						{/* Sports - Green - 20% */}
						<circle
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="#10B981"
							strokeWidth="40"
							strokeDasharray="88 490"
							strokeDashoffset="-251"
							strokeLinecap="butt"
						/>

						{/* Home & Garden - Orange - 13% */}
						<circle
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="#F59E0B"
							strokeWidth="40"
							strokeDasharray="57 490"
							strokeDashoffset="-339"
							strokeLinecap="butt"
						/>

						{/* Others - Gray - 10% */}
						<circle
							cx="100"
							cy="100"
							r="70"
							fill="none"
							stroke="#6B7280"
							strokeWidth="40"
							strokeDasharray="44 490"
							strokeDashoffset="-396"
							strokeLinecap="butt"
						/>

						{/* Inner white circle to create donut hole */}
						<circle cx="100" cy="100" r="50" fill="white" />
					</svg>
				</div>

				{/* Legend */}
				<div className="mt-8 flex gap-1 items-center justify-c flex-wrap text-sm text-gray-600">
					<div className="flex items-center gap-2">
						<div className=" w-[25px] h-3   bg-[#8B1538]" />
						<span>Electronics</span>
					</div>

					<div className="flex items-center gap-2">
						<div className=" w-[25px] h-3   bg-[#3B82F6]" />
						<span>Fashion</span>
					</div>

					<div className="flex items-center gap-2">
						<div className=" w-[25px] h-3   bg-[#10B981]" />
						<span>Sports</span>
					</div>

					<div className="flex items-center gap-2">
						<div className=" w-[25px] h-3   bg-[#F59E0B]" />
						<span>Home & Garden</span>
					</div>

					<div className="flex items-center gap-2 col-span-2 justify-center">
						<div className=" w-[25px] h-3   bg-[#6B7280]" />
						<span>Others</span>
					</div>
				</div>
			</div>
		</div>
	);
}
