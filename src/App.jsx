
import NavBar from './components/ui/NavBar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Skilles from './pages/Skilles'
import Projects from './pages/Projects'
import Experiance from './pages/Experiance'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import Footer from './components/ui/Footer'


function App() {
 return (
   <div className="min-h-screen flex flex-col bg-[#1A312C]">
     <NavBar />
     <main className="flex-1  bg-[linear-gradient(to_bottom_right,#1A312C,#428475,#89D7B7,#FFF4E1)]">
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/skilles' element={<Skilles />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/experiance' element={<Experiance />} />
         <Route path='/education' element={<Education />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/certificates' element={<Certificates />} />
       </Routes>
       
     </main>
     {/* <Skilles /> */}
     
     <Footer />
      
   </div>
  )
}

export default App
