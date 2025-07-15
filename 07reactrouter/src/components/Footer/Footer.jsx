import React from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"

function Footer() {
    return ( 
<>
<footer className="bg-blue-100 py-6 border-gray-200 border-t">

        <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        
        {/* <h2 className="text-md font-semibold text-gray-800 "></h2> */}
        
             <div className="flex gap-6">
                        <a href="https://github.com/JYOTI-KARAGI" target="_blank" aria-label="GitHub" >
                           <FaGithub className="hover:text-indigo-700 hover:scale-150 transition-transform delay-300"/>
                       </a>
                      <a href= "https://www.linkedin.com/in/jyoti-karagi-9927aa25b/" target="_blank" aria-label="Linkdin" >
                           <FaLinkedin className="hover:text-indigo-700 transition-transform hover:scale-150  delay-300"/>
                      </a>
                      <a href="mailto:jyotikakaragi@gmail.com" target="_blank" aria-label="EMail">
                           <FaEnvelope className="hover:text-indigo-700 hover:scale-150 transition-transform delay-300s"/>
                      </a>
             </div>
                      <p className="text-sm text-gray-500 ">
                       {new Date().toLocaleDateString(undefined,{
                           year:"numeric",
                           month:"long",
                           day:"numeric",
                       })} Jyoti Karagi
             </p>
        
        </div>

</footer>
</>
    )
}

export default Footer;