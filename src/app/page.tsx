"use client";

import MyElement3D from "./_components/MyElement";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas>
      <MyElement3D />
    </Canvas>
  );
}
