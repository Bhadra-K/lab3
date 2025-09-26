import { useEffect, useState } from "react";
function Usestate(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setCount(count+1);
},[]);
return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
)}
export default Usestate;
