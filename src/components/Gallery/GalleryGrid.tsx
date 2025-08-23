"use client";
// Grid for displaying multiple artworks
import ArtworkCard from "./ArtworkCard";


const artImages = [
  "confinement.png",
  "crush.png",
  "cupido.png",
  "heartless.png",
  "madness.png",
  "monkey.png",
  "black and white.png",
  "sisifo.png",
  "superficialgirl.png",
  "wonder woman.png",
  "yellow.png",
];

const artworks = artImages.map((filename) => ({
  image: `/art/${filename}`,
  title: filename.replace(/\.[^.]+$/, ""),
  medium: "Mixed media",
}));

export default function GalleryGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 48,
      alignItems: 'start',
      width: '100%',
      marginTop: 8,
    }}>
      {artworks.map((art, i) => (
        <ArtworkCard key={i} image={art.image} title={art.title} medium={art.medium} />
      ))}
    </div>
  );
}
