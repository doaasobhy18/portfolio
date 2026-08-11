import React from "react";
import droob1 from "../assets/droob1.jpg";
import droob2 from "../assets/droob2.jpg";
import droob3 from "../assets/droob3.jpg";
import droob4 from "../assets/droob4.jpg";
import bigdata from "../assets/bigdata.jpg";
import front from "../assets/front.PNG";
import back from "../assets/back.PNG";
import experiance from "../assets/experiance1.PNG";
import recomendation from "../assets/recomnd1.PNG";

function Certificates() {
    return (

        <div>
            <h2 className="text-center mt-8 mb-6 text-[#FFF4E1] text-2xl font-semibold
                 underline underline-offset-4 decoration-[#89D7B7]">
                Certificates
            </h2>

            <div className="flex justify-evenly items-center gap-4 flex-wrap">

                <div className="flex-col justify-center items-center gap-2
                 w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3 ">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-6">Team Work Skills </h3>
                    <a href={droob1} target="_blank" rel="noopener noreferrer">
                        <img src={droob1} alt="Team worrk"
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>

                </div>

                <div className="flex-col justify-center items-center gap-2
                     w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-6">Smart Work Ethics</h3>
                    <a href={droob2} target="_blank" rel="noopener noreferrer">
                        <img src={droob2} alt="smart work"
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>

                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-6">Types Of Insurance</h3>
                    <a href={droob3} target="_blank" rel="noopener noreferrer">
                        <img src={droob3} alt="Insurance"
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>

                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-6">Cyber Security</h3>
                    <a href={droob4} target="_blank" rel="noopener noreferrer">
                        <img src={droob4} alt="Cyber Security"
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>

                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-4">Big Data</h3>
                    <a href={bigdata} target="_blank" rel="noopener noreferrer">
                        <img src={bigdata} alt="Cyber Security"
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>
                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-4">FrontEnd Web Development </h3>
                    <a href={front} target="_blank" rel="noopener noreferrer">
                        <img src={front} alt="frontEnd "
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>
                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-10">BackEnd Web Development </h3>
                    <a href={back} target="_blank" rel="noopener noreferrer">
                        <img src={back} alt="backEnd "
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)]" />
                    </a>
                </div>
                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-4">Experiance in Billing Supervisor  </h3>
                    <a href={experiance} target="_blank" rel="noopener noreferrer">
                        <img src={experiance} alt="experiance "
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)] 
                             object-contain w-full h-40 bg-white " />
                    </a>
                </div>
                <div className="flex-col justify-center items-center gap-2
                      w-[250px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  p-3">

                    <h3 className="text-[#FFF4E1] text-lg font-semibold mt-2 mb-10">Recomendation Latter  </h3>
                    <a href={recomendation} target="_blank" rel="noopener noreferrer">
                        <img src={recomendation} alt="recomendation "
                            className="rounded-lg cursor-pointer shadow-[0_0_7px_7px_rgba(255,180,140,0.45)] 
                            object-contain w-full h-40 bg-white " />
                    </a>
                </div>
            </div>
        </div>

    )

}

export default Certificates;