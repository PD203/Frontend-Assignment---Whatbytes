"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Filters from "@/components/filters/Filters";
import FilterDrawer from "@/components/filters/FliterDrawer";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterProvider } from "@/context/FilterContext";

function ProductsPageClient() {
  const [open, setOpen] = useState(false);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* MOBILE FILTER BUTTON */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-white lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </button>
      </div>
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <Filters />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">Product Listing</h1>
          <ProductGrid />
        </div>
      </div>
      <FilterDrawer open={open} onClose={() => setOpen(false)} />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <FilterProvider>
      <ProductsPageClient />
    </FilterProvider>
  );
}
