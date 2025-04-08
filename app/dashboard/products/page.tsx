// app/dashboard/products/page.tsx
import { DataTable } from "./components/DataTable";
import { columns } from "./components/columns";
import { Analytics } from "./components/Analytics";
import { Suspense } from "react";
import Loading from "./loading";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto py-8 px-4">
      <Suspense fallback={<Loading />}>
        {/* Header Section */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Product Inventory
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your product catalog and inventory levels
            </p>
          </div>
          <Button asChild>
            <a
              href="/dashboard/products/new"
              className="flex items-center gap-2"
            >
              <PlusCircle className="h-4 w-4" />
              Add Product
            </a>
          </Button>
        </div>

        {/* Analytics Cards */}
        <div className="mb-8">
          <Analytics products={products} />
        </div>

        {/* Data Table Section */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-800 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Product List
              </h2>
              <div className="text-sm text-muted-foreground">
                {products.length} products found
              </div>
            </div>

            <div className="min-h-[600px] max-h-[min(600px,calc(100vh-200px))] overflow-auto">
              <DataTable
                columns={columns}
                data={products}
                className="border-t dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
