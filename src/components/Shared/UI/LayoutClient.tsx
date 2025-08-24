"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import BasketModal from "./BasketModal";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
	const [showBasket, setShowBasket] = useState(false);
	const pathname = usePathname();
	// White text only on home page
	const navColor = pathname === "/" ? "#fff" : "#222";
	return (
		<>
			<Navbar onBasketClick={() => setShowBasket(true)} color={navColor} />
			<BasketModal open={showBasket} onClose={() => setShowBasket(false)} />
			{children}
		</>
	);
}
