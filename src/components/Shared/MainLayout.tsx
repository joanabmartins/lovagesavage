// MainLayout: reusable layout for all main pages
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
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
        background: 'linear-gradient(120deg, #f8fafc 0%, #d1fae5 100%)',
      }}
    >
      {children}
    </main>
  );
}
