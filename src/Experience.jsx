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
import { GlassDropper } from './GlassDropper';
import Balance from './Balance';
import { Subgrid } from './Subgrid';
import Calculator from './Calculator';
import Funnel from './Funnel';
import { Flask } from './Flask';
import { Spatula } from './Spatula';
import { Beaker } from './Beaker';
import '../dist/output.css'
import BalanceWithAnimations from './BalanceWithAnimation';
export default function Experience() {
    const [htmlText, setHtmlText] = useState("Welcome to our very first lab using React3Fiber! To begin, click on any of the objects...");
    const controls = useRef();

    const handleChemistryClick = () => {
        setHtmlText("Wow look at all these lab items! I wonder what they could be used for... How about you try and talk with the friendly fox over there? It might be able to help.");

        // const targetPosition = new THREE.Vector3(0, 4.6, 0);

        // // Set camera position and lookAt
        // controls.current.target.copy(targetPosition);
        // controls.current.object.position.copy(targetPosition.clone().add(new THREE.Vector3(8, 8, 8))); // Adjust the value for desired distance
    }

    const handleFoxClick = () => {
        setHtmlText("Greetings fellow student... I am the wise all-knowing fox -- And using my wisdom, I am pleased to inform you that... this is a short demo meant to show CUHK a preview of the future!");
    }

    return <>
        <Perf position="top-left" />
        <OrbitControls ref={controls} makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={.04} />
        <ambientLight intensity={0.5} />

        <mesh receiveShadow position-y={-1} rotation-x={- Math.PI * 0.5} scale={15}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense fallback={<Placeholder position-y={.5} scale={[2, 3, 2]} />}>
        </Suspense>
        <Table scale={13} position-y={-1} />
        {/* <PivotControls> */}
        <mesh onClick={handleFoxClick} position={[-2, 5, -5]} rotation-y={13}>
            {/* <Fox /> */}
        </mesh>
        {/* </PivotControls> */}
        {/* <ChemistryElements
            position={[-2, 4.6, 4]}
            scale={2}
            onClick={handleChemistryClick}
        /> */}
        {/* <TenMlCylinder
            position={[0, 5, 1]}
            scale={.15}
            onClick={handleChemistryClick} /> */}
        {/* <VFlask10ML
            position={[0, 5, -1]}
            scale={.3}
            onClick={handleChemistryClick}>
        </VFlask10ML> */}
        {/* <GlassDropper /> */}
        <mesh>
            <GlassDropper />
        </mesh>
        <mesh position={[0, 4.55, 0]} scale={1} onClick={handleChemistryClick}>
            <BalanceWithAnimations />
        </mesh>
        <Html wrapperClass='label' position={[0, 8, 0]} center distanceFactor={15}>
            <link href="./dist/output.css" rel="stylesheet" />
            {/* <div className={"text-current text-4xl italic font-light z-40 p-5 ring-emerald-400"}>yaee! you made it </div> */}

            {/* <button className="bg-emerald-400 ">Hello</button> */}
            {/* <div class="flex justify-center items-center h-20">
                <button class="bg-pink-300 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 mx-2">
                    Button 1
                </button>

                <button class="bg-blue-300 text-white font-bold py-2 px-4 rounded-full transition duration-500 transform hover:rotate-45 mx-2">
                    Button 2
                </button>

                <button class="bg-green-300 text-white font-bold py-2 px-4 rounded-full transition duration-700 transform hover:translate-x-4 mx-2">
                    Button 3
                </button>

                <button class="bg-purple-300 text-white font-bold py-2 px-4 rounded-full transition duration-400 transform hover:translate-y-4 mx-2">
                    Button 4
                </button>

                <button class="bg-yellow-300 text-white font-bold py-2 px-4 rounded-full transition duration-600 transform hover:rotate-90 mx-2">
                    Button 5
                </button>
            </div> */}
            {/* <p className='to-red-800'>Hello</p> */}
            <p>
                {htmlText}
            </p>
        </Html>
        {/* <Calculator/> */}
        {/* Have the balance, spatula, and beaker */}
        {/* <Funnel /> */}

        <GlassDropper />
        <mesh position={[2.4, 4.967, 0]} scale={1.7} rotation-y={90 * 3.1415 / 180}>
            <Spatula />
        </mesh>
        <mesh position={[1, 4.9, 2.8]}>
            {/* <meshStandardMaterial></meshStandardMaterial> */}
            {/* <meshPhongMaterial color="#ff0000" opacity={0.1} transparent /> */}
            <Flask />
        </mesh>
        <mesh position={[1.7, 4.9, -2.4]}>
            <Beaker />
        </mesh>
        {/* <mesh>
            <BalanceWithAnimations />
        </mesh> */}
        <Float speed={5}
            floatIntensity={2}>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={2}
                color="salmon"
                position-y={11}
                rotation-y={93 * 3.14159 / 180}
                maxWidth={50}
                textAlign="center"
            >
                Hello CUHK!
            </Text>
        </Float>
    </>
}
