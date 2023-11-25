import React from 'react'
import ContactFooter from '../components/ContactFooter'
import AboutSection from '../components/AboutSection'
import AboutCompany from '../components/AboutCompany'
import AboutSupport from '../components/AboutSupport'

function About() {
  return (
    <>
        <AboutSection page={'About'}/>
        <AboutCompany/>
        <AboutSupport/>
        <ContactFooter/>
    </>
  )
}

export default About