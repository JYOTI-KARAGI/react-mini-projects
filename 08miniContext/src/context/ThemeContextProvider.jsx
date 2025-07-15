import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

// creating ThemeProvider components

const ThemeContextProvider= ({children})=>{

const [theme, setTheme]=useState("light");


const toggleTheme =()=>{

setTheme((prev)=>(prev==="light"?"dark":"light"))
};

useEffect(()=>{
    document.body.className=theme;

},[theme]);

return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>

)

}

export default ThemeContextProvider;