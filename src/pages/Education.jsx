import React from "react";
import grad1 from "../assets/gradu-cer.jpg"

function Education() {
    return (

         <div>
                    <h2 className="text-center mt-8 text-[#FFF4E1] text-2xl font-semibold
                        underline underline-offset-4 decoration-[#89D7B7]">
                       Education
                    </h2>
                     
                    <div className="flex justify-center items-center flex-wrap gap-8 mt-8 text-center">
                        
                        <div className="w-[450px] h-[300px] rounded-xl bg-[rgba(66,132,117,0.2)]  
                           p-3 shadow-[0_0_20px_10px_rgba(137,215,183,0.25)] m-2 ">
                            <h3 className="text-[#89D7B7] text-lg font-bold mt-2">
                              Bachelor of Information and Computer (IT)
                            </h3>
                            <div className="flex justify-evenly items-center gap-8 flex-wrap mt-4 p-2 
                                  text-[#FFF4E1]">
                                <div className="flex items-center gap-1  rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                                  Graduated with Grade: Very Good
                                </div>
                                {/* <img src={grad1} alt="graduated img" className="w-30 h-50"/>  */}
                                
                                <div className="flex items-center gap-1 rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                                  Graduation Project : "Application for Teaching Reading and Writing to Young Children",
                                  Grade: Excellent
                                </div>                         
        
                            </div>
        
                        </div>
                        <div className="w-[450px] h-[300px]  rounded-xl bg-[rgba(66,132,117,0.2)]
                                      p-3 shadow-[0_0_20px_10px_rgba(137,215,183,0.25)] m-2">
                            
                            <h3 className="text-[#89D7B7] text-lg font-bold mt-2">
                              Diploma at SEF Academy
                            </h3>
                            <div className="flex justify-evenly items-center gap-8 flex-wrap mt-4 p-2 
                                 text-[#FFF4E1]">
                                <div className="flex items-center gap-1  rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                                   Front-End Web Development – Grade: 99.27%
                                </div>
                                <div className="flex items-center gap-1  rounded-full p-2 bg-[rgba(66,132,117,0.5)]">
                                   Back-End Web Development – Grade: 98.07%
                                </div>
                                
                                 
                            </div>
                        </div>
                    </div>
        
                </div>
    )

}

export default Education;