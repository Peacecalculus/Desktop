"use client";

import { useState } from "react";
// import Sidebar from "@/components/dashboard/Sidebar";
// import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import StockLevelsChart from "@/components/dashboard/Charts/StockLevelsChart";
import CategoryDonut from "@/components/dashboard/Charts/CategoryDonut";
import LowStockAlert from "@/components/dashboard/LowStockAlert";
import RecentProductsTable from "@/components/dashboard/RecentProductsTable";
import { PackageOpen, AlertTriangle, DollarSign, Tags } from "lucide-react";

export default function DashboardShell() {
	return (
		<div className="min-h-screen w-full bg-[#F8F9FB]">
			<div className="flex">
				<main className="px-4 lg:px-6 py-6 space-y-6">
					{/* Stats */}

					{/* Stats Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<StatCard
							title="Total Products"
							value="2,847"
							delta="+12%"
							deltaType="increase"
							icon={PackageOpen}
							iconColor="text-blue-600"
							iconBg="bg-blue-50"
						/>
						<StatCard
							title="Low Stock Items"
							value="127"
							delta="-8%"
							deltaType="decrease"
							icon={AlertTriangle}
							iconColor="text-red-600"
							iconBg="bg-red-50"
						/>
						<StatCard
							title="Inventory Value"
							value="$487K"
							delta="+23%"
							deltaType="increase"
							icon={DollarSign}
							iconColor="text-green-600"
							iconBg="bg-green-50"
						/>
						<StatCard
							title="Categories"
							value="24"
							icon={Tags}
							iconColor="text-purple-600"
							iconBg="bg-purple-50"
							delta="32%"
							deltaType="increase"
						/>
					</div>

					{/* Charts */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<StockLevelsChart />
						<CategoryDonut />
					</div>

					{/* Alert */}
					<LowStockAlert />

					{/* Table */}
					<RecentProductsTable />
				</main>
			</div>
		</div>
		// </div>
	);
}