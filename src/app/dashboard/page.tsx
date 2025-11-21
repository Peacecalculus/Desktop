// app/dashboard/page.tsx  (or components/Dashboard.tsx)
"use client";

import { BarChart3, ChevronLeft, ChevronRight, Edit, Eye, FolderOpen, Home, Package, Plus, Settings, Trash2 } from "lucide-react";
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const lineData = [
  { name: "Mon", stock: 2800 },
  { name: "Tue", stock: 2650 },
  { name: "Wed", stock: 2550 },
  { name: "Thu", stock: 2480 },
  { name: "Fri", stock: 2420 },
  { name: "Sat", stock: 2380 },
  { name: "Sun", stock: 2400 },
];

const pieData = [
  { name: "Electronics", value: 45, color: "#800020" },
  { name: "Fashion", value: 25, color: "#3B82F6" },
  { name: "Sports", value: 15, color: "#10B981" },
  { name: "Home & Garden", value: 10, color: "#F59E0B" },
  { name: "Others", value: 5, color: "#6B7280" },
];

const recentProducts = [
  { id: 1, name: "Wireless Headphones", sku: "WH-2847", category: "Audio", qty: 342, status: "in-stock" },
  { id: 2, name: "Smart Watch Pro", sku: "SW-1923", category: "Wearables", qty: 18, status: "low-stock" },
  { id: 3, name: "Designer Sunglasses", sku: "SG-4521", category: "Fashion", qty: 156, status: "in-stock" },
  { id: 4, name: "Running Shoes", sku: "RS-7834", category: "Sports", qty: 89, status: "medium" },
  { id: 5, name: "Leather Sneakers", sku: "LS-9012", category: "Fashion", qty: 234, status: "in-stock" },
];

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Package, label: "Products" },
  { icon: FolderOpen, label: "Categories" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#800020] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Package className="w-8 h-8" />
            StockKeeper
          </h1>
          <p className="text-sm opacity-80 mt-1">Inventory System</p>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${item.active ? "bg-white/20 shadow-lg" : "hover:bg-white/10"}`}>
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-dashed" />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm opacity-70">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
            <p className="text-gray-600">Welcome back, John! Here&apos;s your inventory summary.</p>
          </div>
          <button className="bg-[#800020] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#6b001a] transition">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Products", value: "2,847", change: "+12%", color: "blue" },
              { label: "Low Stock Items", value: "127", change: "+8%", color: "red", alert: true },
              { label: "Inventory Value", value: "$487K", change: "+22%", color: "green" },
              { label: "Categories", value: "24", change: "+3", color: "purple" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                    {stat.alert ? <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" /> : <div className="w-8 h-8 bg-gray-400 rounded" />}
                  </div>
                  <span className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{stat.change}</span>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Stock Levels Over Time</h3>
                <button className="text-sm text-gray-500 border border-gray-300 px-3 py-1 rounded-lg">Last 7 days</button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" tick={{ fill: "#9ca3af" }} />
                  <YAxis tick={{ fill: "#9ca3af" }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="stock" stroke="#800020" strokeWidth={3} dot={{ fill: "#800020" }} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#800020] rounded-full"></div> Total Stock
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Stock by Category</h3>
                <button className="text-[#800020] text-sm font-medium hover:underline">View All</button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                    {pieData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                <span className="text-xl">!</span>
              </div>
              <div>
                <h4 className="font-bold text-red-900">Low Stock Alert</h4>
                <p className="text-red-700">127 products are running low on stock and need restocking.</p>
              </div>
            </div>
            <button className="bg-[#800020] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6b001a]">View Items</button>
          </div>

          {/* Recent Products */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-lg">Recent Products</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-6 font-medium text-gray-700">Product</th>
                    <th className="text-left p-6 font-medium text-gray-700">SKU</th>
                    <th className="text-left p-6 font-medium text-gray-700">Category</th>
                    <th className="text-left p-6 font-medium text-gray-700">Stock Quantity</th>
                    <th className="text-left p-6 font-medium text-gray-700">Status</th>
                    <th className="text-left p-6 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-xl"></div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-gray-600">{product.sku}</td>
                      <td className="p-6 text-gray-600">{product.category}</td>
                      <td className="p-6 font-medium">{product.qty} units</td>
                      <td className="p-6">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            product.status === "in-stock" ? "bg-green-100 text-green-800" : product.status === "low-stock" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {product.status === "in-stock" ? "In Stock" : product.status === "low-stock" ? "Low Stock" : "Medium"}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
              <p className="text-sm text-gray-600">Showing 1 to 5 of 2,847 products</p>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white rounded-lg border">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="px-3 py-1 bg-[#800020] text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1 hover:bg-gray-200 rounded-lg text-sm">2</button>
                <button className="px-3 py-1 hover:bg-gray-200 rounded-lg text-sm">3</button>
                <button className="p-2 hover:bg-white rounded-lg border">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
