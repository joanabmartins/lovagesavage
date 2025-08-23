import MainLayout from "../../components/Shared/MainLayout";
import GalleryGrid from "../../components/Gallery/GalleryGrid";

export default function WorkPage() {
  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', marginBottom: 18, letterSpacing: '-1px', textAlign: 'center' }}>Gallery</h1>
        <p style={{ maxWidth: 600, fontSize: '1.15rem', color: '#444', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
          .
        </p>
        <div style={{ width: '100%' }}>
          <GalleryGrid />
        </div>
      </div>
    </MainLayout>
  );
}
