import { OrbitControls, PivotControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Model from './Model'
import { Suspense } from 'react'
import Placeholder from './Placeholder'
import Hamburger from './Hamburger'
import Fox from './Fox'
import Pipette
    from './Pipette'
export default function Experience() {
    // const model = useLoader(
    //     GLTFLoader,
    //     './FlightHelmet/glTF/FlightHelmet.gltf',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath('./draco/');
    //         loader.setDRACOLoader(dracoLoader);
    //     });

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={.04} />
        <ambientLight intensity={0.5} />

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        {/* <primitive object={ model.scene } scale={ 5 } position-y={-1} /> */}
        <Suspense fallback={<Placeholder position-y={.5} scale={[2, 3, 2]} />}> 
            <Hamburger scale={.35} />
            <PivotControls anchor={[0,0,0]}>
                <Pipette scale={0.9} position-y={10} />
            </PivotControls>
        </Suspense>

        <Fox />
    </>
}