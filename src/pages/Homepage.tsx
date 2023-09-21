import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import { Rules } from '../Components/Sections/Rules'
import BigIdea from '../components/sections/BigIdea'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <BigIdea />
        <Rules />
    </>
  )
}

export default Homepage