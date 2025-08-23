import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

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
      <Hero />
      <Features />
      <section style={{ maxWidth: 600, textAlign: 'center', margin: '0 auto', color: '#222' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: 12, letterSpacing: '0.01em' }}>Meet the Artist</h2>
        <p style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.6 }}>
          Afonso is a passionate artist blending tradition and modernity. <a href="/about" style={{ color: '#111', fontWeight: 500, textDecoration: 'underline' }}>Read more</a>
        </p>
      </section>
    </main>
  );
}
