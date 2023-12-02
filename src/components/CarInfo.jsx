import React, { useState } from 'react'
import { carData } from '../data/cars'
import './carInfo.css'

function CarInfo() {

    const [car,setCar] = useState('')

    const selectCar = () => {
        
    }


  return (
    <>
        <section>
            <div style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
               <div className='d-flex flex-column align-items-center'>
                    <div className='car-info-heading'>
                        <p style={{color:"#000",fontWeight:"bold",fontSize:"1.4rem"}}>Vehicle Models</p>
                        <h1 style={{color:"#000",fontWeight:"bold"}}>Our rental fleet</h1>
                        <p style={{textAlign:"center"}}>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
                    </div>
                    <div className='car-details'>
                        <div className='cars-name-side'>
                            {carData?.map((car)=>(
                                <button onClick={selectCar} value={car.name} className='car-name'>{car.name}</button>
                            ))
                            }
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg" alt="" />
                        </div>
                        <div style={{minWidth:"250px"}}>
                            <div className='d-flex flex-column'>
                                <span style={{color:"#fff",backgroundColor:"#FF4D30",border:"none"}} className='text-center border p-2 fs-5'><span className='fw-bold fs-4'>$45 </span>/ rent per day</span>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span style={{width:"50px"}}>Model</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Mark</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Year</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Doors</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Ac</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Transmission</span>|
                                    <span>Audi</span>
                                </div>
                                <div className='d-flex justify-content-between border p-2'>
                                    <span  style={{width:"50px"}}>Fuel</span>|
                                    <span>Audi</span>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default CarInfo