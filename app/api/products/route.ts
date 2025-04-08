import { NextResponse } from "next/server";
import { products, getStatus } from "@/lib/data";

// GET all products
export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const productsWithStatus = products.map((product) => ({
    ...product,
    status: getStatus(product.stockLevel),
  }));

  return NextResponse.json(productsWithStatus);
}

// Create a new product
export async function POST(request: Request) {
  try {
    const newProduct = await request.json();

    // Validate required fields
    if (!newProduct.id || !newProduct.name) {
      return NextResponse.json(
        { error: "Product ID and name are required" },
        { status: 400 }
      );
    }

    // Check for duplicate ID
    if (products.some((p) => p.id === newProduct.id)) {
      return NextResponse.json(
        { error: "Product with this ID already exists" },
        { status: 409 }
      );
    }

    // Add status and created timestamp
    const productToAdd = {
      ...newProduct,
      status: getStatus(newProduct.stockLevel || 0),
      addedDate: newProduct.addedDate || new Date().toISOString().split("T")[0],
    };

    // Add to products array
    products.push(productToAdd);

    return NextResponse.json(productToAdd, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Update a product
export async function PUT(request: Request) {
  const updatedProduct = await request.json();

  // Find and update the product
  const index = products.findIndex((p) => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = {
      ...updatedProduct,
      status: getStatus(updatedProduct.stockLevel),
    };
    return NextResponse.json(products[index]);
  }

  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}

// Delete a product
export async function DELETE(request: Request) {
  const { id } = await request.json();

  // Find and delete the product
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}
