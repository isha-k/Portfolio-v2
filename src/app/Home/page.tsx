import React from 'react'
import Hero from './Hero'
import Scroller from './Scroller'
import About from './About'
import ContactMe from './ContactMe'
import MySkills from './MySkills'


const Home = () => {
  return (
    <div>
      <section id='hero'>
        <Hero/>
      </section>

      <section id='about'>
        <About/>
      </section>

      <section id='scroller'>
        <Scroller/>
      </section>

      <section id='skills'>
        <MySkills/>
      </section>

      <section id='contact'>
        <ContactMe/>
      </section>
    </div>
  )
}

export default Home
