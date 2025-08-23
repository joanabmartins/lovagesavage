import Image from "next/image";
import MainLayout from "../../components/Shared/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div style={{
        background: 'linear-gradient(120deg, #d1fae5 0%, #f8fafc 100%)',
        borderRadius: '50%',
        padding: 8,
        marginBottom: 32,
        boxShadow: '0 4px 24px #10b98122',
      }}>
        <Image src="/globe.svg" alt="Artist portrait" width={120} height={120} style={{ borderRadius: '50%' }} />
      </div>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px' }}>About Afonso</h1>
      <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
        Afonso is a contemporary artist whose work explores the intersection of color, form, and emotion. With a background in both traditional and digital media, Afonso brings a unique perspective to every piece, blending vibrant palettes with thoughtful composition. His art is inspired by the world around him, from cityscapes to nature, and aims to evoke a sense of wonder and curiosity in the viewer.
      </p>
      <div style={{
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 8,
      }}>
        <div style={{ background: '#d1fae5', borderRadius: 16, padding: 24, minWidth: 220, boxShadow: '0 2px 8px #10b98122' }}>
          <h2 style={{ color: '#10b981', fontWeight: 500, fontSize: '1.1rem', marginBottom: 8 }}>Background</h2>
          <p style={{ color: '#555', fontSize: 15 }}>
            Studied fine arts in Lisbon, Portugal. Exhibited in several European galleries. Passionate about sharing creativity with the world.
          </p>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: 16, padding: 24, minWidth: 220, boxShadow: '0 2px 8px #10b98111' }}>
          <h2 style={{ color: '#10b981', fontWeight: 500, fontSize: '1.1rem', marginBottom: 8 }}>Inspiration</h2>
          <p style={{ color: '#555', fontSize: 15 }}>
            Inspired by urban life, nature, and the interplay of light and shadow. Each piece tells a story and invites the viewer to look closer.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
