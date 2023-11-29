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
                <h4 style={{color:"#000"}}>Audi A1</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/bmw-box.185d90ec902e13d80eea.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>BMW 320</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/benz-box.a9aa68ef5eb5af1f342b.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>Mercedes</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/passat-box.c78021e11cf230128bcc.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>VW Passat</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/toyota-box.8968332b7901c6bb183c.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>Toyota Camry</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
        <div className='carModels'>
          <div>
            <img className='img-fluid' src="https://car-rental-ten.vercel.app/static/media/golf6-box.1982e958d19e04048c14.png" alt="" />
          </div>
          <div style={{padding:"1rem"}}>
            <div className='car-second'>
              <div>
                <h4 style={{color:"#000"}}>Golf 6</h4>
              </div>
              <div>
                <h4 style={{color:"#000"}}>$89 / day</h4>
              </div>
            </div>
            <div className='car-third'>
              <span>Petrol <i class="fa-solid fa-gas-pump ms-1"></i></span>
              <span>Automatic <i class="fa-solid fa-car ms-1"></i></span>
            </div>
            <hr />
            <div className="car-button">
              <button className='book-ride'>Book Ride</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cars