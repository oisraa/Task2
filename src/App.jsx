import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Video from './components/Video'
import Boxs from './components/Boxs'
import BestDeal from './components/BestDeal'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero />
   <Featured/>
   <Video/>
   <Boxs/>
   <BestDeal/>
   <Properties/>
   <Contact/>
   <Footer/>

   </>
  )
}

export default App