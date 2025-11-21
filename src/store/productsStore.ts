import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
	id: string;
	name: string;
	brand: string;
	sku: string;
	category: string;
	qty: number;
	status: "In Stock" | "Low Stock" | "Medium";
	color: string;
};

type ProductStore = {
	products: Product[];
	searchTerm: string;
	addProduct: (p: Product) => void;
	updateQty: (id: string, type: "in" | "out") => void;
	deleteProduct: (id: string) => void;
	setSearchTerm: (t: string) => void;
	checkIn: (id: string) => void;
	checkOut: (id: string) => void;
};
function getStatus(qty: number) {
	if (qty > 100) return "In Stock";
	if (qty <= 20) return "Low Stock";
	return "Medium";
}
export const useProductsStore = create<ProductStore>()(
	persist(
		(set) => ({
			products: [
				{ id: "1", name: "Wireless Headphones", brand: "Electronics", sku: "WH-2847", category: "Audio", qty: 342, status: "In Stock", color: "bg-yellow-300" },
				{ id: "2", name: "Smart Watch Pro", brand: "Wearables", sku: "SW-1923", category: "Wearables", qty: 18, status: "Low Stock", color: "bg-gray-200" },
				{ id: "3", name: "Designer Sunglasses", brand: "Accessories", sku: "SG-4521", category: "Fashion", qty: 158, status: "In Stock", color: "bg-gray-200" },
				{ id: "4", name: "Running Shoes", brand: "Footwear", sku: "RS-7834", category: "Sports", qty: 89, status: "Medium", color: "bg-pink-300" },
				{ id: "5", name: "Leather Sneakers", brand: "Footwear", sku: "LS-9012", category: "Fashion", qty: 234, status: "In Stock", color: "bg-gray-200" },
			],

			searchTerm: "",

			addProduct: (p) =>
				set((state) => ({
					products: [...state.products, { ...p, status: getStatus(p.qty) }],
				})),

			checkIn: (id) =>
				set((state) => ({
					products: state.products.map((p) =>
						p.id === id
							? { ...p, qty: p.qty + 1, status: getStatus(p.qty + 1) }
							: p
					),
				})),

			checkOut: (id) =>
				set((state) => ({
					products: state.products.map((p) =>
						p.id === id
							? { ...p, qty: Math.max(p.qty - 1, 0), status: getStatus(Math.max(p.qty - 1, 0)) }
							: p
					),
				})),

			updateQty: (id, type) =>
				set((state) => ({
					products: state.products.map((p) => {
						if (p.id !== id) return p;
						const newQty = type === "in" ? p.qty + 1 : Math.max(p.qty - 1, 0);
						return { ...p, qty: newQty, status: getStatus(newQty) };
					}),
				})),

			deleteProduct: (id) =>
				set((state) => ({
					products: state.products.filter((p) => p.id !== id),
				})),

			setSearchTerm: (t) => set({ searchTerm: t }),
		}),
		{ name: "product-storage" }
	)
);
