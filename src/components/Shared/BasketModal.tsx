"use client";
import React from "react";
import styles from "../../styles/BasketModal.module.css";
import { useCart, CartItem } from "./context/CartContext";

interface BasketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Your Basket</h2>
        {cart.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul>
            {cart.map((item: CartItem) => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.modalActions}>
          <button onClick={onClose}>Close</button>
          {cart.length > 0 && (
            <button onClick={clearCart} className={styles.clearBtn}>
              Clear Basket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketModal;