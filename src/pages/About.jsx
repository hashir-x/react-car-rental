import React from 'react'
import ContactFooter from '../components/ContactFooter'
import AboutSection from '../components/AboutSection'
import AboutCompany from '../components/AboutCompany'

function About() {
  return (
    <>
        <AboutSection page={'About'}/>
        <AboutCompany/>
        <ContactFooter/>
    </>
  )
}

export default About