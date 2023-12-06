import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './bookingmodal.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function BookingModal({booking,selectedCar}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const carBooking = (e) => {
    e.preventDefault()
  const {car,pickUpLocation,dropOffLocation,pickUpTime,dropOffTime} = booking
  if (!car || !pickUpLocation || !dropOffLocation || !pickUpTime || !dropOffTime){
    toast.error('Please fill all the details!'); 
    }
    else{
      handleShow()
      console.log(selectedCar);
    }
 }


  return (
    <>
        <div>
        <button  onClick={carBooking} style={{backgroundColor:"#FF4D30",color:'#fff',fontWeight:'bold',padding:"0.7rem",border:"none",borderRadius:"4px"}}>Search</button>
        <Modal style={{width:"100%"}}
        show={show}
        size='lg'
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header style={{backgroundColor:"#ff4f30"}} closeButton>
          <Modal.Title style={{fontWeight:"bold",color:"#fff"}} >COMPLETE RESERVATION</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:"0px"}}>
          <div style={{backgroundColor:"#ffeae6",padding:"1rem"}}>
            <p style={{color:"#ff4d30",fontWeight:"bold",fontSize:"1.3rem"}}><i class="fa-solid fa-circle-info"></i> Upon completing this reservation enquiry, you will receive:</p>
            <p style={{color:'#777777',fontSize:"1.2rem"}}>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
          </div>
          <div className='modal-car-details'>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>
                    <p style={{color:"#ff4d30",fontWeight:"bold",fontSize:"1.2rem"}}>Location & Date</p>
                    <div className='d-flex gap-2'>
                        <i style={{color:"#000"}} class="fa-solid fa-location-dot fs-4"></i>
                        <div>
                            <h6 style={{color:"#000",fontSize:"1.2rem"}}>Pick-Up Date & Time</h6>
                            <p style={{color:"#777777",fontWeight:'bold'}}>{booking.pickUpTime} / <input type="time" /></p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <i style={{color:"#000"}} class="fa-solid fa-location-dot fs-4"></i>
                        <div>
                            <h6 style={{color:"#000",fontSize:"1.2rem"}}>Drop-Off Date & Time</h6>
                            <p style={{color:"#777777",fontWeight:'bold'}}>{booking.dropOffTime} / <input type="time" /></p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <i style={{color:"#000"}} class="fa-solid fa-location-dot fs-4"></i>
                        <div>
                            <h6 style={{color:"#000",fontSize:"1.2rem"}}>Pick Up Location</h6>
                            <p style={{color:"#777777",fontWeight:'bold'}}>{booking.pickUpLocation}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <i style={{color:"#000"}} class="fa-solid fa-location-dot fs-4"></i>
                        <div>
                            <h6 style={{color:"#000",fontSize:"1.2rem"}}>Drop-Off Location</h6>
                            <p style={{color:"#777777",fontWeight:'bold'}}>{booking.dropOffLocation}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column gap-3'>
                <h5 style={{color:"#000",fontWeight:"bold"}}>Car - <span style={{color:"#ff4d30"}}>{booking.car}</span></h5>
                {booking&&
                  <img src="" alt="car-image" />}
            </div>
          </div>
          <hr />
          <div className='personal-info p-2'>
            <h3 style={{color:"#000",fontWeight:'bold'}}>PERSONAL INFORMATION</h3>
            <div className='modal-name'>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">First Name</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='Enter you first name' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Last Name</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='Enter your last name' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
            </div>
            <div className='modal-name'>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Phone Number</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='Enter your phone number' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Age</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='18' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
            </div>
            <div className='d-flex flex-column gap-1'>
              <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Email</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="email" placeholder='Enter your email address' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
            </div>
            <div className='d-flex flex-column gap-1'>
              <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Address</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="email" placeholder='Enter your street address' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
            </div>
            <div className='modal-name'>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">City</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='Enter your city' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"0.25rem",width:"100%"}}>
                <label className='required-field' style={{color:"#777777",fontSize:"1.1rem"}} htmlFor="">Zip Code</label>
                <input style={{backgroundColor:"#dbdbdb",height:"2.4rem",border:'none',borderRadius:"4px"}} type="text" placeholder='Enter your zip code' />
                <span style={{color:"#777777",fontSize:"0.8rem"}}>This field is required</span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#dbdbdb"}}>
          <button style={{color:"#fff",backgroundColor:"#000",border:"none",padding:"0.8rem 1.2rem",fontWeight:"bold",borderRadius:"4px"}} variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button style={{color:"#fff",backgroundColor:"#FF4D30",border:"none",padding:"0.8rem 1.2rem",fontWeight:"bold",borderRadius:"4px"}} variant="primary">Reserve</button>
        </Modal.Footer>
      </Modal>
      </div>
      <ToastContainer/>
    </>
  )
}

export default BookingModal