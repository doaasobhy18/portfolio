import React from "react";
// import accessoryST from "../assets/vidoes/accessoryST.mp4";
// import egypttravel from "../assets/vidoes/egypttravel.mp4";
// import skinglow from "../assets/vidoes/skinglow.mp4"
// import mybags from "../assets/vidoes/mybags.mp4"
// import degitalpro from "../assets/vidoes/degitalpro.mp4"
import accessory from "../assets/accessory.PNG"
import travel from "../assets/travel.PNG"
import skin from "../assets/skin.PNG"
import degital from "../assets/degital.PNG"
import bages from "../assets/bags.PNG"
import { FaGithub } from "react-icons/fa";
import { Code2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function Projects() {
    return (

        <div>
            <h2 className="text-center mt-8 mb-6 text-[#FFF4E1] text-2xl font-semibold
                 underline underline-offset-4 decoration-[#89D7B7]">
                Projects
            </h2>
             
            {/* Project section */}
            <div className="flex justify-around items-center gap-4 flex-wrap mx-8">
                <div>
                    <h3 className="text-[#89D7B7] text-xl font-bold py-2">AccessoryST</h3>
                    <p className=" text-[#FFF4E1] pb-1 mb-2"> 
                         Done at :07/2025 – 08/2025 <br />
                        • Built an accessories e-commerce website using HTML, CSS3, JavaScript, and Bootstrap.<br />
                        • Designed a responsive and user-friendly interface to enhance the shopping experience.
                    </p>
                    <div className="flex justify-evenly gap-2 ">
                        <NavLink to="https://doaasobhy18.github.io/project4/" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                             hover:bg-[rgba(66,132,117,0.3)]
                             hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300 ">
                            <FaGithub size={18} />  See the Project
                        </NavLink>

                        <NavLink to="https://github.com/doaasobhy18/project4" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                            hover:bg-[rgba(66,132,117,0.3)]
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Code2 size={18} /> The Project Code
                        </NavLink>
                    </div>
                </div> 
                
                {/* Project img */}
                <div className="flex-1 p-6">
                    {/* <video src={accessoryST} className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" controls>

                    </video> */}
                    <img src={accessory} alt="accessory img"
                        className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]"/>
                </div>
            </div> 

            {/* Project section */}
            <div className="flex justify-around items-center gap-4 flex-wrap mx-8">
                <div>
                    <h3 className="text-[#89D7B7] text-xl font-bold py-2">
                        Egypt Travel Website
                    </h3>
                    <p className=" text-[#FFF4E1] pb-1 mb-2">
                        Done at : 06/2025 – 07/2025 <br />
                        • Built "Egypt Travel" website using Bootstrap, HTML5 and CSS3.<br />
                        • Created a responsive user interface , optimized performance & smooth user
                         experience.
                    </p>
                    <div className="flex justify-evenly gap-2 ">
                        <NavLink to="https://doaasobhy18.github.io/project3/" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                             hover:bg-[rgba(66,132,117,0.3)]
                             hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300 ">
                            <FaGithub size={18} />  See the Project
                        </NavLink>

                        <NavLink to="https://github.com/doaasobhy18/project3" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                            hover:bg-[rgba(66,132,117,0.3)]
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Code2 size={18} /> The Project Code
                        </NavLink>
                    </div>
                </div>

                {/* Project img */}
                <div className="flex-1 p-6">
                    {/* <video src={egypttravel} className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" controls>

                    </video> */}
                    <img src={travel} alt="travel img"
                        className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]"/>
                </div>
            </div>

            {/* Project section */}
            <div className="flex justify-around items-center gap-4 flex-wrap mx-8">
                <div>
                    <h3 className="text-[#89D7B7] text-xl font-bold py-2">
                        Skin Glow Web
                    </h3>
                    <p className=" text-[#FFF4E1] pb-1 mb-2">
                        Done at : 04/2025 – 05/2025 <br />
                        • Built "Skin Glow" website using HTML,HTML5, CSS and CSS3.<br />
                        • Designed UI and ensured a smooth , user-friendly experience in across different devices.
                    </p>
                    <div className="flex justify-evenly gap-2 ">
                        <NavLink to="https://doaasobhy18.github.io/project2/" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                             hover:bg-[rgba(66,132,117,0.3)]
                             hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300 ">
                            <FaGithub size={18} />  See the Project
                        </NavLink>

                        <NavLink to="https://github.com/doaasobhy18/project2" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                            hover:bg-[rgba(66,132,117,0.3)]
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Code2 size={18} /> The Project Code
                        </NavLink>
                    </div>
                </div>

                {/* Project img */}
                <div className="flex-1 p-6">
                    {/* <video src={skinglow} className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" controls>

                    </video> */}
                    <img src={skin} alt="skin img"
                        className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" />
                </div>
            </div>

            {/* Project section */}
            <div className="flex justify-around items-center gap-4 flex-wrap mx-8">
                <div>
                    <h3 className="text-[#89D7B7] text-xl font-bold py-2">
                        Degital Pro Website
                    </h3>
                    <p className=" text-[#FFF4E1] pb-1 mb-2">
                        Done at : 02/2026 – 03/2026 <br />
                        • Built "Degital Pro" website using HTML,HTML5, and TailwindV4.<br />
                        • Developed  modern and fully responsive web with clean UI design reusable components.
                    </p>
                    <div className="flex justify-evenly gap-2 ">
                        <NavLink to="https://doaasobhy18.github.io/TailwindV4-Proj1/" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                             hover:bg-[rgba(66,132,117,0.3)]
                             hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300 ">
                            <FaGithub size={18} />  See the Project
                        </NavLink>

                        <NavLink to="https://github.com/doaasobhy18/TailwindV4-Proj1" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                            hover:bg-[rgba(66,132,117,0.3)]
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Code2 size={18} /> The Project Code
                        </NavLink>
                    </div>
                </div>

                {/* Project img */}
                <div className="flex-1 p-6">
                    {/* <video src={degitalpro} className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" controls>

                    </video> */}
                    <img src={degital} alt="degital img"
                        className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" />
                </div>
            </div>

            {/* Project section */}
            <div className="flex justify-around items-center gap-4 flex-wrap mx-8">
                <div>
                    <h3 className="text-[#89D7B7] text-xl font-bold py-2">
                        My Bags
                    </h3>
                    <p className=" text-[#FFF4E1] pb-1 mb-2">
                        Done at : 02/2026 – 03/2026 <br />
                        • Built "My Bags" website using HTML,HTML5,CSS,CSS3,React and Bootstrap.<br />
                        • Developed  React web application , dynamic data and user-friendly interface in different    <br />
                         screen sizes.
                    </p>
                    <div className="flex justify-evenly gap-2 ">
                        {/* <NavLink to="https://doaasobhy18.github.io/TailwindV4-Proj1/" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                             hover:bg-[rgba(66,132,117,0.3)]
                             hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300 ">
                            <FaGithub size={18} />  See the Project
                        </NavLink> */}

                        <NavLink to="https://github.com/doaasobhy18/proj5" target="_blank" rel="noopener noreferrer"
                            className="text-[#FFF4E1] flex items-center gap-1 
                            rounded-full p-2 bg-[rgba(66,132,117,0.5)]
                            hover:bg-[rgba(66,132,117,0.3)]
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Code2 size={18} /> The Project Code
                        </NavLink>
                    </div>
                </div>

                {/* Project img */}
                <div className="flex-1 p-6">
                    {/* <video src={mybags} className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" controls>

                    </video> */}
                    <img src={bages} alt="bags img"
                        className=" rounded-xl shadow-[0_0_10px_10px_rgba(137,215,183,0.25)]" />
                </div>
            </div>

        </div>
    )

}

export default Projects;