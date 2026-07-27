// import { Search, Moon, Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="flex justify-between items-center   bg-[#1A312C] text-[#FFF4E1] py-6 mt-auto px-8 
    //      font-semibold ">
      
    //   <NavLink to="/" className="text-xl bg-gradient-to-r from-[#FFF4E1] to-[#428475] bg-clip-text text-transparent 
    //                      focus:bg-gradient-to-l focus:text-2xl focus:font-bold transition-all duration-300" >
    //     Doaa Sobhy Kamal
    //   </NavLink>
      
    //   <div className="flex gap-6 ">
        
    //     <NavLink to="/skilles" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
    //       Skilles
    //     </NavLink>
    //     <NavLink to="/education" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300" >
    //       Education
    //     </NavLink>
    //     <NavLink to="/certificates" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
    //       Certificates
    //     </NavLink>
    //     <NavLink to="/projects" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
    //       Projects
    //     </NavLink>
    //     <NavLink to="/experiance" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold  transition-all duration-300">
    //       Expericnce
    //     </NavLink>
    //     <NavLink to="/contact" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
    //                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
    //       Contact
    //     </NavLink>
    //     </div>
      
      
    // </nav>
    
    <nav className="bg-[#1A312C] text-[#FFF4E1] px-8 py-6">
      <div className="flex justify-between items-center">

        <NavLink
          to="/"
          className="text-xl font-semibold bg-gradient-to-r from-[#FFF4E1] to-[#428475] bg-clip-text text-transparent
                      focus:bg-gradient-to-l focus:text-2xl focus:font-bold transition-all duration-300"
        >
          Doaa Sobhy Kamal
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold">
          <NavLink to="/skilles" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
       focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Skilles
          </NavLink>
          <NavLink to="/education" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                    focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Education
          </NavLink>
          <NavLink to="/certificates" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Certificates
          </NavLink>
          <NavLink to="/projects" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Projects
          </NavLink>
          <NavLink to="/experiance" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                 focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Experience
          </NavLink>
          <NavLink to="/contact" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
            focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-6 font-semibold">
          <NavLink to="/skilles" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
           focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Skilles
          </NavLink>
          <NavLink to="/education" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
               focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Education
          </NavLink>
          <NavLink to="/certificates" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                   focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Certificates
          </NavLink>
          <NavLink to="/projects" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                  focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Projects
          </NavLink>
          <NavLink to="/experiance" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Experience
          </NavLink>
          <NavLink to="/contact" className="focus:bg-gradient-to-r focus:from-[#FFF4E1] focus:to-[#428475] 
                    focus:bg-clip-text focus:text-transparent focus:text-lg focus:font-bold transition-all duration-300">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}