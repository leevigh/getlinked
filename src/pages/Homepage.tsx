import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import { Rules } from '../Components/Sections/Rules'
import BigIdea from '../components/sections/BigIdea'
import TimelineSection from '../components/sections/TimelineSection'

const Homepage = () => {
  return (
    <>
      <div className='w-full lg:max-w-[1500px] lg:mx-auto home-container'>
        {/* <div className='home-container-mobile lg:hidden'></div> */}
        <Navbar />
        <Hero />
      </div>
        <BigIdea />
        <Rules />
        <TimelineSection />
    </>
  )
}

export default Homepage