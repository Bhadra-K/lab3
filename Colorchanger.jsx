import { useState,useEffect } from "react";

function Colorchanger(){
    const colors=['lightblue','lightgreen','lightcoral','khaki','plum']
    const[index,setIndex]=useState(0);
    useEffect(()=>{
        document.body.style.backgroundColor=colors[index];
    },[index]);
    //timer code
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % colors.length);
        },100);
    return () => clearInterval(timer);
    }, []);
    // 
    const changeColor=()=>{
        setIndex((prev)=>(prev+1)%colors.length);
    };
    return(
        <div>
            <h2>Background Color Changer</h2>
            <p>Current color: {colors[index]}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default Colorchanger;
