import React from "react";
import styles from "./Counter.module.css";
import { useState } from "react";
const Counter=()=>{
    const[count,setCount]=useState(0);
    const handleCount=(val)=>{
        setCount(count+val)
    }
    return(<div className={styles.mainDiv}>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={()=>handleCount(+1)}>Increment</button>
    <button onClick={()=>handleCount(-1)}>Decrement</button>
    </div>)
}
export default Counter;