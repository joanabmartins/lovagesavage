"use client";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/about/gallery/1.jpg", caption: "" },
  { src: "/about/gallery/2.jpg", caption: "" },
  { src: "/about/gallery/3.jpg", caption: "" },
  { src: "/about/gallery/4.jpg", caption: "" },
  { src: "/about/gallery/5.jpg", caption: "" },
  { src: "/about/gallery/6.jpg", caption: "" },
  { src: "/about/gallery/7.jpg", caption: "" },
  { src: "/about/gallery/8.jpg", caption: "" },
  { src: "/about/gallery/9.jpg", caption: "" },
];

export default function AboutGallery() {
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  return (
    <section style={{ width: "100%", maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 32, textAlign: "center" }}>
        Gallery
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {galleryImages.map((img, idx) => (
          <div
            key={img.src}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              background: "#fafafa",
              cursor: "pointer",
              boxShadow: "0 2px 8px #bbb8a9",
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setModalIdx(idx)}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${idx + 1}`}
              width={400}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
              sizes="(max-width: 600px) 100vw, 400px"
            />
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {modalIdx !== null && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
    onClick={() => setModalIdx(null)}
  >
    <div
      style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
      onClick={e => e.stopPropagation()}
    >
      {/* Left arrow */}
      <button
        onClick={e => {
          e.stopPropagation();
          setModalIdx((modalIdx - 1 + galleryImages.length) % galleryImages.length);
        }}
        style={{
          position: "absolute",
          left: -50,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Previous image"
      >
        &#8592;
      </button>
      {/* Image */}
      <Image
        src={galleryImages[modalIdx].src}
        alt={`Gallery image ${modalIdx + 1}`}
        width={800}
        height={800}
        style={{
          borderRadius: 16,
          objectFit: "contain",
          background: "#fafafa",
          maxWidth: "90vw",
          maxHeight: "80vh",
          display: "block",
        }}
      />
      {/* Right arrow */}
      <button
        onClick={e => {
          e.stopPropagation();
          setModalIdx((modalIdx + 1) % galleryImages.length);
        }}
        style={{
          position: "absolute",
          right: -50,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Next image"
      >
        &#8594;
      </button>
      {/* Caption placeholder */}
      {galleryImages[modalIdx].caption && (
        <div
          style={{
            color: "#fff",
            background: "rgba(0,0,0,0.6)",
            padding: "8px 16px",
            borderRadius: 8,
            marginTop: 12,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          {galleryImages[modalIdx].caption}
        </div>
      )}
      {/* Close button */}
      <button
        onClick={() => setModalIdx(null)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Close image"
      >
        &times;
      </button>
    </div>
  </div>
)}
    </section>
  );
}