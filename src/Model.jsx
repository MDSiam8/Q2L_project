// import { useLoader } from '@react-three/fiber' // we dont need these anymore due to the useGLTF function
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useGLTF, Clone } from '@react-three/drei';

export default function Model() {
    // const model = useLoader(
    //     GLTFLoader,
    //     // './FlightHelmet/glTF/FlightHelmet.gltf',
    //     './hamburger.glb',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath('./draco/');
    //         loader.setDRACOLoader(dracoLoader);
    //     });
    const model = useGLTF('./hamburger-draco.glb');
    return <>
        <Clone object={model.scene} scale={.35} position-x={-4}/>;
        <Clone object={model.scene} scale={.35} position-x={0}/>;
        <Clone object={model.scene} scale={.35} position-x={4}/>;
    </>
}

useGLTF.preload('./hamburger-draco.glb')