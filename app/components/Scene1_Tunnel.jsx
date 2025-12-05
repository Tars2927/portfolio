"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import SceneController from "./SceneController";

function Ring({ index, total }) {
  const ref = useRef();
  const initialZ = -index * 2.5;

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * 0.3;
    ref.current.position.z += delta * 2.2;

    if (ref.current.position.z > 3) {
      ref.current.position.z = -total * 2.5;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, initialZ]}>
      <torusGeometry args={[4 + (index % 4) * 0.1, 0.08, 16, 200]} />
      <meshStandardMaterial
        emissive="#7C28FF"
        emissiveIntensity={1}
        color="#000"
        roughness={0.3}
      />
    </mesh>
  );
}

export default function Scene1_Tunnel() {
  const { camera } = useThree();
  const COUNT = 32;

  return (
    <>
      <SceneController camera={camera} />

      <ambientLight intensity={0.2} />
      <pointLight intensity={1.5} position={[0, 0, -10]} />

      {Array.from({ length: COUNT }).map((_, i) => (
        <Ring key={i} index={i} total={COUNT} />
      ))}
    </>
  );
}
