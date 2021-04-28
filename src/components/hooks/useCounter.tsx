import { useState } from 'react';

export const useCounter=(value:number=10)=>{
    const [counter, setCounter] = useState(value);
    const changeCounter = (value: number) => {
        setCounter(counter + value);
    }

    return {counter,changeCounter};
}