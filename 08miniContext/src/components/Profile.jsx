import React,{useContext} from "react";
import UserContext from "../context/UserContext";

// step5

function Profile() {

    const {user}=useContext(UserContext);

    if(!user) return <div>Please Login</div> //if no user available
    return <div>Welcome {user.username}</div>
}

export default Profile;