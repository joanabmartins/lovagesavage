import MainLayout from "../../components/Shared/MainLayout";
import GalleryGrid from "../../components/Gallery/GalleryGrid";
import styles from "./work.module.css";

export default function WorkPage() {
  return (
    <MainLayout>
      <div className={styles.workContainer}>
        <h1 className={styles.workTitle}>Gallery</h1>
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
