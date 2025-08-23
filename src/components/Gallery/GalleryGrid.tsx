// Grid for displaying multiple artworks
import ArtworkCard from "./ArtworkCard";

const artworks = [
  { image: "/file.svg", title: "Dreamscape", medium: "Mixed media" },
  { image: "/window.svg", title: "Urban Flow", medium: "Ink on paper" },
  { image: "/vercel.svg", title: "Night Lights", medium: "Digital" },
];

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
