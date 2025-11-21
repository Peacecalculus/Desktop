"use client";

import React, { useState } from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import { useInventoryData } from '@/contexts/InventoryDataContext';
import { Product } from '@/types/inventory';
import CheckInOutModal from './modals/CheckInOutModal';
import AddProductModal from './modals/AddProductModal';

export default function ProductsPage() {
  const { products, deleteProduct } = useInventoryData();
  const [searchTerm, setSearchTerm] = useState('');
  const [checkInOutModal, setCheckInOutModal] = useState({ 
    open: false, 
    type: null as 'in' | 'out' | null, 
    product: null as Product | null 
  });
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleCheckIn = (product: Product) => {
    setCheckInOutModal({ open: true, type: 'in', product });
  };

  const handleCheckOut = (product: Product) => {
    setCheckInOutModal({ open: true, type: 'out', product });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Products Management</h2>
        <button 
          onClick={() => setAddModalOpen(true)}
          className="flex items-center gap-2 bg-[#800020] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6a0019] transition-colors cursor-pointer"
        >
          <span>Add Product</span>
        </button>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {products
            .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(product => (
              <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.sku} • {product.quantity} units</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCheckIn(product)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 cursor-pointer"
                  >
                    Check In
                  </button>
                  <button
                    onClick={() => handleCheckOut(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 cursor-pointer"
                  >
                    Check Out
                  </button>
                  <button
                    className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <CheckInOutModal 
        isOpen={checkInOutModal.open}
        onClose={() => setCheckInOutModal({ open: false, type: null, product: null })}
        type={checkInOutModal.type}
        product={checkInOutModal.product}
      />

      <AddProductModal 
        isOpen={addModalOpen} 
        onClose={() => setAddModalOpen(false)} 
      />
    </div>
  );
}