
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Funnel() {
    const funnel = useGLTF('./funnel_1003.gltf');
    return <primitive
        object={funnel.scene}
        scale={2}
        position={[0, 4, 2.5]}
        // rotation-y={0.3} 
        />;
  }