import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";


function ThemeToggle() {

    const {theme,toggleTheme}=useContext(ThemeContext);

    return ( 
        <>
             <p>Current Theme: {theme}</p>
             <button onClick={toggleTheme}>Toggle Theme</button>
        </>
     );
}

export default ThemeToggle;