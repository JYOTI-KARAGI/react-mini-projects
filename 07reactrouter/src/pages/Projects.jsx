import React from "react";

function Projects() {

    const projectData=[
        {
            title:"Multicategory To-Do List Web App",
            description:"A multi-category to-do list with localStorage and dynamic form fields.",
            github:"https://github.com/JYOTI-KARAGI/To-Do_web_app.git"

        },
        {
             title:"Password Generator",
            description:"Generates strong random passwords with copy-to-clipboard support.",
            github:"https://github.com/JYOTI-KARAGI/Password-Generator-using-React.git"

        },
        {
             title:"Currency Converter",
            description:"A multi-category to-do list with localStorage and dynamic form fields.",
            github:"https://github.com/yourusername/currency-converter"
        }
    ];

    return (  
        <>
       <section className="bg-transparent py-20 px-6">
           <div className="text-center mb-10 max-w-xl mx-auto ">
            <h2 className="text-3xl font-bold  text-gray-800 hover:scale-110 transition-transform duration-300 ">Projects</h2>
            <p className="text-gray-600 mt-2 text-sm">Some of the projects I've worked on</p>
           </div>


           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto  max-w-6xl px-4">
                     {projectData.map((project,index)=>(
                   <div className="bg-indigo-50 shadow-md hover:shadow-2xl rounded-lg 
                   border border-gray-300 transition-shadow p-6 flex flex-col justify-between min-h-[200px]"
                       key={index}>
                             <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center" >{project.title}</h3>
                             <p className=" text-gray-700 text-sm mb-4">{project.description}</p>
                             
                        <div className="flex justify-between items-center "
                             ><a href={project.github} target="_blank" rel="noreferer"
                             className="text-indigo-600 hover:underline text-sm">Github Repo</a>
                             
                             <span className="text-sm text-gray-500 cursor-pointer hover:text-indigo-500">Know more...</span>
        
                         </div>
                         
                   </div>
                   ))}
           </div>
       </section>
        </>
    );
}

export default Projects ;