"use client";

import { useRef } from "react";
import { Vector3 } from "three";

interface checkPositionProps {
  position:
    | Vector3
    | [x: number, y: number, z: number]
    | readonly [x: number, y: number, z: number];
}

export default function CheckPendant({ position }: checkPositionProps) {
  const refMesh = useRef(null);

  return (
    <group>
      <mesh position={position} scale={0.01} ref={refMesh}>
        <dodecahedronGeometry args={[10, 5]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </group>
  );
}
