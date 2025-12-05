"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AI_Core from "./AI_Core";
import SkillsOrbit from "./SkillsOrbit";

gsap.registerPlugin(ScrollTrigger);

export default function Scene2_AICore() {
  const { camera } = useThree();

  useEffect(() => {
    // Camera moves from tunnel (-30) to AI Core (-60)
    gsap.to(camera.position, {
      z: -60,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#scene2",
        start: "top center",
        end: "bottom top",
        scrub: 1.2
      }
    });
  }, [camera]);

  return (
    <>
      <group position={[0, 0, -60]}>
        <AI_Core />
        <SkillsOrbit />
      </group>

      <ambientLight intensity={0.5} />
      <pointLight intensity={2} position={[0, 8, -40]} color="#A066FF" />
      <pointLight intensity={1.5} position={[0, -10, -50]} color="#5F0FFF" />
    </>
  );
}
