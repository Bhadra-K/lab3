import React, { createContext, useState } from "react";
const ThemeContext=createContext();
function Context(){
    const [theme,setTheme]=useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    };
    // define style depending on theme
    const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "300px",
    minHeight: "1000vh",
    };
    // 
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div style={style}>
                <h1>Current Theme</h1>
                <p>{theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </ThemeContext.Provider>
    );
}
export default Context;
