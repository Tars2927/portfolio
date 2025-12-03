"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import SceneController from "./SceneController";
import * as THREE from "three";

function Ring({ index, total }) {
  const ref = useRef();
  const zInitial = -index * 2.5;

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * 0.4;
    ref.current.position.z += delta * 2.2;

    if (ref.current.position.z > 3) {
      ref.current.position.z = -total * 2.5;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, zInitial]}>
      <torusGeometry args={[4 + (index % 4) * 0.15, 0.08, 16, 200]} />
      <meshStandardMaterial
        emissive={index % 2 ? "#7C28FF" : "#24D0FF"}
        emissiveIntensity={0.8}
        roughness={0.2}
        metalness={0.6}
        color="#000"
      />
    </mesh>
  );
}

export default function Scene1_Tunnel() {
  const { camera } = useThree();

  const NUM = 32;

  return (
    <>
      <SceneController camera={camera} />

      <ambientLight intensity={0.2} />
      <pointLight intensity={1.2} position={[0, 0, -10]} />

      {[...Array(NUM)].map((_, i) => (
        <Ring key={i} index={i} total={NUM} />
      ))}
    </>
  );
}
