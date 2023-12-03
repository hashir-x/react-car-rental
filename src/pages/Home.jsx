import React from 'react'
import Intro from '../components/Intro'
import AboutSupport from '../components/AboutSupport'
import CarInfo from '../components/CarInfo'
import Tag from '../components/Tag'

function Home() {
  return (
    <>
    <Intro/>
    <div style={{marginTop:"39rem",marginBottom:"5rem"}}>
    <AboutSupport/>
    </div>
    <CarInfo/>
    <Tag/>
    </>
  )
}

export default Home