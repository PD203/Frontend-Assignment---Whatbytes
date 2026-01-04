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
  search: string;
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
    throw new Error("useFilters must be used within FilterProvider");
  }
  return context;
};

/* ---------------- PROVIDER ---------------- */

export function FilterProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isFirstRender = useRef(true);
  const searchDebounceRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- STATE ---------------- */

  const [filters, setFilters] = useState<Filters>({
    category: "All",
    price: 1000,
    brand: "All",
    search: "",
  });

  /* ---------------- URL → STATE ---------------- */
  useEffect(() => {
    const nextFilters: Filters = {
      category: searchParams.get("category") || "All",
      price: Number(searchParams.get("price")) || 1000,
      brand: searchParams.get("brand") || "All",
      search: searchParams.get("search") || "",
    };

    const isSame =
      nextFilters.category === filters.category &&
      nextFilters.price === filters.price &&
      nextFilters.brand === filters.brand &&
      nextFilters.search === filters.search;

    if (!isSame) {
      setFilters(nextFilters);
    }
  }, [searchParams]);

  /* ---------------- STATE → URL ---------------- */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Debounce search
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }

    searchDebounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();

      if (filters.category !== "All") params.set("category", filters.category);
      if (filters.brand !== "All") params.set("brand", filters.brand);
      if (filters.price !== 1000) params.set("price", String(filters.price));
      if (filters.search.trim()) params.set("search", filters.search);

      const newUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;

      router.replace(newUrl, { scroll: false });
    }, 1000); // 1 seconds debounce

    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
    };
  }, [filters.search, filters.category, filters.brand, filters.price, pathname, router]);

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

      const searchMatch = product.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      return (
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        searchMatch
      );
    });
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
}
