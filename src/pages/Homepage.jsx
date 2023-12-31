import React from 'react'
import Criteria from '../Components/Sections/Criteria'
import Prizes from '../components/sections/Prizes'
import Partners from '../components/sections/Partners'
import Privacy from '../components/sections/Privacy'
import Footer from '../components/sections/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import { Rules } from '../Components/Sections/Rules'
import BigIdea from '../components/sections/BigIdea'
import TimelineSection from '../components/sections/TimelineSection'
import Faqs from '../components/sections/Faqs'

const Homepage = () => {
  return (
    <>
      <div className=' lg:max-w-[1500px] lg:mx-auto home-container'>
        {/* <div className='home-container-mobile lg:hidden'></div> */}
        <Navbar />
        <Hero />
      </div>
        <BigIdea />
        <Rules />
        <Criteria />
        <TimelineSection />
        <div>
            <Faqs />
            < Prizes />
            <Partners />
            <Privacy />
            <Footer />
        </div>
    </>
  )
}

export default Homepage