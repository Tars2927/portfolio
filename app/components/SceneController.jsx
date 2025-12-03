"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SceneController({ camera }) {
  useEffect(() => {
    if (!camera) return;

    gsap.to(camera.position, {
      z: -30,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [camera]);

  return null;
}
