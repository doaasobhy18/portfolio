import React from "react";

function Experiance() {
    return (

        <div>
            <h2 className="text-center mt-8 text-[#FFF4E1] text-2xl font-semibold
                        underline underline-offset-4 decoration-[#89D7B7]">
                Experiance
            </h2>
             {/* column */}
            <div className="flex flex-col justify-evenly items-center gap-4 py-8">

                {/* experiance detailes */}
                <div className="flex justify-between items-center flex-wrap  gap-4 
                     rounded-2xl p-6 mx-2
                     bg-gradient-to-b from-[#FFF4E1] via-[#89D7B7] to-[#428475]
                     hover:scale-105 transition-all duration-300">
                    
                    <div className="flex flex-col  gap-2" >
                        <h3 className="text-[#1A312C] font-semibold">
                            Content management - Data Entry(Freelancer), Salla website
                        </h3>
                        <p className="text-[#FFF4E1]">
                            • Enter, update, and manage product data and images.<br />
                            • Monitor and update website orders.
                        </p>
                    </div> 

                    {/* date */}
                    <div className="text-[#1A312C] text-md font-semibold">
                        <p>03/2023 – 10/2024</p>
                        <p>Riyadh, Saudi Arabia</p>
                    </div>
                </div> 
                
                {/* experiance detales */}
                <div className="flex justify-between items-center flex-wrap  gap-4 
                     rounded-2xl p-6 mx-2
                     bg-gradient-to-b from-[#FFF4E1] via-[#89D7B7] to-[#428475]
                     hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col  gap-2" >
                        <h3 className="text-[#1A312C] font-semibold">
                            Reception and Accounting,Al-Saeed Derma & Beauty Center.
                        </h3>
                        <p className="text-[#FFF4E1]">
                            • Handle patient inquiries and manage appointment scheduling efficiently.<br />
                            • Prepare and calculate monthly fixed payments for doctors accurately.
                        </p>
                    </div>

                    {/* date */}
                    <div className="text-[#1A312C] text-md font-semibold">
                        <p>07/2021 – 10/2021</p>
                        <p>Zagazig, Egypt</p>
                    </div>
                </div> 
                
                {/* experiance detales */}
                <div className="flex justify-between items-center flex-wrap  gap-4 
                     rounded-2xl p-6 mx-2
                     bg-gradient-to-b from-[#FFF4E1] via-[#89D7B7] to-[#428475]
                     hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col  gap-2" >
                        <h3 className="text-[#1A312C] font-semibold">
                            Billing Supervisor, Aster Sanad Hospital,
                        </h3>
                        <p className="text-[#FFF4E1]">
                            • Update and review daily inpatient billing records (MOH, cash, and insurance).<br />
                            • Coordinate with insurance companies to obtain approvals for surgeries and admission extensions.<br />
                            • Review and finalize billing processes for MOH, cash, and insurance cases accurately.
                        </p>
                    </div>

                    {/* date */}
                    <div className="text-[#1A312C] text-md font-semibold">
                        <p>03/2017 – 03/2021</p>
                        <p>Riyadh, Saudi Arabia</p>
                    </div>
                </div> 


            </div>

        </div>
    )

}

export default Experiance;