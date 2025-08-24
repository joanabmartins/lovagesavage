
"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../../components/Shared/CartContext";
import MainLayout from "../../components/Shared/MainLayout";

const products = [
  {
    id: 1,
    name: "InsertName (Print)",
    price: 50,
  image: "/shop/tote.png",
    type: "art",
  description: "High-quality print of 'InsertName'. Size: 30x40cm."
  },
  {
    id: 2,
    name: "InsertName(Print)",
    price: 50,
  image: "/shop/tote.png",
    type: "art",
  description: "Print of 'InsertName'. Size: 30x40cm."
  },
  {
    id: 3,
    name: "InsertName (Print)",
    price: 50,
  image: "/shop/tote.png",
    type: "art",
  description: "Print of 'InsertName'. Size: 30x40cm."
  },
  {
    id: 4,
    name: "Tote Bag - InsertName",
    price: 25,
  image: "/shop/tote.png",
    type: "tote",
  description: "Eco-friendly tote bag with 'InsertName' print."
  },
  {
    id: 5,
    name: "Tote Bag - InsertName",
    price: 25,
  image: "/shop/tote.png",
    type: "tote",
  description: "Eco-friendly tote bag with 'InsertName' print."
  },
];

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  description: string;
  qty?: number;
};


export default function ShopPage() {
  const { cart, addToCart, removeFromCart, changeQty, clearCart } = useCart();
  const total = cart.reduce((sum: number, item: Product) => sum + item.price * (item.qty || 1), 0);
  const [expandedImg, setExpandedImg] = useState<string|null>(null);
  return (
    <MainLayout>
      <main
        style={{
          minHeight: '80vh',
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '4rem 1.5rem 2rem 1.5rem',
          background: 'transparent',
        }}
      >
        {/* ...existing code... */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px', textAlign: 'center' }}>Shop</h1>
          <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
            Shop for art prints and eco-friendly tote bags.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 48,
            alignItems: 'start',
            width: '100%',
            marginTop: 8,
          }}>
            {products.map((product) => (
              <div key={product.id} style={{
                background: '#fff',
                borderRadius: 16,
                padding: 28,
                minWidth: 220,
                boxShadow: '0 2px 12px #bbb8a9',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}>
                <div style={{ cursor: 'pointer', marginBottom: 12 }} onClick={() => setExpandedImg(product.image)}>
                  <Image src={product.image} alt={product.name} width={140} height={140} style={{ borderRadius: 12, background: '#fafafa' }} />
                </div>
        {/* Image Modal */}
        {expandedImg && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
            onClick={() => setExpandedImg(null)}
          >
            <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
              <Image src={expandedImg} alt="Product enlarged" width={700} height={700} style={{ borderRadius: 16, objectFit: 'contain', background: '#fafafa', maxWidth: '90vw', maxHeight: '80vh' }} />
              <button
                onClick={e => { e.stopPropagation(); setExpandedImg(null); }}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  fontSize: 22,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Close expanded image"
              >
                &times;
              </button>
            </div>
          </div>
        )}
                <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>{product.name}</div>
                <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>{product.description}</div>
                <div style={{ color: '#222', fontWeight: 600, fontSize: 18, marginBottom: 12 }}>€{product.price}</div>
                <button
                  style={{
                    background: '#e0e0db',
                    color: '#222',
                    border: 'none',
                    borderRadius: 24,
                    padding: '0.5rem 1.5rem',
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #bbb8a9',
                    marginTop: 'auto',
                    transition: 'background 0.2s',
                  }}
                  onClick={() => addToCart(product)}
                >
                  Add to Basket
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Basket */}
        <section style={{
          marginTop: 48,
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 2px 12px #bbb8a9',
          padding: '2rem 1.5rem',
          maxWidth: 420,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{ color: '#222', fontWeight: 700, fontSize: 22, marginBottom: 16, textAlign: 'center' }}>Shopping Basket</h2>
          {cart.length === 0 ? (
            <div style={{ color: '#888', fontSize: 16, textAlign: 'center' }}>Your basket is empty.</div>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {cart.map((item: Product) => (
                  <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500 }}>{item.name}</div>
                      <div style={{ color: '#888', fontSize: 13 }}>€{item.price} x </div>
                    </div>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={e => changeQty(item.id, parseInt(e.target.value) || 1)}
                      style={{ width: 40, borderRadius: 8, border: '1px solid #eee', padding: '2px 6px', textAlign: 'center' }}
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: '#e0e0db', color: '#222', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#222', textAlign: 'center' }}>Total: €{total}</div>
              <button
                onClick={clearCart}
                style={{ marginTop: 16, background: '#f8f8f5', color: '#111', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
              >
                Clear Basket
              </button>
              <hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
              <form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); }} style={{ width: '100%' }}>
                <input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
                <input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
                <input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
                <button type="submit" style={{ width: '100%', background: '#e0e0db', color: '#222', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
              </form>
            </>
          )}
        </section>
      </main>
    </MainLayout>
  );
}