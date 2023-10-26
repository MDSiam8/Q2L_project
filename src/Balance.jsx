import { useGLTF, useAnimations } from '@react-three/drei'

export default function Balance() {
    const balance = useGLTF('./balance_1003.gltf');
    return <primitive
        object={balance.scene}
        scale={.6}
        // position={[- 2.5, 0, 2.5]}
        // rotation-y={0.3} 
        />;
}