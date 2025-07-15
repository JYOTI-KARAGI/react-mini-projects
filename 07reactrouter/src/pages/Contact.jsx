import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialIcon from "../components/SocialIcon";

function Contact() {
    return (  
        <>
        <section className="min-h-screen bg-transparent py-20 px-4">
            <div className="mx-auto max-w-4xl">
                 {/* Information */}
                <div className="mb-12 text-center">
                      
                        <h2 className="text-3xl font-bold  text-gray-800 hover:scale-110 transition-transform duration-300">Contact</h2>
                        <p className="text-gray-600 text-sm mt-2">Let's Connect through any of the following platforms</p>
                      

                      <div className="mt-4 text-gray-700 text-sm space-y-2 ">
                        <p> <span className="font-semibold">Email:</span><a href="mailto:jyotikakaragi@gmail.com"> jyotikakaragi@gmail.com</a></p>
                        <p> <span className="font-semibold">Location:</span>Belagavi, Karnataka</p>
                        
                      </div>

                      {/* social link with icons */}
 
                      <div className="flex justify-center gap-8 mt-8">
                        <SocialIcon 
                        link="https://github.com/JYOTI-KARAGI"
                        icon={FaGithub}
                        label="GitHub"
                        
                        />

                         <SocialIcon
                        link="https://linkedin.com/in/jyoti-karagi"
                        icon={FaLinkedin}
                        label="LinkedIn"
                        
                        />

                         <SocialIcon
                        link="mailto:jyotikakaragi@gmail.com"
                        icon={FaEnvelope}
                        label="Email"
                        
                        />
                      </div>


                 </div>

                 {/* chat Box */}

                 <div className="bg-white border border-gray-300 rounded-lg overflow-hidden max-w-md mx-auto">
                      <div className= " rounded-lg bg-indigo-400  px-4 py-2 text-xl font-semibold">
                        chat
                      </div>

                    <form //to send data form to my email via FormSubmit
                       action="https://formsubmit.co/jyotikakaragi@gmail.com"
                       method="POST"
                    >   

                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_next" value="https://jyotikaragi-portfolio-site.com/thank-you" />

                    <div className="flex flex-col md:flex-row">
                       <input type="text"
                        name="user_name"
                        placeholder="Name"
                        required
                        className="mx-1 mr-1   mt-1 w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-700 " />
                              
                         <input type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                        className=" mx-1 mr-1 mt-1 w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-700" />
                    </div> 
                         <textarea 
                        name="message"
                        rows="5"
                        placeholder="type your message here"
                        required
                        className=" mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-700" ></textarea>

                        <div>
                            <button type="submit" 
                            className="bg-indigo-400 rounded-xl px-4  py-1 mb-1 hover:bg-indigo-500 transition duration-300">
                                Send</button>
                        </div>
                      </form>

                 </div>
            </div>

        </section>
        
        </>
    );
}

export default Contact ;