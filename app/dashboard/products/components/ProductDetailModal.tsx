// components/ProductDetailModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Product } from "@/lib/data";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Product Details: {product.name}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl || "/placeholder-product.png"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-500 dark:text-gray-400">
                Description
              </h3>
              <p className="mt-1 text-sm">
                {product.description || "No description available"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Category
                </h3>
                <p className="mt-1 text-sm capitalize">{product.category}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Status
                </h3>
                <p className="mt-1 text-sm capitalize">{product.status}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Price
                </h3>
                <p className="mt-1 text-sm">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  Stock
                </h3>
                <p className="mt-1 text-sm">{product.stockLevel} units</p>
              </div>
            </div>

            {/* Metadata Section */}
            <div className="pt-4 border-t dark:border-gray-800">
              <h3 className="font-medium text-gray-500 dark:text-gray-400">
                Product Metadata
              </h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs text-gray-400 dark:text-gray-500">
                    Brand
                  </h4>
                  <p className="text-sm">{product.metadata.brand || "-"}</p>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 dark:text-gray-500">
                    Warranty
                  </h4>
                  <p className="text-sm">{product.metadata.warranty || "-"}</p>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 dark:text-gray-500">
                    Color
                  </h4>
                  <p className="text-sm">{product.metadata.color || "-"}</p>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 dark:text-gray-500">
                    Added Date
                  </h4>
                  <p className="text-sm">
                    {new Date(product.addedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
