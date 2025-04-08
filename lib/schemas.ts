// lib/schemas.ts
import { z } from "zod";

export const productFormSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  price: z.coerce.number().min(0.01, {
    message: "Price must be at least $0.01",
  }),
  stockLevel: z.coerce.number().min(0, {
    message: "Stock level cannot be negative.",
  }),
  addedDate: z.string().min(1, {
    message: "Added date is required",
  }),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  metadata: z.object({
    brand: z.string().min(1, {
      message: "Brand is required",
    }),
    warranty: z.string().min(1, {
      message: "Warranty is required",
    }),
    color: z.string().min(1, {
      message: "Color is required",
    }),
  }),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
