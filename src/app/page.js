"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// import { Canvas } from "@react-three/fiber";
import ARCones from "./arCones";
export default function Home() {
  // const canvasStyle = {
  //   height: "600px", 
  // };
  return (
    <>
      <div>
        {/* <Canvas style={canvasStyle}> */}
          <ARCones />
        {/* </Canvas> */}
        {/* <Experience /> */}
      </div>
    </>
  );
}
