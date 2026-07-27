import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className="bg-[#1A312C] text-[#FFF4E1]  py-6 mt-auto">
            <div className="container mx-auto text-center flex justify-between">
                <p>
                    Doaa Portfilio © 2026 All rights reserved.
                </p>
                <div className="flex gap-2">
                    <a href="https://github.com/doaasobhy18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center
                         rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white
                          hover:scale-110 transition-all duration-300" >
                                            
                       <FaGithub size={18} />
                    </a>
                    <a href="https://github.com/doaasobhy18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center
                         rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white
                          hover:scale-110 transition-all duration-300" >

                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://wa.me/201272648832"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center
                         rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white
                          hover:scale-110 transition-all duration-300" >

                        <FaWhatsapp size={18} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=doaasophe483@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center
                         rounded-full border-2 border-[#6bc1b3] text-[#6bc1b3] hover:bg-[#6bc1b3] hover:text-white
                          hover:scale-110 transition-all duration-300" >

                        <SiGmail size={18} />
                    </a>
                </div>
            </div>
        </footer>

       
    )

}

export default Footer;