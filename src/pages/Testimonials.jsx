import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'


function Testimonials() {
  return (
    <>
      <AboutSection page={'Testimonials'}/>
      <section style={{marginTop:"5rem"}} >
        <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1100px"}}>
          <div style={{padding:"0 auto"}}>
            <h6 style={{textAlign:"center",color:"#000",fontSize:'1.5rem'}}>Reviewed by People</h6>
            <h1 style={{textAlign:"center",color:"#000",fontWeight:"bolder"}}>Client's Testimonials</h1>
            <p style={{textAlign:"center",color:"#777777"}}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
          </div>
          <div className=''>

          </div>
        </div>
      </section>
      <ContactFooter/>
    </>
  )
}

export default Testimonials