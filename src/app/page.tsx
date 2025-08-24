
"use client";
import MainLayout from "../components/Shared/MainLayout";

export default function Home() {
  return (
    <MainLayout backgroundImage="/home.png">
      <section style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'transparent',
        margin: 0,
        padding: 0,
      }}>
      </section>
    </MainLayout>
  );
}
