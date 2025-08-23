// Card for a single artwork in the gallery
import Image from "next/image";

export default function ArtworkCard({ image, title, medium }: { image: string; title: string; medium: string }) {
  return (
    <div style={{ textAlign: 'center', background: '#d1fae5', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #10b98122' }}>
      <Image src={image} alt={title} width={180} height={180} style={{ borderRadius: 12, marginBottom: 12, background: '#fafafa' }} />
      <div style={{ fontWeight: 400, fontSize: 18, color: '#222', marginBottom: 4 }}>{title}</div>
      <div style={{ color: '#888', fontSize: 14 }}>{medium}</div>
    </div>
  );
}
