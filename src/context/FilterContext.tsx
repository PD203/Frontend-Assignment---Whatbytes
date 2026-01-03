"use client";

import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
  useEffect,
  useRef,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import productData from "@/data/products";

/* ---------------- TYPES ---------------- */

type Filters = {
  category: string;
  price: number;
  brand: string;
};

type FilterContextType = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filteredProducts: typeof productData;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};

/* ---------------- PROVIDER ---------------- */

export function FilterProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* 🔹 INIT FILTERS FROM URL (ONCE) */
  const [filters, setFilters] = useState<Filters>(() => ({
    category: searchParams.get("category") || "All",
    price: Number(searchParams.get("price")) || 1000,
    brand: searchParams.get("brand") || "All",
  }));

  /* 🔒 Prevent first render push */
  const isFirstRender = useRef(true);

  /* ---------------- SYNC FILTERS → URL ---------------- */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams();

    if (filters.category !== "All") {
      params.set("category", filters.category);
    }

    if (filters.brand !== "All") {
      params.set("brand", filters.brand);
    }

    if (filters.price !== 1000) {
      params.set("price", String(filters.price));
    }

    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(url, { scroll: false });
  }, [filters, pathname, router]);

  /* ---------------- FILTER PRODUCTS ---------------- */
  const filteredProducts = useMemo(() => {
    return productData.filter((product) => {
      const categoryMatch =
        filters.category === "All" ||
        product.category === filters.category;

      const brandMatch =
        filters.brand === "All" ||
        product.brand === filters.brand;

      const priceMatch = product.price <= filters.price;

      return categoryMatch && brandMatch && priceMatch;
    });
  }, [filters]);

  const value = useMemo(
    () => ({
      filters,
      setFilters,
      filteredProducts,
    }),
    [filters, filteredProducts]
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
