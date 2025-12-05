"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const skills = [
  "Python", "JavaScript", "C++", "Java", "Go",
  "TensorFlow", "PyTorch", "Machine Learning",
  "AWS", "GCP", "Streamlit", "React",
  "Next.js", "MongoDB", "SQL", "API Dev"
];

export default function SkillsOrbit() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const r = 8;

        return (
          <Text
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * 2, Math.sin(angle) * r]}
            fontSize={0.55}
            color="#d9c8ff"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}
