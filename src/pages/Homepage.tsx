import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import { Rules } from '../Components/Sections/Rules'
import BigIdea from '../components/sections/BigIdea'
import TimelineSection from '../components/sections/TimelineSection'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <BigIdea />
        <Rules />
        <TimelineSection />
    </>
  )
}

export default Homepage