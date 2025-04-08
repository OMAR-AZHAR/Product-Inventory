"use client";

import { BarChart } from "@mui/x-charts";
import { Product } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Analytics({ products }: { products: Product[] }) {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Data processing
  const categories = [...new Set(products.map((p) => p.category))];
  const categoryCounts = categories.map((cat) => ({
    category: cat,
    count: products.filter((p) => p.category === cat).length,
  }));

  const stockStatus = [
    {
      label: "In Stock",
      value: products.filter((p) => p.status === "In Stock").length,
    },
    {
      label: "Low Stock",
      value: products.filter((p) => p.status === "Low Stock").length,
    },
    {
      label: "Out of Stock",
      value: products.filter((p) => p.status === "Out of Stock").length,
    },
  ];

  const priceRanges = [
    { range: "$0-$50", count: products.filter((p) => p.price <= 50).length },
    {
      range: "$51-$100",
      count: products.filter((p) => p.price > 50 && p.price <= 100).length,
    },
    {
      range: "$101-$200",
      count: products.filter((p) => p.price > 100 && p.price <= 200).length,
    },
    { range: "$201+", count: products.filter((p) => p.price > 200).length },
  ];

  // Chart styling
  const chartTextColor = theme === "dark" ? "#e2e8f0" : "#1e293b";
  const chartGridColor = theme === "dark" ? "#334155" : "#e2e8f0";
  const chartColors =
    theme === "dark"
      ? ["#7c3aed", "#a78bfa", "#c4b5fd"]
      : ["#4f46e5", "#6366f1", "#818cf8"];

  if (!isMounted) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
      {/* Products by Category */}
      <Card className="w-full shadow-md dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Products by Category
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: categories,
                label: "Categories",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            yAxis={[
              {
                label: "Count",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            series={[
              {
                data: categoryCounts.map((c) => c.count),
                color: chartColors[0],
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            colors={chartColors}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: chartTextColor },
              "& .MuiChartsAxis-line": { stroke: chartGridColor },
              "& .MuiChartsGrid-line": { stroke: chartGridColor },
            }}
          />
        </CardContent>
      </Card>

      {/* Stock Status */}
      <Card className="w-full shadow-md dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Stock Status
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: stockStatus.map((item) => item.label),
                label: "Status",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            yAxis={[
              {
                label: "Count",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            series={[
              {
                data: stockStatus.map((item) => item.value),
                color: chartColors[1],
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            colors={chartColors}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: chartTextColor },
              "& .MuiChartsAxis-line": { stroke: chartGridColor },
              "& .MuiChartsGrid-line": { stroke: chartGridColor },
            }}
          />
        </CardContent>
      </Card>

      {/* Price Distribution */}
      <Card className="w-full shadow-md dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Price Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: priceRanges.map((p) => p.range),
                label: "Price Range",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            yAxis={[
              {
                label: "Count",
                labelStyle: { fill: chartTextColor },
                tickLabelStyle: { fill: chartTextColor },
              },
            ]}
            series={[
              {
                data: priceRanges.map((p) => p.count),
                color: chartColors[2],
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            colors={chartColors}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: chartTextColor },
              "& .MuiChartsAxis-line": { stroke: chartGridColor },
              "& .MuiChartsGrid-line": { stroke: chartGridColor },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
