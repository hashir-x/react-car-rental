import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'
import './testimonial.css'
import Review from '../components/Review'

function Testimonials() {
  return (
    <>
      <AboutSection page={'Testimonials'}/>
      <Review/>
      <ContactFooter/>
    </>
  )
}

export default Testimonials