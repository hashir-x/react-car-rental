import React from 'react'
import './booking.css'
import { carData } from '../data/cars'
import { placeData } from '../data/places'

function Bookings() {
  return (
    <>
        <div style={{position:'relative',top:"28rem",zIndex:"4"}}>
          <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
            <div className='form-box shadow'>
              <h3 style={{color:"#000",fontWeight:"bold"}} className='mb-4'>Book a car</h3>
              <form className='form-data'>
                <div>
                  <label className='required-field' htmlFor="type">Select Your Car Type</label>
                  <select name="type" id="type" required>
                    {carData?.map((car)=>(
                      <option value="audi">{car.name}</option>
                      ))
                      }
                  </select>
                </div>
                <div>
                  <label className='required-field' htmlFor="pick">Pick-up</label>
                  <select name="pick" id="pick" required>
                    {placeData?.map((place)=>(
                      <option value="audi">{place.pickup}</option>
                      ))
                    }
                  </select>
                </div>
                <div>
                  <label className='required-field' htmlFor="drop">Drop-of</label>
                  <select name="drop" id="drop" required>
                    {placeData?.map((place)=>(
                      <option value="audi">{place.drop}</option>
                      ))
                      }
                  </select>
                </div>
                <div>
                  <label className='required-field' htmlFor="pickup">Pick-up</label>
                  <input type="date" id='pickup' name='pickup'/>
                </div>
                <div>
                  <label className='required-field' htmlFor="dropof">Drop-of</label>
                  <input type="date" name="dropof" id="dropof" />
                </div>
                <div className='d-flex justify-content-end'>
                  <button style={{backgroundColor:"#FF4D30",color:'#fff',fontWeight:'bold',padding:"0.7rem",border:"none",borderRadius:"4px"}}>Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Bookings