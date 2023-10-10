import { OrbitControls, PivotControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three';
import Model from './Model'
import TenMlCylinder from './tenMlCylinder';
import { Suspense, useRef, useState } from 'react'
import Placeholder from './Placeholder'
import Hamburger from './Hamburger'
import Table from './Table'
import Fox from './Fox'
import { Html } from '@react-three/drei'
import Pipette from './Pipette'
import ChemistryElements from './ChemistryElements'
import { Float, Text } from '@react-three/drei';
import { VFlask10ML } from './VFlask10ML';

export default function Experience() {
    const [htmlText, setHtmlText] = useState("Welcome to our very first lab using React3Fiber! To begin, click on any of the objects...");
    const controls = useRef();

    const handleChemistryClick = () => {
        setHtmlText("Wow look at all these lab items! I wonder what they could be used for... How about you try and talk with the friendly fox over there? It might be able to help.");

        const targetPosition = new THREE.Vector3(0, 4.6, 0);

        // Set camera position and lookAt
        controls.current.target.copy(targetPosition);
        controls.current.object.position.copy(targetPosition.clone().add(new THREE.Vector3(8, 8, 8))); // Adjust the value for desired distance
    }

    const handleFoxClick = () => {
        setHtmlText("Greetings fellow student... I am the wise all-knowing fox -- And using my wisdom, I conclude today that this lab is... finished!");
    }

    return <>
        <Perf position="top-left" />

        <OrbitControls ref={controls} makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={.04} />
        <ambientLight intensity={0.5} />

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={15}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense fallback={<Placeholder position-y={.5} scale={[2, 3, 2]} />}>
        </Suspense>
        <Table scale={13} position-y={-1} />
        {/* <PivotControls> */}
            <mesh onClick={handleFoxClick} position={[-2, 5, -5]} rotation-y={13}>
                <Fox />
            </mesh>
        {/* </PivotControls> */}
        <ChemistryElements
            position={[0, 4.6, 0]}
            scale={2}
            onClick={handleChemistryClick}
        />
        <TenMlCylinder 
        position={[0,5,3]}
        scale={.3}/>
        <VFlask10ML
        position={[0, 5, -3]}
        scale={.5}>

        </VFlask10ML>
        <Html wrapperClass={"label"} position={[0, 8, 0]} center>
            {htmlText}
        </Html>
        <Float speed={5}
            floatIntensity={2}>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={2}
                color="salmon"
                position-y={10}
                rotation-y={180}
                maxWidth={50}
                textAlign="center"
            >
                Demo Lab
            </Text>
        </Float>
    </>
}
