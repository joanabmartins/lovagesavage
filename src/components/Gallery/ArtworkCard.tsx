"use client";
// Card for a single artwork in the gallery
import Image from "next/image";
import { useState } from "react";

export default function ArtworkCard({ image, title, medium }: { image: string; title: string; medium: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        style={{ textAlign: 'center', background: '#f8f8f5', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #bbb8a9', cursor: 'pointer' }}
        onClick={() => setExpanded(true)}
        tabIndex={0}
        aria-label={`Expand image of ${title}`}
      >
        <Image src={image} alt={title} width={180} height={180} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
        <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>{title}</div>
        <div style={{ color: '#888', fontSize: 14 }}>{medium}</div>
      </div>
      {expanded && (
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
          onClick={() => setExpanded(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <Image src={image} alt={title} width={700} height={700} style={{ borderRadius: 16, objectFit: 'contain', background: '#fafafa', maxWidth: '90vw', maxHeight: '80vh' }} />
            <button
              onClick={e => { e.stopPropagation(); setExpanded(false); }}
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
    </>
  );
}
