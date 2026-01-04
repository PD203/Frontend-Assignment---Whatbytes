"use client";

import { useFilters } from "@/context/FilterContext";
import ProductCard from "./ProductCard";
import { PackageX } from "lucide-react";

export default function ProductGrid() {
  const { filteredProducts } = useFilters();

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <PackageX className="h-16 w-16 text-muted-foreground/50 mb-4" />
        <h3 className="text-lg font-medium text-foreground">
          No products found
        </h3>
        <p className="text-muted-foreground mt-1">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
