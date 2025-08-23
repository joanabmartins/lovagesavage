

"use client";
import Image from "next/image";
import { useCart } from "../CartContext";

const products = [
  {
    id: 1,
    name: "Dreamscape (Print)",
    price: 40,
    image: "/file.svg",
    type: "art",
    description: "High-quality print of 'Dreamscape'. Size: 30x40cm."
  },
  {
    id: 2,
    name: "Urban Flow (Print)",
    price: 35,
    image: "/window.svg",
    type: "art",
    description: "Print of 'Urban Flow'. Size: 30x40cm."
  },
  {
    id: 3,
    name: "Night Lights (Print)",
    price: 38,
    image: "/vercel.svg",
    type: "art",
    description: "Print of 'Night Lights'. Size: 30x40cm."
  },
  {
    id: 4,
    name: "Tote Bag - Dreamscape",
    price: 22,
    image: "/globe.svg",
    type: "tote",
    description: "Eco-friendly tote bag with 'Dreamscape' print."
  },
  {
    id: 5,
    name: "Tote Bag - Urban Flow",
    price: 22,
    image: "/globe.svg",
    type: "tote",
    description: "Eco-friendly tote bag with 'Urban Flow' print."
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
  return (
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
      <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px' }}>Shop</h1>
      <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
        Shop for art prints and eco-friendly tote bags featuring Afonso's unique drawings.
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
            background: product.type === 'art' ? '#d1fae5' : '#f8fafc',
            borderRadius: 16,
            padding: 24,
            minWidth: 220,
            boxShadow: product.type === 'art' ? '0 2px 8px #10b98122' : '0 2px 8px #10b98111',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}>
            <Image src={product.image} alt={product.name} width={140} height={140} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
            <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>{product.name}</div>
            <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>{product.description}</div>
            <div style={{ color: '#10b981', fontWeight: 600, fontSize: 18, marginBottom: 12 }}>€{product.price}</div>
            <button
              style={{
                background: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                padding: '0.5rem 1.5rem',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 2px 8px #10b98122',
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

      {/* Basket */}
      <section style={{
        marginTop: 48,
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 2px 8px #10b98122',
        padding: '2rem 1.5rem',
        maxWidth: 420,
        width: '100%',
      }}>
        <h2 style={{ color: '#10b981', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Shopping Basket</h2>
        {cart.length === 0 ? (
          <div style={{ color: '#888', fontSize: 16 }}>Your basket is empty.</div>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
                    style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#10b981' }}>Total: €{total}</div>
            <button
              onClick={clearCart}
              style={{ marginTop: 16, background: '#d1fae5', color: '#111', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
            >
              Clear Basket
            </button>
            <hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
            <form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); }}>
              <input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <button type="submit" style={{ width: '100%', background: '#10b981', color: '#fff', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}
