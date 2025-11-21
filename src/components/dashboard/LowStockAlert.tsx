"use client"
export default function LowStockAlert() {
	return (
		<div className="bg-red-50 border border-red-200 rounded-2xl p-2 shadow-sm mb-8 flex sm:flex-row items-center sm:items-center justify-between gap-4">
			<div className="flex items-center gap-4">
				<span className="p-2 bg-red-500/20 rounded-xl">
					<i className="w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center text-white text-xl font-bold">
						!
					</i>
				</span>
				<div>
					<h4 className="font-bold sm:text-lg text-red-900">Low Stock Alert</h4>
					<p className="text-red-700 text-sm sm:text-base">127 products are running low on stock and need restocking.</p>
				</div>
			</div>
			<button className="bg-[#800020] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#6b001a] transition">
				View Items
			</button>
		</div>
	);
}