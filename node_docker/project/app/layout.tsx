import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import MainLoad from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTY",
  description: "CTY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <Suspense fallback={<MainLoad />}>
        <body className={`${inter.className} `}>{children}</body>
      </Suspense>
    </html>
  );
}
