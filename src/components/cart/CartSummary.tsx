type CartSummaryProps = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

export default function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
}: CartSummaryProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 h-fit">
      <h2 className="text-lg font-semibold mb-4">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-secondary">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-secondary">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-secondary">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-md bg-primary py-2 text-white font-medium hover:bg-primary-hover transition">
        Proceed to Checkout
      </button>

      <p className="mt-3 text-xs text-secondary text-center">
        Shipping and taxes calculated at checkout
      </p>
    </div>
  );
}
