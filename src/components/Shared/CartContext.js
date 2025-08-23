"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	function addToCart(product) {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id ? { ...item, qty: item.qty + 1 } : item
				);
			}
			return [...prev, { ...product, qty: 1 }];
		});
	}

	function removeFromCart(productId) {
		setCart((prev) => prev.filter((item) => item.id !== productId));
	}

	function changeQty(productId, qty) {
		setCart((prev) =>
			prev.map((item) =>
				item.id === productId ? { ...item, qty: Math.max(1, qty) } : item
			)
		);
	}

	function clearCart() {
		setCart([]);
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQty, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
