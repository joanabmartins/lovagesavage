"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import BasketModal from "./BasketModal";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [showBasket, setShowBasket] = useState(false);
  return (
    <>
      <Navbar onBasketClick={() => setShowBasket(true)} />
      <BasketModal open={showBasket} onClose={() => setShowBasket(false)} />
      {children}
    </>
  );
}
