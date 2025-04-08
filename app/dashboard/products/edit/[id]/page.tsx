import { ProductForm } from "../../components/ProductForm/ProductForm";
import { Product } from "@/lib/data";

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();
  return products.find((product: Product) => product.id === id) || null;
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-center sm:text-left dark:text-white">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold mb-8 text-center sm:text-left dark:text-white">
        Edit Product
      </h1>
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
}
