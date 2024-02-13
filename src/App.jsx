import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marqee from './components/Marqee'
import Approach from './components/Approach'
import Playscreen from './components/Playscreen'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Marqee/>
      <Approach/>
      <Playscreen/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App