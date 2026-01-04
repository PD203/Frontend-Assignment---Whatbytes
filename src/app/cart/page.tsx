"use client";

import { useEffect, useState } from "react";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import {ShoppingBag} from 'lucide-react';
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

const SHIPPING = 5.99;
const TAX_RATE = 0.08;

export default function CartPage() {
  const {
    items,
    totalItems,
    subtotal,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCartStore();

  // Prevents hydration issues
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    setCartCount(totalItems());
    setCartSubtotal(subtotal());
  }, [items, totalItems, subtotal]);

  const tax = cartSubtotal * TAX_RATE;
  const total = cartSubtotal + SHIPPING + tax;

  if (cartCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h2 className="text-xl font-medium text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link href="/">
              <button className=" w-full cursor-pointer rounded-md py-2 px-4 text-sm text-primary">
                Start Shopping
              </button>
            </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-500 hover:text-black"
      >
        ← Continue Shopping
      </Link>

      <div className="flex justify-between items-end mb-6">
        <h1 className="text-2xl font-semibold">
          Shopping Cart ({cartCount} {cartCount > 1 ? "items" : "item"})
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:underline"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-sm font-medium text-gray-700">Products</h2>

          {items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              onIncrease={() => increaseQty(item.id)}
              onDecrease={() => decreaseQty(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>

        {/* RIGHT */}
        <CartSummary
          subtotal={cartSubtotal}
          shipping={SHIPPING}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  );
}
