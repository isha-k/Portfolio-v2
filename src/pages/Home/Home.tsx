import React from 'react'
import Hero from './Hero'
import Scroller from './Scroller'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Projects/>
        <ContactMe/>
        {/* <Scroller/> */}
    </div>
  )
}

export default Home
