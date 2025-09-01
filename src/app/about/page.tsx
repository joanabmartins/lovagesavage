import Image from "next/image";
import MainLayout from "../../components/Shared/UI/MainLayout";
import styles from "./about.module.css";
import AboutGallery from "./aboutgallery";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/about/afonso.png"
            alt="Afonso portrait"
            width={340}
            height={340}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '0' }}
          />
        </div>
        <div className={styles.aboutText}>
          <h1 style={{ fontSize: '2.3rem', fontWeight: 600, color: '#1a3d2c', marginBottom: 24, letterSpacing: '-1px', lineHeight: 1.1 }}>
            About LovageSavage
          </h1>
          <p style={{ marginBottom: 18 }}>
            I’m Afonso, an artist from Braga, Portugal. With a pen in hand, I explore the delicate intersections of line, emotion, and story.

            I also write poetry and music—ways to give voice to the thoughts and feelings that words alone cannot contain.
          </p>
          <p style={{ marginBottom: 18 }}>
            A hopeless romantic and a person of faith, I strive to live with intention, searching for meaning in every moment.
          </p>
          <p>
            My work is my way of leaving a mark—a fragment of myself in the world that might resonate, inspire, or simply be felt.
          </p>
        </div>
      </div>
      <AboutGallery />
    </MainLayout>
  );
}
