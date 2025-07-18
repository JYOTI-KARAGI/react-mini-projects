// theme.js here it is combination of bioth themeContext and themeContextProvider
import { useContext, createContext } from "react";

export const themeContext=createContext({
    //  like blueprint , creatin gcontext object with default values
    // createContext the values may both methods or string  
    themeMode:"light",
    darkTheme:()=>{}, //placeholder for function to switch to dark mode
    lightTheme:()=>{},

})

// directly exporting context provider to use in app.jsx
export const ThemeProvider=themeContext.Provider

// in components rather than useContext(themeContext) we can just use custom hook useTheme
export default function useTheme(){
    return useContext(themeContext);
}