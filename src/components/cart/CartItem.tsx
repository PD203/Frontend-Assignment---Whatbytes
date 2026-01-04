"use client";

import Image from "next/image";
import Quantity from "./Quantity";
import { Trash2 } from "lucide-react";

type CartItemProps = {
  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItem({
  title,
  category,
  price,
  image,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 flex gap-6 items-center">
      {/* Image */}
      <div className="relative h-24 w-24 rounded-md border border-border bg-gray-50">
        <Image src={image} alt={title} fill className="object-contain p-2" />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="mt-1 font-semibold">${price.toFixed(2)}</p>
      </div>

      {/* Quantity */}
      <Quantity
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      {/* Remove */}
      <button
        onClick={onRemove}
        className="ml-4 cursor-pointer text-secondary text-sm hover:text-red-500"
      >
        <Trash2 />
      </button>
    </div>
  );
}
