import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookingModal({booking}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div>
        <button  onClick={handleShow} style={{backgroundColor:"#FF4D30",color:'#fff',fontWeight:'bold',padding:"0.7rem",border:"none",borderRadius:"4px"}}>Search</button>
        <Modal
        show={show}
        size='lg'
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{backgroundColor:"#ff4f30"}} closeButton>
          <Modal.Title style={{fontWeight:"bold",color:"#fff"}} >COMPLETE RESERVATION</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:"0px"}}>
          <div style={{backgroundColor:"#ffeae6",padding:"1rem"}}>
            <p style={{color:"#ff4d30",fontWeight:"bold",fontSize:"1.3rem"}}><i class="fa-solid fa-circle-info"></i> Upon completing this reservation enquiry, you will receive:</p>
            <p style={{color:'#777777',fontSize:"1.2rem"}}>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}}>
            <div style={{display:"flex",flexDirection:"column",padding:"1rem"}}>
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
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    </>
  )
}

export default BookingModal