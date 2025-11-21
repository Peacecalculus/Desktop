"use client";
import { Grid } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <Grid className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">Categories management coming soon</p>
      </div>
    </div>
  );
}