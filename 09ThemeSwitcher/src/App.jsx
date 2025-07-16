import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'

function App() {
  const [themeMode, setthemeMode] = useState("light")//default state light 
  
  // define the darkTheme lightTheme methods

  const darkTheme= ()=>{
       setthemeMode("dark");
  }

  const lightTheme= ()=>{
       setthemeMode("light");
  }

  // To actually change the theme 

  useEffect(()=>{
    const Mode=document.querySelector('html');
    Mode.classList.remove("light","dark");
    Mode.classList.add(themeMode);
  },[themeMode])


  // this where we wrap the contextprovider for components
  return (
    <>
        {/* // what all varible access is being given by provider that is in value prop */}
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
       </div>   
    </ThemeProvider>
    </>
  )
}

export default App
