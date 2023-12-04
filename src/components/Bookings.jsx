import React, { useState } from 'react'
import './booking.css'
import { carData } from '../data/cars'
import { placeData } from '../data/places'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingModal from './BookingModal';

function Bookings() {

 const [booking,setBooking] = useState({
  car:"",pickUpLocation:"",dropOfLocation:"",pickUpTime:"",dropOffTime:""
 })

 const carBooking = (e) => {
    e.preventDefault()
    console.log(booking);
  const {car,pickUpLocation,dropOfLocation,pickUpTime,dropOffTime} = booking
  if (!car || !pickUpLocation || !dropOfLocation || !pickUpTime || !dropOffTime){
    toast.error('Please fill all the details!'); 
    }
    else{

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
                  <label className='required-field' htmlFor="type">Select Your Car Type</label>
                  <select value={booking.car} onChange={e=>setBooking({...booking,car:e.target.value})} name="type" id="type" required>
                    {carData?.map((car)=>(
                      <option value={car.name}>{car.name}</option>
                      ))
                      }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field' htmlFor="pick">Pick-up</label>
                  <select value={booking.pickUpLocation} onChange={e=>setBooking({...booking,pickUpLocation:e.target.value})} name="pick" id="pick" required>
                    {placeData?.map((place)=>(
                      <option value={place.pickup}>{place.pickup}</option>
                      ))
                    }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field' htmlFor="drop">Drop-of</label>
                  <select value={booking.dropOfLocation} onChange={e=>setBooking({...booking,dropOfLocation:e.target.value})} name="drop" id="drop" required>
                    {placeData?.map((place)=>(
                      <option value={place.drop}>{place.drop}</option>
                      ))
                      }
                  </select>
                </div>
                {/*  */}
                <div>
                  <label className='required-field' htmlFor="pickup">Pick-up</label>
                  <input value={booking.pickUpTime} onChange={e=>setBooking({...booking,pickUpTime:e.target.value})} type="date" id='pickup' name='pickup'/>
                </div>
                {/*  */}
                <div>
                  <label className='required-field' htmlFor="dropof">Drop-of</label>
                  <input value={booking.dropOffTime} onChange={e=>setBooking({...booking,dropOffTime:e.target.value})} type="date" name="dropof" id="dropof" />
                </div>
                {/*  */}
                <div className='d-flex justify-content-end'>
                  <BookingModal booking={booking}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
    </>
  )
}

export default Bookings