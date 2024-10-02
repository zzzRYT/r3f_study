"use client";
import * as Three from "three";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function ChainRoot() {
  const model = useGLTF("/manecklace04.glb");

  return (
    <group
      dispose={null}
      position={[0, 0, 0]}
      rotation={[Three.MathUtils.degToRad(30), 0, 0]}
    >
      <primitive object={model.scene} />
    </group>
  );
}
