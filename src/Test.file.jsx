import {useState, useEffect} from "react";


export default function Course2(){
    const [color, setColor] = useState();
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(()=> {
        // console.log('hello')
        // if color red -> make it blue 
        // if color blue -> make it red
        
        // const newColor = color === 'red'? 'blue' : 'red'
        // setColor(color === 'red'? 'blue' : 'red')
        // setColor(prev => prev === 'red'? 'blue' : 'red')
        // setNum2( prev=> prev + 10)

        setNum2(prev => prev + 10)
    }, [num])

    // Initial render
    // 0
    // 10

    // Click btn 1
    // 1
    // 20
    console.log('inicial hello')

    return (
        <div style={{backgroundColor: color}}>
            <p>
            Counter: {num}
            </p>
            <button onClick={()=> setNum(num + 1)}>Click Me!</button>
            <p>
            Counter2: {num2}
            </p>
            <button onClick={()=> setNum2(num2 + 1)}>Click Me!</button>

        </div>
    )
}

export function Course3(){
    return (
        <div>
            <p>
                
            </p>
        </div>
    )
}



