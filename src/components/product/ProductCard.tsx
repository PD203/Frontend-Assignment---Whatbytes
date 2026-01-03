import ProductImages from "./ProductImages";
import Rating from "./Rating";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm border border-border cursor-pointer hover:shadow-md transition">
      {/* Image */}
      <ProductImages src={product.image} alt={product.title} />

      {/* Content */}
      <div className="mt-3 space-y-2">
        <h3 className="text-sm font-medium text-text-primary">
          {product.title}
        </h3>

        {/* Price + Rating Row */}
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-text-primary">
            ${product.price}
          </p>

          {product.rating && <Rating value={product.rating} />}
        </div>

        {/* Button */}
        <button className="mt-3 w-full rounded-md bg-primary py-2 text-sm text-white cursor-pointer hover:bg-primary-hover">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
