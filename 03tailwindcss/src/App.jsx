import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    useraname:"Jyoti",
    age:21
  }

  return (
    <>
    {/* tailwindcss has some reserved keywords one of them is class, manymore */}
     <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind test</h1>


    {/* tailwindcss props: 
    rather than writing every card at on eplace create dits own components
    and the add cits html,css,js (jsx) in thta component itself*/ }

     <Card  username="Jyoti Karagi" textBtn="For More Information" />
     {/* to Use this username bu card  */}
     <Card username="Prubhanth Karagi" textBtn="Know more"/>
     {/* pass the props */}
     {/* if paasing props here is not done then pass default value
     like btnText || "Visit" 
     or in the direct handling time {btntext="Visit"}->this execute if passing is not done 
     */}
    </>
  )
}

export default App
