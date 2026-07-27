import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap } from "react-icons/si";
import { Smartphone } from "lucide-react"; 


function Skilles() {
    return (

        <div>
            <h2 className="text-center mt-8 text-[#FFF4E1] text-2xl font-semibold
                underline underline-offset-4 decoration-[#89D7B7]">
                Skilles
            </h2>
             
            <div className="flex justify-center items-center flex-wrap gap-8 mt-8 text-center">
                
                <div className="w-[450px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  
                   p-3 shadow-[0_0_20px_10px_rgba(255,180,140,0.45)] m-2 ">
                    <h3 className="text-[#89D7B7] text-lg font-bold mt-2">
                        FrontEnd Development
                    </h3>
                    <div className="flex justify-evenly items-center gap-8 flex-wrap mt-4 p-2 
                         font-semibold text-[#FFF4E1]">
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <FaHtml5 /> Html,Html5
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <FaCss3Alt />  CSS,CSS3
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <SiJavascript /> JS
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <SiTailwindcss /> TailwindV4
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <SiBootstrap />  Bootstrap
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <FaReact />  React.js
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <Smartphone />Responsive Design
                        </div>

                    </div>

                </div>
                <div className="w-[450px] h-[300px]  rounded-xl bg-[rgba(66,132,117,0.2)]
                              p-3 shadow-[0_0_20px_10px_rgba(255,180,140,0.45)] m-2">
                    
                    <h3 className="text-[#89D7B7] text-lg font-bold mt-2">
                        BackEnd Development
                    </h3>
                    <div className="flex justify-evenly items-center gap-8 flex-wrap mt-4 p-2 
                         font-semibold text-[#FFF4E1]">
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <FaNodeJs />  Node.js
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <SiExpress />  Express.js
                        </div>
                        <div className="flex items-center gap-1 border border-[#FFF4E1] rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                            <SiMongodb />  MongoDB
                        </div>
                         
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Skilles;