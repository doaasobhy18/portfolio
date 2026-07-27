import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from "./Contact";
import pic1 from "../assets/pic1.png";
import Skilles from "./Skilles";
import Education from "./Education";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Experiance from "./Experiance";
// import pic2 from "../assets/pic2.jpg";
// import pic3 from "../assets/pic3.jpg";
// import pic4 from "../assets/pic4.jpg";


function Home() {
    return (

        <div className="flex flex-col gap-10 ">
            <div className="flex justify-around items-center flex-wrap  ">
                <div className="text-[#FFF4E1] space-y-8">
                    <h1 className="text-[#89D7B7] text-2xl font-semibold text-center ">
                        Full Stack Web Developer
                    </h1>
                    <p className="p-2">
                        Full  Stack Web Developer specializing in React.js, Node.js, Express.js, and MongoDB <br />
                        Passionate about creating responsive, scalable, and user-friendly web applications <br />
                        with clean and efficient code.
                    </p>
                    <div className="flex  justify-evenly flex-wrap gap-2">
                        <NavLink to="/contact" className="bg-[#428475] w-40 h-10 text-center pt-2 
                            shadow-[0_0_10px_5px_rgba(255,180,140,0.45)] border-[#1A312C] rounded-xl
                            hover:bg-[#89D7B7] transition-all duration-500 ">
                            Contact
                        </NavLink>
                        <a
                            href="/Doaa-CV.pdf"
                            download="Doaa-CV.pdf"
                            className="bg-[#428475] w-40 h-10 text-center pt-2 
                            shadow-[0_0_10px_5px_rgba(255,180,140,0.45)] border-[#1A312C] rounded-xl
                            hover:bg-[#89D7B7] transition-all duration-500 "
                        >
                            Download CV
                        </a>

                    </div>

                    <div className="flex justify-evenly items-center gap-5 mt-8 flex-wrap">
                        <a
                            href="https://www.linkedin.com/in/doaa-sobhi-454366204/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://github.com/doaasobhy18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaGithub size={22} />
                        </a>
                    </div>
                </div>

                {/* image side */}
                <div className="mt-8 ">
                    <img src={pic1} alt="" className="size-100 rounded-full  
                object-cover
                transition-all
                 duration-500
                 hover:scale-105
                 shadow-[0_0_80px_20px_rgba(255,180,140,0.45)]
                 hover:shadow-[0_0_120px_35px_rgba(255,180,140,0.7)]" />
                </div>
            </div>
            <Skilles />
            <Education />
            <Certificates />
            <Projects />
            <Experiance />
            <Contact />
        </div>    

    )

}

export default Home;