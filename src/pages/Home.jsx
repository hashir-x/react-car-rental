import React from 'react'
import Intro from '../components/Intro'
import AboutSupport from '../components/AboutSupport'
import CarInfo from '../components/CarInfo'

function Home() {
  return (
    <>
    <Intro/>
    <div style={{marginTop:"39rem",marginBottom:"5rem"}}>
    <AboutSupport/>
    </div>
    <CarInfo/>
    </>
  )
}

export default Home