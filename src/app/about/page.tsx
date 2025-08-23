
import Image from "next/image";
import MainLayout from "../../components/Shared/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          maxWidth: 1100,
          margin: '60px auto 0 auto',
          padding: '0 2vw',
          position: 'relative',
        }}
      >
        <div
          style={{
            flex: '0 0 340px',
            marginRight: '-60px',
            zIndex: 2,
            filter: 'drop-shadow(0 8px 32px #bbb8a9)',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '16px',
            overflow: 'hidden',
            width: 340,
            height: 340,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px #bbb8a9',
          }}
        >
          <Image
            src="/about/afonso.png"
            alt="Afonso portrait"
            width={340}
            height={340}
            style={{ objectFit: 'cover', width: 340, height: 340, borderRadius: '0' }}
          />
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 0,
            marginTop: 40,
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '0 48px 48px 0/0 80px 80px 0',
            padding: '56px 48px 56px 120px',
            minHeight: 320,
            boxShadow: '0 4px 24px #bbb8a9',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: '2.4rem',
              fontWeight: 400,
              color: '#111',
              marginBottom: 24,
              letterSpacing: '-1px',
              textAlign: 'left',
              lineHeight: 1.1,
            }}
          >
            About Lovagesavage
          </h1>
          <p
            style={{
              maxWidth: 700,
              fontSize: '1.18rem',
              color: '#444',
              textAlign: 'left',
              marginBottom: 0,
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}
          >
            {`I’m Afonso, an artist from Braga, Portugal. With a pen in hand, I explore the delicate intersections of line, emotion, and story. I also write poetry and music—ways to give voice to the thoughts and feelings that words alone cannot contain.

A hopeless romantic and a person of faith, I strive to live with intention, searching for meaning in every moment. My work is my way of leaving a mark—a fragment of myself in the world that might resonate, inspire, or simply be felt.`}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}