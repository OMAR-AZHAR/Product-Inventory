import { ProductForm } from "../components/ProductForm/ProductForm";

export default function NewProductPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold mb-8 text-center sm:text-left dark:text-white">
        Add New Product
      </h1>
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
        <ProductForm />
      </div>
    </div>
  );
}
