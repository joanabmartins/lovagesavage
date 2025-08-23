"use client";
// Hero section for the Home page
export default function Hero() {
  return (
    <section style={{ textAlign: 'center', marginBottom: 64 }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 400, letterSpacing: '-1px', color: '#222', marginBottom: 32, lineHeight: 1.1 }}>
        Welcome to Afonso's Art World
      </h1>
      <a href="/shop" style={{
        display: 'inline-block',
        marginTop: 16,
        padding: '0.75rem 2.5rem',
        borderRadius: 32,
        background: '#10b981',
        color: '#fff',
        fontWeight: 500,
        fontSize: '1.1rem',
        textDecoration: 'none',
        letterSpacing: '0.02em',
        boxShadow: '0 2px 8px #10b98122',
        transition: 'background 0.2s',
      }}>Shop</a>
    </section>
  );
}
