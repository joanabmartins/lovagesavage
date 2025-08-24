import MainLayout from "../../components/Shared/UI/MainLayout";
import GalleryGrid from "../../components/Gallery/GalleryGrid";
import styles from "./work.module.css";

export default function WorkPage() {
  return (
    <MainLayout>
      <div className={styles.workContainer}>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 600, color: '#1a3d2c', marginBottom: 24, letterSpacing: '-1px', lineHeight: 1.1 }}>
          Gallery
        </h1>
        <p className={styles.workDesc}>
          .
        </p>
        <div style={{ width: '100%' }}>
          <GalleryGrid />
        </div>
      </div>
    </MainLayout>
  );
}
