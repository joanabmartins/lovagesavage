import Image from "next/image";

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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 48,
        alignItems: 'start',
        width: '100%',
        marginTop: 8,
      }}>
        <div style={{ textAlign: 'center', background: '#d1fae5', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #10b98122' }}>
          <Image src="/file.svg" alt="Artwork 1" width={180} height={180} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
          <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Dreamscape&quot;</div>
          <div style={{ color: '#888', fontSize: 14 }}>Mixed media</div>
        </div>
        <div style={{ textAlign: 'center', background: '#f8fafc', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #10b98111' }}>
          <Image src="/window.svg" alt="Artwork 2" width={180} height={180} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
          <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Urban Flow&quot;</div>
          <div style={{ color: '#888', fontSize: 14 }}>Ink on paper</div>
        </div>
        <div style={{ textAlign: 'center', background: '#d1fae5', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #10b98122' }}>
          <Image src="/vercel.svg" alt="Artwork 3" width={180} height={180} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
          <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Night Lights&quot;</div>
          <div style={{ color: '#888', fontSize: 14 }}>Digital</div>
        </div>
      </div>
    </main>
  );
}
