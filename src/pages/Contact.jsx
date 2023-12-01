import React, { useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'
import "./contact.css"

function Contact() {

  return (
    <>
      <AboutSection page={'Contact'}/>
      <section style={{marginTop:'7rem'}}>
        <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1100px"}}>
          <div className='contacts-page'>
            <div className='contact-left'>
              <h1 style={{color:"#000",fontWeight:"bolder",fontSize:"3rem"}}>Need additional <br /> information?</h1>
              <p className='mt-4' style={{color:"#706f7b"}}>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience</p>
              <p className='mt-4 contact'><i class="fa-solid fa-phone me-2"></i>(123) 456-7890</p>
              <p className='contact'><i class="fa-regular fa-envelope me-2"></i>carrental@gamil.com</p>
              <p className='contact'><i class="fa-solid fa-location-dot me-2"></i>Belgrade, Serbia</p>
            </div>
            <div className='contact-right'>
              <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' placeholder='Joe Shome'/>
              </div>
              <div>
                <label htmlFor="email">Full Name</label>
                <input type="email" id='email' placeholder='Joe Shome@gmail.com'/>
              </div>
              <div>
                <label htmlFor="about">Tell us about it</label>
                <textarea name="about" id="about" placeholder='Write here...' cols="30" rows="10"></textarea>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter/>
    </>
  )
}

export default Contact