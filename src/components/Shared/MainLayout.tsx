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
            zIndex: 0,
            background: `center/cover no-repeat url(${backgroundImage})`,
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
