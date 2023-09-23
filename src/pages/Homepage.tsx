import React from 'react'
import { Rules } from '../Components/Sections/Rules'
import Criteria from '../Components/Sections/Criteria'
import Prizes from '../components/sections/Prizes'
import Partners from '../components/sections/Partners'
import Privacy from '../components/sections/Privacy'
import Footer from '../components/sections/Footer'

const Homepage = () => {
  return (
    <>
      <div>
        < Rules />
        <Criteria />
        < Prizes />
        <Partners />
        <Privacy />
        <Footer />
      </div>
    </>
  )
}

export default Homepage