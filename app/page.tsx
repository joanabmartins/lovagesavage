import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
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
      <section style={{ textAlign: 'center', marginBottom: 64 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, letterSpacing: '-1px', color: '#222', marginBottom: 32, lineHeight: 1.1 }}>
          Welcome to Afonso's Art World
        </h1>
        <a href="/shop" style={{
          display: 'inline-block',
          marginTop: 16,
          padding: '0.75rem 2.5rem',
          borderRadius: 32,
          background: '#10b981',
          color: '#fff',
          fontWeight: 500,
          fontSize: '1.1rem',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          boxShadow: '0 2px 8px #10b98122',
          transition: 'background 0.2s',
        }}>Shop</a>
      </section>

      {/* Featured Works - minimalist grid */}
      <section style={{ width: '100%', marginBottom: 64 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 48,
          alignItems: 'start',
        }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/file.svg" alt="Artwork 1" width={220} height={220} style={{ marginBottom: 18, background: '#fafafa', borderRadius: 16 }} />
            <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Dreamscape&quot;</div>
            <div style={{ color: '#888', fontSize: 14 }}>Mixed media</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image src="/window.svg" alt="Artwork 2" width={220} height={220} style={{ marginBottom: 18, background: '#fafafa', borderRadius: 16 }} />
            <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Urban Flow&quot;</div>
            <div style={{ color: '#888', fontSize: 14 }}>Ink on paper</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image src="/vercel.svg" alt="Artwork 3" width={220} height={220} style={{ marginBottom: 18, background: '#fafafa', borderRadius: 16 }} />
            <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>&quot;Night Lights&quot;</div>
            <div style={{ color: '#888', fontSize: 14 }}>Digital</div>
          </div>
        </div>
      </section>

      {/* About Preview - minimalist */}
      <section style={{ maxWidth: 600, textAlign: 'center', margin: '0 auto', color: '#222' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: 12, letterSpacing: '0.01em' }}>Meet the Artist</h2>
        <p style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.6 }}>
          Afonso is a passionate artist blending tradition and modernity. <a href="/about" style={{ color: '#111', fontWeight: 500, textDecoration: 'underline' }}>Read more</a>
        </p>
      </section>
    </main>
  );
}
