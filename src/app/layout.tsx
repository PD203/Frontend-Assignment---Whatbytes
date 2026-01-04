import { Suspense } from "react";
import { AppBody } from "@/components/layout/AppBody";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <AppBody>{children}</AppBody>
        </Suspense>
      </body>
    </html>
  );
}
