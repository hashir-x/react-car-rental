import React from 'react'
import './car.css'

function Cars() {
  return (
    <>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/audi-box.b3263089022dd5e025dc.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h5 style={{color:"#000"}}>Audi A1</h5>
              </div>
              <div>
                <h5 style={{color:"#000"}}>$89 / day</h5>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div>
              <button>Book Ride</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cars