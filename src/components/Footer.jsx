import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
        <footer style={{width:'100%',padding:"5rem 0rem"}}>
           <div style={{margin:"0rem auto",maxWidth:'1300px',padding:"0rem 2.5rem"}}>
                <div className='footer'>
                    <div>
                        <h3 style={{color:"#000",marginBottom:"1.2rem"}}>Car Rental</h3>
                        <span style={{color:"#706F8B",fontSize:"18px",textAlign:"justify",lineHeight:"1.5rem"}}>we offers a big range of vehicles for all your driving needs. we have the perfect car to meet your needs.</span>
                        <p style={{marginTop:"2rem"}} className='contact'>
                            <i class="fa-solid fa-phone me-2"></i>
                            (123)-456-7890
                        </p>
                        <p className='contact'>
                            <i class="fa-regular fa-envelope me-2"></i>
                            carrental@gmail.com
                        </p>
                    </div>
                    <div style={{color:"#000",gap:"0.5rem"}} className='d-flex flex-column'>
                        <h3 style={{color:"#000"}}>COMPANY</h3>
                        <span className='company'>New York</span>
                        <span className='company'>Careers</span>
                        <span className='company'>Mobile</span>
                        <span className='company'>Blog</span>
                        <span className='company'>How we work</span>
                    </div>
                    <div>
                        <h3 style={{color:"#000",marginBottom:"1rem"}}>WORKING HOURS</h3>
                        <p style={{color:"#000",fontSize:"17px",marginBottom:"0.6rem"}}>Mon - Fri : 9:00AM - 9:00PM</p>
                        <p style={{color:"#000",fontSize:"17px",marginBottom:"0.6rem"}}>Sat - 9:00 : 5PM</p>
                        <p style={{color:"#000",fontSize:"17px"}}>Sun - Closed</p>
                    </div>
                    <div>
                        <h3 style={{color:"#000",marginBottom:"1rem"}}>SUBSCRIPTION</h3>
                        <p style={{color:"#000",fontSize:"17px"}}>Subscribe your Email address for latest news & updates.</p>
                        <div className='d-flex flex-column gap-2'>
                            <input className='input-box' style={{height:"3rem",backgroundColor:"#ececec",border:"None"}} type="text" placeholder='Enter Email Address'/>
                            <button style={{backgroundColor:"#ff4d30",border:"none",padding:"0.7rem",fontWeight:"bolder",color:"#fff",borderRadius:"4px"}}>Submit</button>
                        </div>
                    </div>
                </div>
           </div>
        </footer> 
    </>
  )
}

export default Footer