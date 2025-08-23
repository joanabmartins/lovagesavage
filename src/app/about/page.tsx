
import Image from "next/image";
import MainLayout from "../../components/Shared/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{
          background: '#f8f8f5',
          borderRadius: 24,
          padding: 0,
          marginBottom: 40,
          boxShadow: '0 4px 24px #bbb8a9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          maxWidth: 340,
          width: '100%',
        }}>
          <Image src="/about/afonso.png" alt="Afonso portrait" width={340} height={340} style={{ objectFit: 'cover', width: '100%', height: 340, borderRadius: 0 }} />
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px', textAlign: 'center' }}>About Afonso</h1>
        <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
          Afonso is a contemporary artist whose work explores the intersection of color, form, and emotion. With a background in both traditional and digital media, Afonso brings a unique perspective to every piece, blending vibrant palettes with thoughtful composition. His art is inspired by the world around him, from cityscapes to nature, and aims to evoke a sense of wonder and curiosity in the viewer.
        </p>
      </div>
    </MainLayout>
  );
}
