import React from 'react'
import Hero from './Hero'
import Scroller from './Scroller'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'
import MySkills from './MySkills'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Scroller/>
        <MySkills/>
        <ContactMe/>
    </div>
  )
}

export default Home
