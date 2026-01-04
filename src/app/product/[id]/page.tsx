import productData from "@/data/products";
import ProductDetails from "@/components/product/ProductDetails";

export function generateStaticParams() {
  return productData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = productData.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return <ProductDetails product={product} />;
}
