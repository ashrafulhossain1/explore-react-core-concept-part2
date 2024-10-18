import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        // const newCount = count + 1;
        setCount(count +1)
    }
    const decrease = ()=>{
        const newCount = count -1;
        setCount(newCount)
    }
    return (
        <div style={{ border: "2px solid purple" }}>

            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}