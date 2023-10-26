/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GlassDropper() {
  const dropper = useGLTF('./glass_dropper_2.0.gltf');
  return <primitive
      object={dropper.scene}
      scale={2.5}
      position={[2, 4, 2.5]}
      // rotation-y={0.3} 
      />;
}

// useGLTF.preload("./glassDropper.glb");
