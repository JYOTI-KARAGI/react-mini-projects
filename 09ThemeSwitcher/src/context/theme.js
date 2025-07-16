// theme.js here it is combination of bioth themeContext and themeContextProvider
import { useContext, createContext } from "react";

export const themeContext=createContext({
    // default value like blueprint
    // createContext the values may both methods or string  
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})

// directly exporting provider
export const ThemeProvider=themeContext.Provider

// in components rather than useContext(themeContext) we can just use useTheme
export default function useTheme(){
    return useContext(themeContext);
}