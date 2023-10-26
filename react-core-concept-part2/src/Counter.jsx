import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }
    return (
        <div style={{marginTop: '1rem', borderRadius: '8px', border : '2px solid black', background : 'gold', padding : '1.5rem', marginBottom : '10px'}}>
            <h2>Count : {count}</h2>
            <button style={{marginRight: '15px'}} onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}