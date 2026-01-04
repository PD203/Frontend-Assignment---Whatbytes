"use client";

import Link from "next/link";
import ProductImages from "./ProductImages";
import Rating from "./Rating";
import { useCartStore } from "@/store/useCartStore";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();      
    e.stopPropagation();    
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: "", // optional if required by store
        rating: { rate: product.rating ?? 0, count: 0 },
      },
      1
    );
  };

  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="rounded-xl bg-card p-4 shadow-sm border border-border cursor-pointer hover:shadow-md transition">
        
        <ProductImages src={product.image} alt={product.title} />

        <div className="mt-3 space-y-2">
          <h3 className="text-sm font-medium text-text-primary group-hover:text-primary transition">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-text-primary">
              ${product.price}
            </p>

            {product.rating && <Rating value={product.rating} />}
          </div>

          
          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-3 w-full rounded-md bg-primary cursor-pointer py-2 text-sm text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
