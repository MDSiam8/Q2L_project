import { OrbitControls, PivotControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Model from './Model'
import { Suspense, useRef } from 'react'
import Placeholder from './Placeholder'
import Hamburger from './Hamburger'
import Table from './Table'
import Fox from './Fox'
import { Html } from '@react-three/drei'
// import { useRef } from 'react'
import Pipette
    from './Pipette'
import ChemistryElements from './ChemistryElements'
export default function Experience() {
    // const model = useLoader(
    //     GLTFLoader,
    //     './FlightHelmet/glTF/FlightHelmet.gltf',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader();
    //         dracoLoader.setDecoderPath('./draco/');
    //         loader.setDRACOLoader(dracoLoader);
    //     });
    const chemistryRef = useRef();
    const htmlRef = useRef();
    return <>


        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={.04} />
        <ambientLight intensity={0.5} />

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={15}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        {/* <primitive object={ model.scene } scale={ 5 } position-y={-1} /> */}
        <Suspense fallback={<Placeholder position-y={.5} scale={[2, 3, 2]} />}>
            {/* <Hamburger scale={.35} /> */}
            <PivotControls anchor={[0, 0, 0]}>
                {/* <Pipette scale={0.9} position-y={10} /> */}
            </PivotControls>
        </Suspense>
        <Table scale={13} position-y={-1}>

        </Table>
        <PivotControls>
            <Fox />
        </PivotControls>
        {/* <PivotControls anchor={[0, 0, 0]} scale={3}> */}
        <ChemistryElements
            position={[0, 4.6, 0]}
             useRef={chemistryRef} 
            scale={2}
        //  onClick={(e) => console.log(chemistryRef.current)}
        >
        </ChemistryElements>
        {/* </PivotControls> */}
        <Html wrapperClass={"label"} position={[0, 8, 0]} center useRef={htmlRef}>
            Welcome to our very first lab! To begin, click on any of the objects...
        </Html>
    </>
}