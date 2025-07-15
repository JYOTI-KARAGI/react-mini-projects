import React, { useState } from 'react';


function App() {
  // to Hold the color in varible which also reflecting on UI default oklch(90.1% 0.058 230.902)
  const [color, setColor] = useState("oklch(90.1% 0.058 230.902)")

  return (
    <>
      <div className="w-full h-screen duration-200 ease-in-out"
      // for the background color style with double curlybraces and for the value no need of culrybrace
      style={{backgroundColor:color}}>

          {/* <p className="text-center justify-center py-5">Jyoti Prabhunath Karagi</p> */}
          <p className='text-center justify-center py-24'><strong>BackgroundColor Changing Project, it includes Four pastel colors Try it out!  </strong></p>
          
          {/* for the footer inside body itself */}
          <div className="fixed flex flex-wrap justify-center top-40 inset-x-0 px-2 ">
               <div className="flex flex-wrap bg-white text-black px-4 py-2 rounded-full gap-2">
                
                <button onClick={() =>setColor("oklch(80.8% 0.114 19.571)")} className="outline-none p-4 px-4 py-1 rounded-full" style={{backgroundColor:"oklch(80.8% 0.114 19.571)"}}>Pastel Red</button>
                <button onClick={() =>setColor("oklch(87.1% 0.15 154.449)")} className="outline-none p-4 px-4 py-1 rounded-full" style={{backgroundColor:"oklch(87.1% 0.15 154.449)"}}>Pastel Green</button>
                <button onClick={() =>setColor("oklch(71.2% 0.194 13.428)")} className="outline-none p-4 px-4 py-1 rounded-full" style={{backgroundColor:"oklch(71.2% 0.194 13.428)"}}>Rose</button>
                <button onClick={() =>setColor("oklch(70.7% 0.165 254.624)")} className="outline-none p-4 px-4 py-1 rounded-full" style={{backgroundColor:"oklch(70.7% 0.165 254.624)"}}>Pastel Blue</button>

               </div>
          </div>

      </div>
   </> 
  )
}

export default App
