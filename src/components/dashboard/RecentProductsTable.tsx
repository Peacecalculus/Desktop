import { ArrowRight, ArrowLeft, PackageOpen, AlertTriangle, DollarSign, Tags, Filter, Search } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
	{
		id: 1,
		name: "Wireless Headphones",
		category: "Electronics",
		sku: "WH-2847",
		categoryType: "Audio",
		qty: 342,
		status: "In Stock",
		icon: "🎧",
		iconBg: "bg-yellow-100"
	},
	{
		id: 2,
		name: "Smart Watch Pro",
		category: "Wearables",
		sku: "SW-1823",
		categoryType: "Wearables",
		qty: 18,
		status: "Low Stock",
		icon: "⌚",
		iconBg: "bg-gray-100"
	},
	{
		id: 3,
		name: "Designer Sunglasses",
		category: "Accessories",
		sku: "SG-4521",
		categoryType: "Fashion",
		qty: 156,
		status: "In Stock",
		icon: "🕶️",
		iconBg: "bg-gray-100"
	},
	{
		id: 4,
		name: "Running Shoes",
		category: "Footwear",
		sku: "RS-7834",
		categoryType: "Sports",
		qty: 89,
		status: "Medium",
		icon: "👟",
		iconBg: "bg-pink-100"
	},
	{
		id: 5,
		name: "Leather Sneakers",
		category: "Footwear",
		sku: "LS-9012",
		categoryType: "Fashion",
		qty: 234,
		status: "In Stock",
		icon: "👞",
		iconBg: "bg-gray-100"
	}
];

function StatusBadge({ status }) {
	const variants = {
		"In Stock": { bg: "bg-green-50", text: "text-green-600" },
		"Low Stock": { bg: "bg-red-50", text: "text-red-600" },
		"Medium": { bg: "bg-yellow-50", text: "text-yellow-600" },
	};

	const { bg, text } = variants[status] || variants["In Stock"];
	return (
		<span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${bg} ${text}`}>
			{status}
		</span>
	);
}

export default function RecentProductsTable() {
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const filtered = PRODUCTS.filter((p) =>
		p.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="rounded-2xl bg-white shadow-sm overflow-hidden">
			{/* Header */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5">
				<h3 className="text-xl font-semibold text-gray-900">Recent Products</h3>

				<div className="flex items-center gap-3">
					<div className="relative">
						<input
							type="text"
							placeholder="Search products..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10 pr-4 py-2 w-64 bg-gray-50 border-0 rounded-lg text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
						/>
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
					</div>
					<button className="p-2 hover:bg-gray-50 rounded-lg transition">
						<Filter className="text-gray-400 w-5 h-5" />
					</button>
				</div>
			</div>

			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-t border-b bg-gray-50">
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">SKU</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">Stock Quantity</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{filtered.map((product) => (
							<tr key={product.id} className="hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4">
									<div className="flex items-center gap-3">
										<div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
											{product.icon}
										</div>
										<div>
											<p className="font-medium text-gray-900">{product.name}</p>
											<p className="text-sm text-gray-400">{product.category}</p>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 text-gray-600">{product.sku}</td>
								<td className="px-6 py-4 text-gray-600">{product.categoryType}</td>
								<td className="px-6 py-4 text-gray-900 font-medium">{product.qty} units</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<StatusBadge status={product.status} />
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										<button className="flex items-center justify-center gap-1 px-2 py-1 bg-[#7C1D3D] text-white text-xs font-medium rounded-lg hover:bg-[#661832] transition whitespace-nowrap">
											<ArrowLeft className="w-4 h-4" />
											<span className="text-xs whitespace-nowrap">Check Out</span>
										</button>

										<button className="flex items-center justify-center gap-1 px-2 py-1 text-gray-400 hover:text-gray-600 transition whitespace-nowrap">
											<ArrowRight className="w-4 h-4" />
											<span className="text-xs whitespace-nowrap">Check In</span>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-6 py-4 border-t">
				<p className="text-sm text-gray-500">
					Showing 1 to 5 of 2,847 products
				</p>
				<div className="flex items-center gap-2">
					<button className="bg-gray-500/10 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
						Previous
					</button>
					<button className="px-3 py-1.5 text-sm bg-[#7C1D3D] text-white rounded-lg">
						1
					</button>
					<button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
						2
					</button>
					<button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
						3
					</button>
					<button className="bg-gray-500/10 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
