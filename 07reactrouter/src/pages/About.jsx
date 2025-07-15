import React from "react";
import {useEffect,useRef, useState} from "react";

// for skill bar animation 
// useref:to get reference to the skill section
// useeffect to run scroll detection after components mounts (when skillsection visibels observer logic triggers)
// usestate to track whether to animate the bar or not (skill bar visible state true)


// ----------------------------------------------------------------------

function About() {

    // setting up the reference section we want to observe that point to the skill section
const skillRef=useRef(null);
// using boolean to track for animation
const [animate, setAnimate]=useState(false);


// scroll observer with useEffect
// intersction observer API browser api
useEffect(() =>{
    const observer= new IntersectionObserver(
        (entries)=>{
            //call back 
            // it take only one entry in array form
            const entry=entries[0];
            if(entry.isIntersecting){
                setAnimate(true);
                observer.disconnect();
            }

        },{ //The options object passed into the IntersectionObserver()
            //  constructor let you control the circumstances under which the observer's 
            // callback is invoked.
            threshold:0.7
        }
    );

    if(skillRef.current){
        observer.observe(skillRef.current);
    }

    return ()=> observer.disconnect();
},[]  //dependencies
);
// ----------------------------------------------------------------------

    return (  
        <>
        <section className=" py-20 px-6 bg-transparent " >
             <div className= "max-w-3xl text-gray-800 mx-auto mb-10 text-center font-semibold">
                <h2 className="  text-3xl font-bold mb-4 text-gray-800  hover:scale-110 transition-transform duration-300">About</h2>
                   <p className="md:text-base font-medium text-sm text-gray-700 mt-6">     I'm a Frontend Developer passionate about building responsive and accessible web applications using modern technologies like React.js and Tailwind CSS.
                      I enjoy transforming ideas into clean, scalable user interfaces and continuously strive to improve my skills through real-world projects and learning.
                      Whether working on solo projects or collaborating in a team, I believe in writing code that is not only functional but also user-friendly and visually appealing.
                      </p><hr className="mt-6 border-gray-400"  />
             </div>

             
                 <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                        <div className="bg-indigo-50 border border-gray-300 rounded-lg shadow-md p-6  hover:shadow-[0_0_20px_1px_rgba(255,240,240,0.5)] hover:translate-y-3 transition-transform duration-300 w-full ">
                            
                               <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Info</h3>
                                <div className="space-y-2 text-sm ">
                                          {/* <div className="flex">
                                          <p>
                                              <span className="w-28 font-semibold text-gray-800" >Birthday : </span> <span className=" text-gray-700">26 october 2003</span>
                                          </p>
                                          </div>
                                         <div className="flex ">
                                         <p>
                                             <span className="w-28 font-semibold text-gray-800" >City : </span> <span className=" text-gray-700" >Belagavi</span>
                                         </p>
                                         </div>
                                          <div className="flex  ">
                                          <p>
                                              <span className="w-28 font-semibold text-gray-800" >Age : </span><span className="text-gray-700">22</span>
                                          </p>
                                          </div>
                                            <div className="flex ">
                                          <p>
                                              <span className="w-28 font-semibold text-gray-800" >Phone No : </span> <span className="text-gray-700"> 1234-5678-90 </span>
                                          </p>
                                          </div>
                                          <div className="flex ">
                                          <p>
                                              <span className="w-28 font-semibold text-gray-800" >Email : </span><a href="mailto:jyotikakaragi@gmail.com" className="text-indigo-600 hover:underline">jyotikakaragi@gmail.com</a>
                                          </p>
                                          </div> */}
                                       {[
                                        ["Birthday" ,"26 October 2003"],
                                        ["City","Belagavi"],
                                        ["Email",<a href="mailto:jyotikakaragi@gmail.com" target="_blanck" className="hover:text-indigo-600 hover:underline">jyotikakaragi@gmail.com</a>],
                                        ["Phone No","1234-5678-90"],  // if any link like mail ["mail", <a href="" classname="">jyotikakaragi@gmail.com</a>]
                                        ["Age","22"]].map(([label,value],i)=>(
                                            <div key={i} className="grid grid-cols-[150px_fr] gap-x-2">
                                                <span className="font-semibold text-gray-800 ">{label}:</span>
                                                <span className="text-gray-700">{value}</span>

                                            </div>
                                        )    
                                        
                                      )}

                                 </div>
                                     
                             
                        </div>

                        <div className="bg-indigo-50 border border-gray-300 rounded-lg shadow-md p-6 w-full hover:shadow-[0_0_20px_1px_rgba(255,240,240,0.5)] hover:translate-y-3 transition-transform duration-300 ">
                             <h3 className="font-semibold text-gray-800 mb-4 text-lg">Education</h3>
                              
                    
                                <div className="space-y-3 text-sm">

                                      {/* <div className="flex">
                                      <p>
                                          <span className="w-28 font-semibold text-gray-800" >Degree and course : </span> <span className=" text-gray-700">Bachelor of Engineering in ECE</span>
                                      </p>
                                      </div>
                                     <div className="flex ">
                                     <p>
                                         <span className="w-28 font-semibold text-gray-800" >University : </span> <span className=" text-gray-700" >KLS Gogte Institute of Technology, VTU</span>
                                     </p>
                                     </div>
                                      <div className="flex  ">
                                      <p>
                                          <span className="w-28 font-semibold text-gray-800" >Duration : </span><span className="text-gray-700">2021-2025</span>
                                      </p>
                                      </div>
                                        <div className="flex ">
                                      <p>
                                          <span className="w-28 font-semibold text-gray-800" >Location : </span> <span className="text-gray-700"> Belagavi, Karnataka</span>
                                      </p>
                                      </div>
                                      <div className="flex ">
                                      <p>
                                          <span className="w-28 font-semibold text-gray-800" >GPA: </span> <span className="text-gray-700">7.8</span>
                                      </p>
                                      </div> */}

                                      {[
                                        ["Degree and Course" ,"Bachelor of Engineering in ECE"],
                                        ["University","KLS Gogte Institute of Technology, VTU"],
                                        ["Duration","2021-2025"],
                                        ["Location","Belagavi, Karnataka"],  // if any link like mail ["mail", <a href="" classname="">jyotikakaragi@gmail.com</a>]
                                        ["GPA","7.8"]].map(([label,value],i)=>(
                                            <div key={i} className="grid grid-cols-[150px_fr] gap-x-2">
                                                <span className="font-semibold text-gray-800 ">{label}:</span>
                                                <span className="text-gray-700">{value}</span>

                                            </div>
                                        )    
                                        
                                      )}

                                 </div>
                                     
                             
                        </div>
                 </div>

                 {/* ---------------- */}
                 {/* <hr className="mt-6 border-gray-400"  /> */}

                 <div ref={skillRef} className="mt-12 flex justify-center">

                    <div className="bg-indigo-50 shadow-lg max-w-md rounded-xl w-full p-6" >
                       
                        <h2 className="text-center text-lg font-semibold text-gray-800 mb-4 ">My Skills</h2>
                   
                        {[
                            {label:"HTML", percent:90},
                            {label:"CSS", percent:60},
                            {label:"Javascript", percent:70},
                            {label:"React.js", percent:60},
                            {label:"C", percent:65},
                            {label:"C++", percent:40}
                        ].map((skill,index)=>(
                            <div key={index} className="mb-4">
                                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                                    <span>{skill.label} </span>
                                    {/* <span>{skill.percent}%</span> */}
                                </div>

                                <div className=" w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500 "
                                    style={{ width:animate?`${skill.percent}%`:"0%"}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
             
        </section>
       
       
        </>
    );
}

export default About ;