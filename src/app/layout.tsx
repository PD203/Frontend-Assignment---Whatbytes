import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FilterProvider } from "@/context/FilterContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <FilterProvider>
          <Header />

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </FilterProvider>
      </body>
    </html>
  );
}
