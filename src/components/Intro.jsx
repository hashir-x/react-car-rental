import React from 'react'
import './intro.css'

function Intro() {
  return (
    <>
        <section>
          <div style={{position:"relative",paddingTop:"5rem"}}>
            <img style={{position:"absolute",top:"0",right:"0",zIndex:"1"}} src="https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png" alt="" />
            <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1200px",display:"flex"}}>
              <div style={{position:"absolute",zIndex:"3",maxWidth:"500px"}}>
                <p style={{fontWeight:"bold",fontSize:"1.4rem",color:"#000"}}>Plan you trip now</p>
                <h1 style={{color:"#000",fontSize:"3.6rem",fontWeight:"bolder"}}>Save <span style={{color:"#ff4d30"}}>big</span> with our car rental</h1>
                <p style={{color:"#706f7b",marginTop:"2rem"}}>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className='d-flex gap-4'>
                  <button style={{border:"none",backgroundColor:"#ff4d30",color:"#fff",fontWeight:"bold",padding:"1rem 2rem",borderRadius:"4px"}}>Book Ride<i class="fa-regular fa-circle-check ms-2"></i></button>
                  <button style={{border:"none",backgroundColor:"#000",color:"#fff",fontWeight:"bold",padding:"1rem 2rem",borderRadius:"4px"}}>Learn More<i class="fa-solid fa-angle-right ms-2"></i></button>
                </div>
              </div>
              <img style={{position:"absolute",top:"5rem",right:"3%",zIndex:"2",width:"65%",minWidth:'400px'}} src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png" alt="" />
            </div>
          </div>
        </section>
    </>
  )
}

export default Intro