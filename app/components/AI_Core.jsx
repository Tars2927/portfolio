"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AI_Core() {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.12;

    const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[4, 3]} />
      <meshStandardMaterial
        wireframe
        emissive="#9d4bff"
        emissiveIntensity={2}
        color="#000"
      />
    </mesh>
  );
}
