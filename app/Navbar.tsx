"use client";
import BasketIcon from "./BasketIcon";
import { useState } from "react";

export default function Navbar({ onBasketClick }: { onBasketClick: () => void }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '2rem', flex: 1 }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>Home</a>
        <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
        <a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>Work</a>
        <a href="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</a>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <BasketIcon onClick={onBasketClick} />
      </div>
    </nav>
  );
}
