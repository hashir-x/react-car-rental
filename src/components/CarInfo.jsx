import React, { useState } from 'react'
import { carData } from '../data/cars'

function CarInfo() {

    const [car,setCar] = useState('')

  return (
    <>
        <section>
            <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
                <div className='car-info-heading'>
                    <p>Vehicle Models</p>
                    <h1>Our rental fleet</h1>
                    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
                </div>
                <div className='car-details'>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CarInfo