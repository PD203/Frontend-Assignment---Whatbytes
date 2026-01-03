"use client";

import { useFilters } from "@/context/FilterContext";
import productData from "@/data/products";

const categories = ["All", ...Array.from(new Set(productData.map((p) => p.category)))];
const brands = ["All", ...Array.from(new Set(productData.map((p) => p.brand)))];

export default function Filters() {
  const { filters, setFilters } = useFilters();

  return (
    <aside className="w-full lg:w-[280px] space-y-6">
      {/* ================= BLUE CARD ================= */}
      <div className="rounded-xl bg-primary p-5 text-white shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Filters</h3>

        {/* Category */}
        <div className="mb-5">
          <p className="mb-3 text-sm font-medium">Category</p>

          <div className="space-y-3 text-sm">
            {categories.map((item) => {
              const checked = filters.category === item;

              return (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={checked}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, category: item }))
                    }
                    className="hidden"
                  />

                  {/* Custom radio */}
                  <span
                    className={`h-4 w-4 rounded-full border transition
                      ${
                        checked
                          ? "border-3 border-white"
                          : "border border-white/70"
                      }`}
                  />

                  {item}
                </label>
              );
            })}
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2 text-sm font-medium">
            Price – $ {filters.price}
          </p>

          <input
            type="range"
            min={0}
            max={1000}
            value={filters.price}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }))
            }
            className="w-full accent-white"
          />

          <div className="mt-1 flex justify-between text-xs">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* ================= WHITE CARD ================= */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-text-primary">
          Brands
        </h3>

        <div className="space-y-3 text-sm text-text-secondary">
          {brands.map((item) => {
            const checked = filters.brand === item;

            return (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="radio"
                  name="brand"
                  value={item}
                  checked={checked}
                  onChange={() =>
                    setFilters((prev) => ({ ...prev, brand: item }))
                  }
                  className="hidden"
                />

                {/* Custom radio */}
                <span
                  className={`h-4 w-4 rounded-full border transition
                    ${
                      checked
                        ? "border-3 border-primary"
                        : "border border-border"
                    }`}
                />

                {item}
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
