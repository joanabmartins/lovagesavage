import Image from "next/image";
import MainLayout from "../../components/Shared/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{
          background: '#f8f8f5',
          borderRadius: '50%',
          padding: 10,
          marginBottom: 32,
          boxShadow: '0 4px 24px #bbb8a9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image src="/globe.svg" alt="Artist portrait" width={120} height={120} style={{ borderRadius: '50%' }} />
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px', textAlign: 'center' }}>About Afonso</h1>
        <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
          Afonso is a contemporary artist whose work explores the intersection of color, form, and emotion. With a background in both traditional and digital media, Afonso brings a unique perspective to every piece, blending vibrant palettes with thoughtful composition. His art is inspired by the world around him, from cityscapes to nature, and aims to evoke a sense of wonder and curiosity in the viewer.
        </p>
        <div style={{
          display: 'flex',
          gap: 32,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 8,
          width: '100%',
        }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 28, minWidth: 240, maxWidth: 320, boxShadow: '0 2px 12px #bbb8a9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: '#222', fontWeight: 600, fontSize: '1.1rem', marginBottom: 10, letterSpacing: '0.01em', textAlign: 'center' }}>Background</h2>
            <p style={{ color: '#555', fontSize: 15, textAlign: 'center' }}>
              Studied fine arts in Lisbon, Portugal. Exhibited in several European galleries. Passionate about sharing creativity with the world.
            </p>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, padding: 28, minWidth: 240, maxWidth: 320, boxShadow: '0 2px 12px #bbb8a9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: '#222', fontWeight: 600, fontSize: '1.1rem', marginBottom: 10, letterSpacing: '0.01em', textAlign: 'center' }}>Inspiration</h2>
            <p style={{ color: '#555', fontSize: 15, textAlign: 'center' }}>
              Inspired by urban life, nature, and the interplay of light and shadow. Each piece tells a story and invites the viewer to look closer.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
