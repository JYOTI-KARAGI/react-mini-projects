import { useState } from 'react'
// importing hook usestate from react library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 /* useState(default vlaue here can be any number,obejct{},"string",boolean) it give 2 value in array format[couter[0index], setcounter[function->responsible for updating the counter varible ]
*/
let [counter, setCounter]=useState(1)  

//rathre than hardcoded value will create varible
// but it doest red by raect while incrementing 
//let counter=0

// arrow function
const Increment=()=>{
if(counter<20){
  setCounter(counter + 1)
  console.log("Button clicked for Increment: ", counter);

}
  
  // counter=counter+1
  // Here Comes the need of react if we want to change the
  // UI in many places in Javascript we assign ids, classes then 
  // start changing the value separently for all of them 
  // IMP: But react controls this function it decides what to change and what not
  // it introduce Hooks (methods )through this data updates on UI
}


const Decreament =()=>{
  if(counter>0){
    setCounter(counter - 1);
   console.log("Button Clicked for Decrement: ",counter);
  
  }
  setCounter(counter - 1);
   console.log("Button Clicked for Decrement: ",counter);
  
}
  return (
    <>
      <h2>Jyoti Prabhunath Karagi - Basic Count Project </h2>
      <strong>Cunter Value: {counter}</strong>
      <br /><br />
      <button onClick={Increment}>Increment Value by {counter}</button>
      <br /><br />
      <button onClick={Decreament}>Decreament Value by {counter}</button>
      <br /><br />
      <footer><p>Footer {counter}</p></footer>
    </>
  )

}
export default App
