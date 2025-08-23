
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
    </section>
  );
}
