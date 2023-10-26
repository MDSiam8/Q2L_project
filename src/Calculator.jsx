import { Html } from '@react-three/drei'
import { useEffect, useState } from 'react';
export default function Calculator(){
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log(counter);
    }, [counter]);
    return (
        <Html wrapperClass={'label'} scale={2} zIndex={100} center >
            {/* {"Hello"} */}
            {/* https://github.com/pmndrs/drei#html */}
            <h2>This is the calculator</h2>
            <button className='labelBtn' onClick={() => setCounter(counter + 1)}>1</button>
            <button className='labelBtn'>2</button>
            <button className='labelBtn'>3</button>
            <br/>
            <button className='labelBtn'>4</button>
            <button className='labelBtn'>5</button>
            <button className='labelBtn'>6</button>
            <br/>
            <button className='labelBtn'>7</button>
            <button className='labelBtn'>8</button>
            <button className='labelBtn'>9</button>
            <br/>
            <button className='labelBtn'>0</button>
            <button className='labelBtn'>Back</button>
            <button className='labelBtn'>Enter</button>
            <button className='labelBtn'>{counter}</button>
        </Html>
    );
}