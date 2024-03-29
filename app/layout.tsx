import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import CartProvider from "./_components/Providers";
import ShoppingCartModal from "./_components/ShoppingCartModal";

const inter =  Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CartEase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar/>
          <ShoppingCartModal/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
