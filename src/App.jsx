import React from 'react'
import './App.css'
import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
function App() {

  const [Loaded, setLoaded] = useState(false)
  const [menu, setmenu] = useState(false)

  return (
    <div>
      {!Loaded &&  <LoadingScreen onComplete={()=>{
        setLoaded(true)
      }} />}

      <div className={ ` min-h-screen transition-opacity duration-700 ${Loaded? "opacity-100":"opacity-0"} bg-black text-gray-100`} >

        <NavBar menu={menu} setmenu= {setmenu} />
        <MobileMenu menu={menu} setmenu= {setmenu} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>

      </div>

    </div>
  )
}

export default App;
