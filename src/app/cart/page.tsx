"use client";

import { useState } from "react";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Link from "next/link";

const SHIPPING = 5.99;
const TAX_RATE = 0.08;

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 109.95;

  const subtotal = price * quantity;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-500 hover:text-black"
      >
        ← Continue Shopping
      </Link>

      <h1 className="text-2xl font-semibold mb-6">
        Shopping Cart (1 item)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-sm font-medium text-gray-700">
            Products
          </h2>

          <CartItem
            title="Fjallraven - Foldsack No. 1 Backpack"
            category="Men's Clothing"
            price={price}
            image="/images/products/backpack.png"
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() =>
              setQuantity((q) => (q > 1 ? q - 1 : 1))
            }
          />
        </div>

        {/* RIGHT */}
        <CartSummary
          subtotal={subtotal}
          shipping={SHIPPING}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  );
}
