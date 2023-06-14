"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// import { Canvas } from "@react-three/fiber";
import ARConesTwo from "./arConeTwo";
export default function Home() {
  // const canvasStyle = {
  //   height: "600px",
  // };
  return (
    <>
      <div>
        {/* <Canvas style={canvasStyle}> */}
        <ARConesTwo />
        {/* </Canvas> */}
        {/* <Experience /> */}
      </div>
    </>
  );
}
