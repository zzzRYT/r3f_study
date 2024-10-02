"use client";

import * as THREE from "three";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import style from "./jewelryContent.module.css";
import { JewelryContextType } from "../page";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AccumulativeShadows,
  CameraControls,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import ChainRoot from "../../_models/ChainRoot";
import Diamond from "../../_models/Diamond";
import Jewelry from "../../_models/Jewelry";
import CheckPendant from "../../_models/CheckPendant";
import { easing } from "maath";
import { useSnapshot } from "valtio";

interface JewelryContextProps {
  setJewelry: Dispatch<SetStateAction<JewelryContextType>>;
}

export default function JewelryContent({ setJewelry }: JewelryContextProps) {
  const [movement] = useState(() => new THREE.Vector3());
  const [temp] = useState(() => new THREE.Vector3());
  const group = useRef(null);
  const layersRef = useRef([]);
  const jewelry = {
    keyRing: [
      { name: "finishing", x: 3, y: 4 },
      { name: "chain", x: 1, y: 2 },
      { name: "chain", x: 3, y: 2 },
      { name: "chain", x: 5, y: 2 },
      { name: "pendant", x: 2, y: 3 },
      { name: "pendant", x: 4, y: 3 },
      { name: "pendant", x: 1, y: 1 },
      { name: "pendant", x: 3, y: 1 },
      { name: "pendant", x: 5, y: 1 },
    ],
  };

  const onClickSelectBox = (name: string, x: number, y: number) => {
    setJewelry(() => {
      return {
        jewelry: name,
        x: x,
        y: y,
      };
    });
  };

  return (
    <article className={style.container}>
      <Canvas
        camera={{
          position: [0, 2, 2],
        }}
      >
        <ambientLight intensity={0.5} color="#ffffff" />
        <axesHelper scale={100} />
        <OrbitControls target={[0, 1.4, 0]} />

        {/* {jewelry.keyRing.map((item) => {
          return (
            <mesh position={[item.x, item.y, 1]}>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          );
        })} */}
        <ChainRoot />
        {/* <Diamond /> */}
        {/* <group position={[0, 0.6, 0.2]}>
          <Jewelry />
        </group> */}
        <CheckPendant position={[0, 0.8, 0.7]} />
        <CheckPendant position={[0.5, 1.1, 0.7]} />
        <CheckPendant position={[-0.5, 1.1, 0.6]} />
        <CheckPendant position={[0, 2.7, -0.7]} />
      </Canvas>
    </article>
  );
}

function Backdrop() {
  const shadows = useRef(null);
  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.color,
      0.25,
      delta
    )
  );
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef(null);
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}
