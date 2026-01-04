"use client";

import { FilterProvider } from "@/context/FilterContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function AppBody({ children }: { children: React.ReactNode }) {
    return (
        <FilterProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </FilterProvider>
    )
}
