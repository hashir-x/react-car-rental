import React from 'react'
import './car.css'
import { carData } from '../data/cars'

function Cars() {

  return (
    <>
        { carData.map((item)=>(
          <div className='carModels'>
          <div>
            <img className='car-image' src={item?.carImage} alt="car image" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>{item.model}</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>{item?.rent}/ day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>{item?.fuel} <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>{item?.transmission} <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        ))
        }
    </>
  )
}

export default Cars