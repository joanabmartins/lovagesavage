import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { CartProvider } from "../components/Shared/context/CartContext";
import LayoutClient from "../components/Shared/UI/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LovageSavage Art",
  description: "LovageSavage art website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: '100vh',
          background: '#f8f8f5',
        }}
      >
        <CartProvider>
          <LayoutClient>{children}</LayoutClient>
        </CartProvider>
      </body>
    </html>
  );
}
