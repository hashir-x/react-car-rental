import React from 'react'
import './booking.css'

function Bookings() {
  return (
    <>
        <div style={{position:'relative',top:"28rem",zIndex:"4"}}>
          <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
            <div className='form-box shadow'>
              <h3 style={{color:"#000",fontWeight:"bold"}} className='mb-4'>Book a car</h3>
              <form className='form-data'>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Lineeeeeee</option>
                    <option value="audis">Audi A1 S-Line</option>
                    <option value="audiss">Audi A1 S-Line</option>
    
                  </select>
                </div>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Line</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Line</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Line</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Line</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type">
                    <option value="audi">Audi A1 S-Line</option>
                  </select>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Bookings