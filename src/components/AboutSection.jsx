import React from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom';
import Header from './Header';


function AboutSection(props) {
  return (
    <>
        <section>
            <div className='about' style={{backgroundImage:"url(https://car-rental-ten.vercel.app/static/media/heroes-bg.71ab9a13d73de3860763.png)",backgroundPosition:"50%",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:'250px',position:"relative",width:"100%"}}>
                <div className='about-overlay' style={{backgroundColor:"hsla(0,0%,100%,.92)",height:"100%",position:'absolute',right:'0',top:"0",width:"100%"}}></div>
                <div className='containers' style={{margin:"0 auto",maxWidth:"1350px",padding:'0 2.5rem'}}>
                    <div style={{color:"#010103",display:"flex",flexDirection:"column",height:'250px',justifyContent:"center",position:"relative",width:"100%",zIndex:'3'}}>
                        <h3 style={{fontSize:"2.4rem",marginBottom:"0.5rem",color:"#000"}}>{props.page}</h3>
                        <p style={{fontSize:"1.2rem",fontWeight:"600"}}><Link className='home' to={'/'}>Home </Link>/ {props.page}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection