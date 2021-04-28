import { useState } from 'react';

const Functions = () => {
    const [properties, setProperties] = useState<{numOne:number,numTwo:number}>({ numOne: 1, numTwo: 2 });
    const [result, setResult] = useState<null|number>(null);
    const sumar = (numOne: number, numTwo: number): number => Number(numOne) + Number(numTwo);
    const onChange=(e:any)=>{
        const {name,value}=e.target;
        console.log(name,value)
        setProperties({
            ...properties,
            [name]:value
        })
    }

    const add=()=>{
        const {numOne,numTwo}=properties;
        const result=sumar(numOne,numTwo);
        setResult(result);
    }

    return (
        <>
            <h2>Functions</h2>
            <input className="form-control" type="text"  onChange={(e)=>onChange(e)} name="numOne" value={properties.numOne} />
            <input className="form-control" type="text"  onChange={(e)=>onChange(e) } name="numTwo" value={properties.numTwo} />
            <button onClick={()=>add()}>Add</button>
            <div>{result}</div>
        </>
    )
}

export default Functions;