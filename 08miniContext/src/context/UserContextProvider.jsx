import React, { useState } from "react";
import UserContext from "./UserContext";

// step-2
//  prop is {children} passsing whatever is being paased
const UserContextProvider =({children})=>{
 
  const [user, setUser]=useState(null);

  return(
    // what all varible access is being given by provider that is in value prop
    // value is the data that is being shared globally 
    <UserContext.Provider value={{user,setUser}}>

        {children}  
        {/* children it can Login or profile it is whatever that is wrapped inside the userConextProvider */}
    </UserContext.Provider>
  )
}

export default UserContextProvider