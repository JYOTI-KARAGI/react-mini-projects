import React from "react";

function Home() {
    return (  
        <>
        <section className=" flex justify-center items-center px-6 pt-24 pb-24 bg-transparent ">
            <div className=" max-w-4xl md:text-left " > 
               <h1 className="text-4xl md:text-5xl text-gray-800 font-bold  mb-4 hover:scale-105 transition-transform duration-300"> Hi, I'm Jyoti! </h1> 
               <p className="text-base md:text-lg font-medium text-gray-700 hover:scale-105 transition-transform duration-300  ">Frontend Developer | React Enthusiast</p> 
               <p className="text-sm md:text-base font-medium text-gray-600 m-5">I build responsive, accessible, and user-friendly web apps using React.js & modern frontend tools.</p>
               <a href="/Jyoti_k_react_dev_resume.pdf" target="_blank"
               className="text-black bg-indigo-400 hover:bg-indigo-500 px-3 py-1 font-medium shadow-sm rounded-lg transition-transform  duration-300 ease-in-out transform
               hover:scale-110 mt-4 inline-block "
               >Resume</a>
            </div>
        </section>
        </>
    );
}

export default Home ;