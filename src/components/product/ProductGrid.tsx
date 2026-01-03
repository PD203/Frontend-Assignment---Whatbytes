"use client";

import { useFilters } from "@/context/FilterContext";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { filteredProducts } = useFilters();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
