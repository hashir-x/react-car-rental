import React from 'react'

function ContactFooter() {
  return (
    <>
        <div style={{width:"100%",height:"200px",backgroundImage:"url(https://car-rental-ten.vercel.app/static/media/book-banner.09fcba44170a314c81a8.png)",position:"relative",display:"flex",marginTop:"7rem"}}>
            <div style={{position:"absolute",height:"100%",opacity:"0.89",right:"0",top:"0",width:"100%",backgroundColor:"#2d2d2d"}}></div>
            <div style={{margin:"0 auto",maxWidth:'133rem',padding:"0 2.5rem"}}>
                <div style={{alignItems:"center",color:"#fff",display:'flex',gap:"5rem",height:"200px",position:'relative',width:"100%",zIndex:"5"}}>
                    <h2 style={{color:"#fff"}}>Book a car by getting in touch with us</h2>
                    <span style={{display:"flex",alignItems:"center",gap:"1rem",whiteSpace:"nowrap"}}>
                        <i class="fa-solid fa-phone" style={{color:"#ff4d30",fontSize:"1.7rem"}}></i>
                        <h3 style={{color:"#ff4d30"}}>(123) 456-7890</h3>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactFooter