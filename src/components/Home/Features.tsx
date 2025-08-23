// Features section for the Home page
import Image from "next/image";

export default function Features() {
  return (
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
  );
}
