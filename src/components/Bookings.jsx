import React from 'react'

function Bookings() {
  return (
    <>
        <div style={{marginTop:"30rem"}}>
          <form style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"auto",zIndex:"4",position:'absolute',justifyContent:"space-between"}}>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
                <option value="audis">Audi A1 S-Line</option>
                <option value="audiss">Audi A1 S-Line</option>

              </select>
            </div>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
              </select>
            </div>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
              </select>
            </div>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
              </select>
            </div>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
              </select>
            </div>
            <div>
              <label htmlFor="type">Select Your Car Type</label>
              <select name="type" id="type">
                <option value="audi">Audi A1 S-Line</option>
              </select>
            </div>
            <div></div>
          </form>
        </div>
    </>
  )
}

export default Bookings