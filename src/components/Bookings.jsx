import React, { useState } from 'react'
import './booking.css'
import { carData } from '../data/cars'
import { placeData } from '../data/places'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bookings() {

 const [booking,setBooking] = useState({
  car:"",pickUpLocation:"",dropOfLocation:"",pickUpTime:"",dropOfTime:""
 })

 const carBooking = (e) => {
  e.preventDefault()
  const {car,pickUpLocation,dropOfLocation,pickUpTime,dropOfTime} = booking
  console.log(booking);
  if (!car || !pickUpLocation || !dropOfLocation || !pickUpTime || !dropOfTime){
    alert("Please fill in all data")
  }
 }

  return (
    <>
        <div style={{position:'relative',top:"28rem",zIndex:"4"}}>
          <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
            <div className='form-box shadow'>
              <h3 style={{color:"#000",fontWeight:"bold"}} className='mb-4'>Book a car</h3>
              <form onSubmit={carBooking} className='form-data'>
                {/*  */}
                <div>
                  <label className='required-field1' htmlFor="type">Select Your Car Type</label>
                  <select value={booking.car} onChange={e=>setBooking({...booking,car:e.target.value})} name="type" id="type" required>
                    {carData?.map((car)=>(
                      <option value={car.name}>{car.name}</option>
                      ))
                      }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field2' htmlFor="pick">Pick-up</label>
                  <select value={booking.pickUpLocation} onChange={e=>setBooking({...booking,pickUpLocation:e.target.value})} name="pick" id="pick" required>
                    {placeData?.map((place)=>(
                      <option value={place.pickup}>{place.pickup}</option>
                      ))
                    }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field3' htmlFor="drop">Drop-of</label>
                  <select value={booking.dropOfLocation} onChange={e=>setBooking({...booking,dropOfLocation:e.target.value})} name="drop" id="drop" required>
                    {placeData?.map((place)=>(
                      <option value={place.drop}>{place.drop}</option>
                      ))
                      }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field4' htmlFor="pickup">Pick-up</label>
                  <input value={booking.pickUpTime} onChange={e=>setBooking({...booking,pickUpTime:e.target.value})} type="date" id='pickup' name='pickup'/>
                </div>
                {/*  */}
                <div>
                  <label className='required-field5' htmlFor="dropof">Drop-of</label>
                  <input value={booking.dropOfTime} onChange={e=>setBooking({...booking,dropOfTime:e.target.value})} type="date" name="dropof" id="dropof" />
                </div>
                {/*  */}
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