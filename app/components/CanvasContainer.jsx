"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function CanvasContainer({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
