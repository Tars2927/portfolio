"use client";

import dynamic from "next/dynamic";
import CanvasContainer from "./components/CanvasContainer";
import OverlayIntro from "./components/OverlayIntro";

const Scene1_Tunnel = dynamic(() => import("./components/Scene1_Tunnel"), { ssr: false });
const Scene2_AICore = dynamic(() => import("./components/Scene2_AICore"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black w-screen h-[600vh] relative">
      
      {/* FIXED 3D CANVAS (stays for ALL scroll height) */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <CanvasContainer>
          <Scene1_Tunnel />
          <Scene2_AICore />
        </CanvasContainer>
      </div>

      {/* INTRO TEXT (fades out) */}
      <OverlayIntro />

      {/* SCROLL AREA (to drive GSAP) */}
      <div id="scene2" className="absolute top-0 left-0 w-full h-[600vh]"></div>

    </main>
  );
}
