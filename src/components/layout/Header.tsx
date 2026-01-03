"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = 3;

  return (
    <header
      className="
        sticky top-0 z-[9999]
        bg-gradient-to-r
        from-[var(--primary-dark)]
        to-[var(--primary)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">

          {/* LEFT — LOGO */}
          <div className="text-white text-2xl font-bold tracking-wide">
            Whatbytes
          </div>

          {/* CENTER — SEARCH */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <Search className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/80" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="
                  w-full h-11 rounded-lg
                  bg-transparent
                  border border-white/40
                 
                  pl-12 pr-4
                  text-white
                  placeholder-white/70
                  focus:outline-none
                  
                 
                "
              />
            </div>
          </div>

          {/* RIGHT — ACTIONS */}
          <div className="flex items-center gap-4">

            {/* CART BUTTON */}
            <button
              className="
                relative flex items-center gap-2
                bg-[var(--primary-dark)]
                hover:bg-[var(--primary-hover)]
                transition
                px-5 py-2 rounded-lg
                text-white font-medium
                shadow-md
                cursor-pointer
              "
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* AVATAR */}
            <button
              className="
                w-9 h-9 rounded-full
                bg-white/20
                hover:bg-white/30
                transition
                flex items-center justify-center
                cursor-pointer
              "
            >
              <User className="h-5 w-5 text-white" />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
