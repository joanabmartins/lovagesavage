
"use client";

import Image from "next/image";
import MainLayout from "../../components/Shared/MainLayout";
export default function AboutPage() {
  return (
    <MainLayout>
      <div className="about-container">
        <div className="about-image">
          <Image
            src="/about/afonso.png"
            alt="Afonso portrait"
            width={340}
            height={340}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '0' }}
          />
        </div>
        <div className="about-text">
          <h1>About Lovagesavage</h1>
          <p>
            {`I’m Afonso, an artist from Braga, Portugal. With a pen in hand, I explore the delicate intersections of line, emotion, and story. I also write poetry and music—ways to give voice to the thoughts and feelings that words alone cannot contain.

A hopeless romantic and a person of faith, I strive to live with intention, searching for meaning in every moment. My work is my way of leaving a mark—a fragment of myself in the world that might resonate, inspire, or simply be felt.`}
          </p>
        </div>
        <style jsx>{`
          .about-container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            max-width: 1100px;
            margin: 60px auto 0 auto;
            padding: 0 2vw;
            position: relative;
            gap: 0;
          }
          .about-image {
            flex: 0 0 340px;
            margin-right: -60px;
            z-index: 2;
            filter: drop-shadow(0 8px 32px #bbb8a9);
            background: rgba(255,255,255,0.7);
            border-radius: 16px;
            overflow: hidden;
            width: 340px;
            height: 340px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 24px #bbb8a9;
          }
          .about-text {
            flex: 1;
            margin-left: 0;
            margin-top: 40px;
            background: rgba(255,255,255,0.85);
            border-radius: 0 48px 48px 0/0 80px 80px 0;
            padding: 56px 48px 56px 120px;
            min-height: 320px;
            box-shadow: 0 4px 24px #bbb8a9;
            position: relative;
            z-index: 1;
          }
          .about-text h1 {
            font-size: 2.4rem;
            font-weight: 400;
            color: #111;
            margin-bottom: 24px;
            letter-spacing: -1px;
            text-align: left;
            line-height: 1.1;
          }
          .about-text p {
            max-width: 700px;
            font-size: 1.18rem;
            color: #444;
            text-align: left;
            margin-bottom: 0;
            line-height: 1.7;
            white-space: pre-line;
          }
          @media (max-width: 800px) {
            .about-container {
              flex-direction: column;
              align-items: center;
              padding: 0 1vw;
            }
            .about-image {
              margin-right: 0;
              width: 90vw;
              max-width: 340px;
              height: auto;
            }
            .about-text {
              margin-left: 0;
              margin-top: 32px;
              padding: 32px 16px 32px 16px;
              border-radius: 24px;
              min-height: unset;
              width: 100%;
              max-width: 700px;
            }
            .about-text h1 {
              font-size: 2rem;
              text-align: center;
            }
            .about-text p {
              font-size: 1rem;
              text-align: center;
            }
          }
        `}</style>
      </div>
    </MainLayout>
  );
}