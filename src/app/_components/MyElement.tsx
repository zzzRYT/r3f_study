"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
} from "three";

const MyElement3D = () => {
  const refMesh = useRef<Mesh>(null!);
  //초 단위로 프레임을 이동(애니메이션을 위한 hook)
  //delta는 이전 프레임과 다음 프레임의 경과 시간, 단위 : ms
  useFrame(({ clock }) => {
    refMesh.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <>
      <axesHelper scale={10} />
      <OrbitControls />
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} rotation={[0, (45 * Math.PI) / 180, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </>
  );
};

export default MyElement3D;
