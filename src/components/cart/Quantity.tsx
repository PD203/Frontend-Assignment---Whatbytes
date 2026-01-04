"use client";

type QuantityProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function Quantity({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        className="h-8 w-8 rounded-md border cursor-pointer border-gray-300"
        onClick={onDecrease}
      >
        −
      </button>

      <span className="w-4 text-center text-sm font-medium">
        {quantity}
      </span>

      <button
        className="h-8 w-8 rounded-md border cursor-pointer border-gray-300"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}
