import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'
import './testimonial.css'

function Testimonials() {
  return (
    <>
      <AboutSection page={'Testimonials'}/>
      <section style={{marginTop:"5rem",marginBottom:"10rem"}} >
        <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1100px"}}>
          <div style={{padding:"0 auto"}}>
            <h6 style={{textAlign:"center",color:"#000",fontSize:'1.5rem'}}>Reviewed by People</h6>
            <h1 style={{textAlign:"center",color:"#000",fontWeight:"bolder"}}>Client's Testimonials</h1>
            <p style={{textAlign:"center",color:"#777777",marginTop:'1.2rem'}}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
          </div>
          <div className='testimonials'>
            <div className='comments shadow'>
              <p style={{fontSize:"1.4rem",color:"#000",fontWeight:"normal"}}>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
              <div className='d-flex gap-3 align-items-center '>
                <img className='rounded-circle' style={{width:'70px'}} src="https://car-rental-ten.vercel.app/static/media/pfp1.ba7974ae51bb5d44fa69.jpg" alt="" />
                <div>
                  <h5 style={{border:"0.001px",color:"#000"}}>Harry Potter</h5>
                  <p style={{marginBottom:"0.001px"}}>Belgrade</p>
                </div>
              </div>
            </div>
            <div className='comments shadow'>
              <p style={{fontSize:"1.4rem",color:"#000",fontWeight:"normal"}}>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
              <div className='d-flex gap-3 align-items-center '>
                <img className='rounded-circle' style={{width:'70px'}} src="https://car-rental-ten.vercel.app/static/media/pfp2.fd9b1716200244ed8905.jpg" alt="" />
                <div>
                  <h5 style={{border:"0.001px",color:"#000"}}>Ron Weasley</h5>
                  <p style={{marginBottom:"0.001px"}}>Novi Sad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter/>
    </>
  )
}

export default Testimonials