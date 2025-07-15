import React from "react";

function SocialIcon({link,icon:IconComponent,label}) {
    return ( 
        <>
        <a href={link}
           target="_blank"
           rel="noreferrer"
           className="group relative flex flex-col justify-center 
           items-center "
           
        > 
           
           {/* for label */}
            <span className="absolute -top-8 opacity-0 group-hover:opacity-100 text-sm text-gray-800 transition-all duration-500">{label}</span>

           {/* for Icon */}
            
               <IconComponent className=" text-2xl text-gray-700 group-hover:text-indigo-600 transition-colors duration-300 group-hover:animate-bounce" />
            
        </a>
        </>
     );
}

export default SocialIcon;