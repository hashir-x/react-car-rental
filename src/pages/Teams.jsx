import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactFooter from '../components/ContactFooter'
import './team.css'


function Teams() {
  return (
    <>
      <AboutSection page={'Our Team'}/>
      <section style={{marginTop:"5rem"}}>
        <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1100px"}}>
          <div className='team'>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/2.f41d050c1c5b9e59fc22.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Michael Diaz</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Business Owner</p>
            </div>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/6.528b8c60ae315bc6a52a.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Caitlyn Hunt</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Manager</p>
            </div>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/1.4ba4d772bcd6e82365e8.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Luke Miller</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Salesman</p>
            </div>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/4.0e752081a69322c59b26.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Lauren Rivera</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Car Detailist</p>
            </div>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/5.e46bcc8b44d7c4298aea.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Martin Rizz</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Mechanic</p>
            </div>
            <div className='members d-flex flex-column shadow p-2'>
              <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/3.1d499e4b69de7b9e10fb.png" alt="" />
              <h3 className='mt-3' style={{textAlign:'center'}}>Briana Ross</h3>
              <p style={{textAlign:'center',color:"#777777",fontSize:"1.2rem"}}>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter/>
    </>
  )
}

export default Teams