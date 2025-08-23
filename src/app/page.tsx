
"use client";




import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const original = document.body.style.background;
  document.body.style.background = 'center/cover no-repeat url(/home.png), #f8f8f5';
    return () => { document.body.style.background = original; };
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'transparent',
      margin: 0,
      padding: 0,
    }}>
      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: 400,
        letterSpacing: '-1px',
        color: '#222',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: 16,
        padding: '2rem 3rem',
        boxShadow: '0 2px 16px #0002',
      }}>
        Welcome to Afonso's Art World
      </h1>
    </section>
  );
}
