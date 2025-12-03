"use client";

import dynamic from "next/dynamic";
import CanvasContainer from "./components/CanvasContainer";
import OverlayIntro from "./components/OverlayIntro";

// Load Scene 1 without SSR (required for WebGL)
const Scene1_Tunnel = dynamic(
  () => import("./components/Scene1_Tunnel"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen">
      {/* 3D Canvas */}
      <CanvasContainer>
        <Scene1_Tunnel />
      </CanvasContainer>

      {/* Overlay Intro Text */}
      <OverlayIntro />

      {/* Extra scroll space for GSAP ScrollTrigger */}
      <div style={{ height: "350vh" }} />
    </main>
  );
}
