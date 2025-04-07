"use client";

import {
  Product,
  SizeChartItem,
  getSizeChartForProduct,
} from "@/data/collections";
// In files that need the data

export function ProductSizeChart({ product }: { product: Product }) {
  const sizeChart = getSizeChartForProduct(product);

  if (!sizeChart || sizeChart.length === 0) return null;

  // Determine if this is pants to show appropriate headers
  const isPants =
    (product.name + " " + (product.description || ""))
      .toLowerCase()
      .includes("pant") ||
    (product.name + " " + (product.description || ""))
      .toLowerCase()
      .includes("trouser");

  // Direct table display (no modal)
  return (
    <div>
      <h4 className="font-medium mb-3">Size Guide</h4>
      <div className="overflow-x-auto mb-5">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-3 text-left">Size</th>
              {isPants ? (
                <>
                  <th className="py-2 px-3 text-left">Waist</th>
                  <th className="py-2 px-3 text-left">Outseam</th>
                  <th className="py-2 px-3 text-left">Inseam</th>
                </>
              ) : (
                <>
                  <th className="py-2 px-3 text-left">Chest Width</th>
                  <th className="py-2 px-3 text-left">Front Length</th>
                  <th className="py-2 px-3 text-left">Sleeve Length</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((item) => (
              <tr key={item.size} className="border-b">
                <td className="py-2 px-3 font-medium">{item.size}</td>
                <td className="py-2 px-3">
                  {isPants
                    ? item.chestWidth.replace("Waist: ", "")
                    : item.chestWidth}
                </td>
                <td className="py-2 px-3">
                  {isPants
                    ? item.frontLength.replace("Outseam: ", "")
                    : item.frontLength}
                </td>
                <td className="py-2 px-3">
                  {isPants
                    ? item.sleeveLength.replace("Inseam: ", "")
                    : item.sleeveLength}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-500 mb-4">
        <p>All measurements are in centimeters and inches.</p>
        <p className="mt-1">If you're between sizes, we recommend sizing up.</p>
      </div>
    </div>
  );
}
