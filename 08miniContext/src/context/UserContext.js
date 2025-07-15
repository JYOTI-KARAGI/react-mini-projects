import React from "react";


// createContext method step-1

// provides provider here UserContext to wrap and componets inside it have access to Global UserContext
// like storage box where data can put and read the shared data
const UserContext=React.createContext()

export default UserContext;

