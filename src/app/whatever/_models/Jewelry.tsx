"use client";

import { Environment, useGLTF } from "@react-three/drei";

export default function Jewelry() {
  const model = useGLTF("/jewelry_-_spear.glb");
  console.log(model);

  return (
    <group dispose={null} scale={0.1}>
      <Environment preset="sunset" />
      <primitive object={model.scene} />
      <meshPhongMaterial
        visible={true} //mesh가 보일지 안보일지 결정
        transparent={true} //mesh가 투명효과를 사용할 것이진 결정
        opacity={1} //범위 0 ~ 1, transparent가 true일 때만 동작
        //FrontSide
        //BackSide
        //DoubleSide
        color="#ff0000" //색상
      />
    </group>
  );
}
