import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";




function Layout() {
    return (  
        <>
       
       <div className=" flex flex-col relative min-h-screen  overflow-x-hidden  ">

       <img src="/bg-illustration.svg" alt="Background"
       className= " fixed bottom -0 left-1/2 -translate-x-1/2 -z-10 w-auto h-auto max-w-full max-h-[90vh] opacity-0 animate-fade-in pointer-events-none object-contain  " />
       

        <Header/>
        {/* To dynamically add the pages  we use outlet .outlet is a playholder */}
        {/* So wherever there is outlet we can change remaining outside of it will be static */}
        <div className="flex-grow">
        <Outlet />
        </div>
        <Footer/>
        </div>
        
        </>
    );
}

export default Layout ;