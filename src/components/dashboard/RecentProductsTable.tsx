"use client";

import { ArrowRight, ArrowLeft, Filter, Search } from "lucide-react";
import { useState, useMemo } from "react";
// 1. IMPORT React type for JSX namespace fix
import type { ReactNode } from "react";
import {
  useProductsStore,
  Product as StoreProduct,
} from "@/store/productsStore";

// Extend store Product type with optional UI fields
interface Product extends StoreProduct {
  // 2. FIX: Use ReactNode instead of JSX.Element or remove JSX.Element if not needed
  // Alternatively, ensure your tsconfig.json is set up correctly (see explanation below)
  // For simplicity and common practice in modern React, use ReactNode.
  icon?: ReactNode | string;
  iconBg?: string;
}

type Status = "In Stock" | "Low Stock" | "Medium";

interface StatusBadgeProps {
  status: Status;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<Status, { bg: string; text: string }> = {
    "In Stock": { bg: "bg-green-50", text: "text-green-600" },
    "Low Stock": { bg: "bg-red-50", text: "text-red-600" },
    Medium: { bg: "bg-yellow-50", text: "text-yellow-600" },
  };

  const { bg, text } = variants[status] || variants["In Stock"];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${bg} ${text}`}
    >
      {status}
    </span>
  );
}

export default function RecentProductsTable() {
  const { products, checkIn, checkOut } = useProductsStore();

  const [searchTerm, setSearchTerm] = useState("");

  const filtered: Product[] = useMemo(() => {
    return products
      .map((p) => ({
        ...p,
        // 3. FIX: Replace (p as any) with explicit indexing and type casting if necessary,
        // or ensure StoreProduct includes these optional fields.
        // Assuming your StoreProduct *should* potentially have these fields,
        // the safest way is to cast *before* map or fix the underlying store type.
        // If the fields are truly *not* on StoreProduct and are only added here,
        // then the mapping is adding them to the new Product type.
        // Let's assume you're getting an *array* of products from the store, and
        // you want to safely access potential extra properties on the raw data.
        // However, since you're extending StoreProduct, the simplest fix is to type it.
        // For a safe, quick fix:
        icon: (p as { icon?: ReactNode | string }).icon ?? "📦",
        iconBg: (p as { iconBg?: string }).iconBg ?? "bg-gray-100",
      }))
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [products, searchTerm]);

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Stock Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filtered.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        product.iconBg ?? "bg-gray-100"
                      } flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {product.icon ?? "📦"}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{product.sku}</td>
                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {product.qty} units
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={product.status as Status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => checkOut(product.id)}
                      className="flex items-center justify-center gap-1 px-2 py-1 bg-[#7C1D3D] text-white text-xs font-medium rounded-lg hover:bg-[#661832] transition whitespace-nowrap"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-xs whitespace-nowrap">
                        Check Out
                      </span>
                    </button>

                    <button
                      onClick={() => checkIn(product.id)}
                      className="flex items-center justify-center gap-1 px-2 py-1 text-gray-400 hover:text-gray-600 transition whitespace-nowrap"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-xs whitespace-nowrap">
                        Check In
                      </span>
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
          Showing {filtered.length} of {products.length} products
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
