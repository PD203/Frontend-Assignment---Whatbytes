"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from "@/components/product/Rating";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/store/useCartStore";

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const onAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-500 hover:text-black"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT — Image */}
        <div className="rounded-2xl bg-white p-6 flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="space-y-6">
          <span className="inline-block rounded-sm bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            {product.category}
          </span>

          <h1 className="text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>

          <div className="flex items-center gap-2">
            <Rating value={product.rating} />
            <span className="text-sm text-gray-500">
              {product.rating.rate} rating
            </span>
          </div>

          <p className="text-xl font-semibold text-gray-900">
            ${product.price}
          </p>

          <div>
            <h3 className="mb-1 text-sm font-semibold text-gray-900">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              or a typeface without relying on meaningful content.
            </p>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-900">
              Quantity
            </h3>
            <div className="flex items-center gap-4">
              <button
                className="h-10 w-10 rounded-md border cursor-pointer border-gray-300 text-lg"
                onClick={decreaseQuantity}
              >
                −
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                className="h-10 w-10 rounded-md border cursor-pointer border-gray-300 text-lg"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={onAddToCart}
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary py-3 text-white text-lg font-semibold hover:bg-primary-hover transition"
          >
            Add to Cart
          </button>

          <p className="text-sm text-gray-500">
            You have {quantity} of this item selected
          </p>
        </div>
      </div>
    </div>
  );
}
