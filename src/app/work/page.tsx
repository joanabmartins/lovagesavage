import GalleryGrid from "../../components/Gallery/GalleryGrid";

export default function WorkPage() {
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
        background: 'transparent',
      }}
    >
      <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px' }}>Gallery</h1>
      <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
        Explore a curated selection of Afonso's works, each piece reflecting a unique blend of color, movement, and emotion.
      </p>
      <GalleryGrid />
    </main>
  );
}
