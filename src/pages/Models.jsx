import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'
import './models.css'
import Cars from '../components/Cars'

function Models() {
  return (
    <>
      <AboutSection page={'Vehicle Models'}/>
      <section style={{marginTop:"5rem",marginBottom:"10rem"}}>
        <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1100px"}}>
          <div className='models'>  
            <Cars/>
          </div>
        </div>
      </section>
      <ContactFooter/>
    </>
  )
}

export default Models