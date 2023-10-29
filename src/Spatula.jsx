import React, { useRef } from "react";
import { useFBX, useGLTF } from "@react-three/drei";

export function Spatula() {
  // const dropper = useFBX('./glass_dropper_2.0.gltf');
  const flask = useGLTF('./spatula.gltf');
   // Set up the material with transparency
//    flask.scene.traverse((node) => {
//     if (node.isMesh) {
//       node.material.transparent = true;
//       node.material.opacity = 0.3; // Adjust the opacity as needed
//     }
//   });
  return <primitive
      object={flask.scene}
      scale={.35}
    //   position={[-0.1,4.99,-2]}
    //   opacity={0.8}
    //   rotation-x={88*3.14159/180} 
    //   rotation-z={-88*3.14159/180}
      />;
}

