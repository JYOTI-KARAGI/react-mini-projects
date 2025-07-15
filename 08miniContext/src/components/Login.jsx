import React,{useState,useContext} from "react";
// to reflect on the page using useState
//
import UserContext from "../context/UserContext";

// step4
function Login() {

    
// for inputs Username and password to reflect on the web page using usestate
const [username, SetUsername]=useState('')//empty string initially
const [password, Setpassword]=useState('')//empty string initially

// to fetch the value inside the userContext there comes hook usecontext
// useStete define in the usestateprivider to change the user state in the web page
const {setUser}=useContext(UserContext)

// this is about the sending the data Login
const handleSubmit =(e)=>{
e.preventDefault()
setUser({username,password})
// when the form is submitted the global user is Updated
}

    return ( 
        <>
        <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>SetUsername(e.target.value)} />
        <br />
        <input type="text" placeholder="Password" value={password} onChange={(e)=>Setpassword(e.target.value)} />
        <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
        </div> <br />
        </>
     );
}

export default Login ;