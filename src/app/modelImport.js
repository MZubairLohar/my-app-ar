import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const gift = useGLTF("./scene.gltf");
  gift.scene.traverse((child) => {
    if (child.isMesh) {
      child.scale.set(10, 10, 10);
    }
  });

  return (
    <>
      <OrbitControls />
      <primitive object={gift.scene} />
      {/* <Environment preset={"city"} /> */}
    </>
  );
}
