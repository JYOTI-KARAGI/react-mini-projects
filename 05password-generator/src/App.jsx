import { useState ,useCallback, useEffect, useRef} from 'react'


function App() {
  // to track the lenght of the password with 8 default and to reflect it on UI
  const [length, setlength] = useState(8)
  // to track number (to include in the password) but its checkbox only true or false values are aloowed 
  const [numberAllowed , setnumberAllowed] =useState(false)
  // to track special char (to include in the password) but its checkbox only true or false values are aloowed 
  const [charAllowed , setcharAllowed]=useState(false)
  //to reflect the  password change in the UI
  // we'll Generate the password and fit in the password whenever page reload it Reflect in UI 
  const [password, setPassword]=useState("")

  // useRef hook is to take reference of anything initial value null
  const passwordRef=useRef(null)

  // Password Generator
  // usecallback hooks is used becacuse same function is called every time when
  // passwordRegenerated, lenght allowed , charallowed, refreshed
  // so function craeted only once when dependancy changed function is recreated 
  const passwordGenerator = useCallback(()=> {
     let pass=""
    //  str is for the data we get from which we create password initially its a0z string 
     let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed){
        str = "0123456789" + str;
     }
     if(charAllowed){
        str = "!@#$%^&*" + str;
     }
      
    //among str we take random char for creating password for certain lenght
    for (let index = 1; index <= length; index++) {
      // select random index and fetch that char into pass variable
      let char =Math.floor( Math.random()*str.length)
      pass +=str.charAt(char);
    }
      setPassword(pass)

  },[length,numberAllowed,charAllowed])

//here usecallback is to optomize 
const copyPasswordtoClipboard=useCallback(()=>{
  // optinally select if password is available then
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3);

  // copying the text on the window 
    window.navigator.clipboard.writeText(password)
},[password])


  // if i directly call the passwordGenerator(pass) reacts limit for re-rendering exceed the limits
  // useEffect hook same as before if deps changes then effect its reflected on the UI
 
useEffect(() => {
passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

return (
    <>
    {/* mx-horizontal margin */}
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-14
     text-sky-900 bg-slate-500 " > 
     <h1 className='text-white text-center my-1'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
               <input 
               type="text" value={password}
               className="outline-none w-full py-1 px-3" 
               placeholder='Password' readOnly
              //  ref is for reference in useRef above for copying text
              ref={passwordRef}
               />
               <button className='bg-slate-700 text-white px-3 py-1 shrink-0'
               onClick={copyPasswordtoClipboard}
               >Copy</button>
          </div>
          <div className='text-sm flex gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input type="range" max={25} min={8} value={length} 
                    className='cursor-pointer '
                    onChange={(e)=>{setlength(e.target.value)}} />
                    <label className='cambria'>Length:{length}</label>
                </div>
                 <div className='flex items-center gap-x-1'>
                     <input type="checkbox" 
                     defaultChecked={numberAllowed}
                     // reverse the previous value
                     onChange={()=>{setnumberAllowed((prev)=>!prev);}} />
                     <label >Numbers</label>
                 </div>
                 <div className='flex items-center gap-x-1'>
                     <input type="checkbox" 
                     defaultChecked={charAllowed}
                     // reverse the previous value
                     onChange={()=>{setcharAllowed((prev)=>!prev);}} />
                     <label >Characters</label>
                 </div>
          </div>
    </div>
    </>
  )
}

export default App
