import React from 'react'
import Intro from '../components/Intro'
import AboutSupport from '../components/AboutSupport'
import CarInfo from '../components/CarInfo'
import Tag from '../components/Tag'
import Choose from '../components/Choose'
import Review from '../components/Review'
import Questions from '../components/Questions'
import App from '../components/App'

function Home() {
  return (
    <>
    <Intro/>
    <div style={{marginTop:"39rem",marginBottom:"5rem"}}>
    <AboutSupport/>
    </div>
    <CarInfo/>
    <Tag/>
    <Choose/>
    <Review/>
    <Questions/>
    <App/>
    </>
  )
}

export default Home