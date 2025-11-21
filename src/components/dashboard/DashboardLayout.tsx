"use client";

import React, { useState } from 'react';
import { Menu, X, Package, Grid, FileText, Settings, Bell, Plus } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const navigation = [
		{ name: 'Dashboard', href: '/dashboard', icon: Grid },
		{ name: 'Products', href: '/products/all-products', icon: Package },
		{ name: 'Categories', href: '/categories/all-categories', icon: Grid },
		{ name: 'Reports', href: '/reports', icon: FileText },
		{ name: 'Settings', href: '/settings', icon: Settings },
	];

	const getCurrentPageName = () => {
		const currentPage = navigation.find(item => {
			const base = '/' + item.href.split('/')[1];
			return (pathname || '').startsWith(base);
		});
		return currentPage ? currentPage.name : 'Dashboard';
	};

	return (
		<div className="flex h-screen bg-gray-50">
			{/* Sidebar */}
			<div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
				<div className="flex items-center gap-3 p-6 border-b border-gray-200">
					<div className="w-10 h-10 bg-[#800020] rounded-lg flex items-center justify-center">
						<Package className="w-6 h-6 text-white" />
					</div>
					<div>
						<div className="font-bold text-gray-900">StockKeeper</div>
						<div className="text-xs text-gray-500">Inventory management</div>
					</div>
				</div>

				<nav className="p-4 flex flex-col h-[calc(100%-4rem)]">
					<div className="flex-1">
						{navigation.map((item) => {
							const base = '/' + item.href.split('/')[1];
							const isActive = (pathname || '').startsWith(base);
							return (
								<button
									key={item.name}
									onClick={() => {
										router.push(item.href);
										setSidebarOpen(false);
									}}
									className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${isActive ? 'bg-[#800020] text-white' : 'text-gray-700 hover:bg-gray-100'
										}`}
								>
									<item.icon className="w-4 h-4" />
									{item.name}
								</button>
							);
						})}
					</div>

					{/* Admin section moved to bottom */}
					<div className="p-4 border-t border-gray-200">
						<div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50">
							<div className="w-10 h-10 rounded-full bg-gray-300">
								{/*admin image goes here*/}
							</div>
							<div>
								<div className="font-medium text-gray-900 text-sm">John Doe</div>
								<div className="text-xs text-gray-500">Admin</div>
							</div>
						</div>
					</div>
				</nav>
			</div>

			{/* Overlay for mobile */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Main Content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Header */}
				<header className="bg-white border-b border-gray-200 px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<button
								className="lg:hidden text-gray-600 cursor-pointer"
								onClick={() => setSidebarOpen(!sidebarOpen)}
							>
								{sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
							<div>
								<h1 className="text-2xl font-bold text-gray-900">{getCurrentPageName()}</h1>
								<p className="text-sm text-gray-500">Welcome back! Here&apos;s your inventory summary</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							{/* Notification icon moved to the left */}
							<button className="relative w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
								<Bell className="w-4 h-4 text-gray-700" />
								<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
							</button>

							{/* Add button moved to the right of notification */}
							<button
								onClick={() => router.push('/products/create-product')}
								className="flex items-center gap-2 bg-[#800020] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6a0019] transition-colors cursor-pointer"
							>
								<Plus className="w-4 h-4" />
								Add Product
							</button>
						</div>
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 overflow-auto">
					{children}
				</main>
			</div>
		</div>
	);
}