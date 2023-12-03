import React, { useEffect, useState } from 'react'
import { carData } from '../data/cars'
import './carInfo.css'

function CarInfo() {

    const [selectedCar,setSelectedCar] = useState('')

    const onSelectCar = (car) => {
        setSelectedCar(car)
    }

    useEffect(()=>{
        if(carData.length>0){
            setSelectedCar(carData[0])
        }
    },[])


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
                                <button style={{
                                    background: car === selectedCar ? '#ff4d30' : '#f0f0f0',
                                    color: car === selectedCar ? '#fff' : '#000'}}
                                    onMouseEnter={(event) => {
                                        if (car !== selectedCar) {
                                          // Apply hover effect for unselected cars
                                          event.target.style.background = '#ff4d30';
                                          event.target.style.color = "#fff";
                                          event.target.style.fontWeight = 'bold'
                                        }
                                      }}
                                      onMouseLeave={(event) => {
                                        if (car !== selectedCar) {
                                          // Remove hover effect for unselected cars
                                          event.target.style.background = '#f0f0f0';
                                          event.target.style.color = "#000";
                                          event.target.style.fontWeight = 'bold';
                                        }
                                      }}
                                  onClick={() => onSelectCar(car)} key={car.id} className='car-name'>{car.name}</button>
                            ))
                            }
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-column'>
                            <img className='car-image-main' src={selectedCar.carImage} alt="" />
                            <button style={{color:"#fff",backgroundColor:"#FF4D30",border:"none",padding:"0.8rem 1.2rem",fontWeight:"bold",borderRadius:"4px"}}>Reserve now</button>
                        </div>
                        <div style={{minWidth:"250px"}}>
                            <div className='d-flex flex-column'>
                                <span style={{color:"#fff",backgroundColor:"#FF4D30",border:"none"}} className='text-center border p-2 fs-5'><span className='fw-bold fs-4'>${selectedCar.rent}</span>/ rent per day</span>
                                <div className='spec-details p-2'>
                                    <span>Model</span>
                                    <span>{selectedCar.model}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span>Mark</span>
                                    <span>{selectedCar.mark}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span >Year</span>
                                    <span>{selectedCar.year}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span >Doors</span>
                                    <span>{selectedCar.doors}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span >Ac</span>
                                    <span>{selectedCar.ac}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span >Transmission</span>
                                    <span>{selectedCar.transmission}</span>
                                </div>
                                <div className='spec-details border p-2'>
                                    <span >Fuel</span>
                                    <span>{selectedCar.fuel}</span>
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