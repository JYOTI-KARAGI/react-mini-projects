import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import {FiMenu, FiX} from "react-icons/fi"

function Header () {


    const [menuOpen, setmenuOpen]=useState(false);

    const navLinkStyle=({isActive})=>
        `block py-2 pr-4 pl-3 duration-200 ${
      isActive
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-700"
    } hover:text-indigo-500`;

    return ( 
    <header className="shadow sticky top-0 z-50">
        <nav className="bg-transparent   px-4 sm:px-6 py-2.5 ">
            {/* main wrapper logo and links */}
            <div className="flex  justify-between items-center mx-auto max-w-screen-xl" >
               {/* a tag reload whole bage once again so raect uses link */}
                <Link to="/" >
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulg_VmvJwBAjkjzVRTEgFNUQp-21_OXnV8hYm2XuFSPOmapSAwGm-mmTpQRfHO1zabKk&usqp=CAU" 
                     className="mr-3 h-10 hover:scale-110 transition-transform duration-300 ease-in-out "
                     alt="logo" />
                </Link>
                <div>
                    <ul className="hidden  md:flex gap-6  text-sm items-center font-medium ">
                        <li>

                            <NavLink to="/"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200  ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out" :"text-gray-700"} hover:text-indigo-600`}>
                               Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               Contact
                            </NavLink>
                        </li>
                    </ul>

                    

                </div>
                        {/* hamburger menu in mobile  */}
                         <button className="md:hidden hover:text-gray-800 text-xl text-gray-500 "
                    onClick={()=>setmenuOpen(!menuOpen)}>
                        {menuOpen ?<FiX/>:<FiMenu/>}
                         </button>

            </div>

              {menuOpen && (
          <div className="md:hidden mt-2 bg-transparent px-4 py-3 rounded-md">
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li><NavLink to="/" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkStyle} onClick={() => setMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/projects" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
              <li><NavLink to="/contact" className={navLinkStyle} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
            </ul>
          </div>
        )}
                  
        </nav>
    
    </header>
     )
}

export default  Header;