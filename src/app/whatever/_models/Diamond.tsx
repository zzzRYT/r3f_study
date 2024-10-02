import { useGLTF } from "@react-three/drei";

export default function Diamond() {
  const model = useGLTF("/black_diamond_gem_pack_-_gemstone_pack.glb");

  console.log(model);

  return (
    <group dispose={null}>
      <mesh
        geometry={model.nodes.Object_2.geometry}
        material={model.materials.material_0}
      />
    </group>
  );
}
