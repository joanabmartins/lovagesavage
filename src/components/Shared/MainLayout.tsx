// MainLayout: reusable layout for all main pages
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
  backgroundImage?: string;
};

export default function MainLayout({ children, backgroundImage }: MainLayoutProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        overflow: 'hidden',
        background: backgroundImage ? undefined : '#f8f8f5',
      }}
    >
      {backgroundImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            background: `center/cover no-repeat url(${backgroundImage})`,
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>{children}</div>
        <footer style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0 1.5rem 0' }}>
          {/* Logo icon removed as requested */}
          <a
            href="https://www.instagram.com/lovagesavage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ display: 'inline-flex', alignItems: 'center', color: '#222', textDecoration: 'none', fontSize: 0 }}
          >
            <img 
              src="/instagram.png" 
              alt="Instagram" 
              width={28} 
              height={28} 
              style={{ 
                display: 'block', 
                filter: 'invert(32%) sepia(77%) saturate(469%) hue-rotate(77deg) brightness(90%) contrast(90%)',
              }} 
            />
          </a>
        </footer>
      </div>
    </div>
  );
}
