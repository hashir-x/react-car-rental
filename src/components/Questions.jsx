import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Questions() {
  return (
    <>
        <section>
            <div style={{backgroundImage:"url(https://car-rental-ten.vercel.app/static/media/car.5e21eedbea3280311aff.png)",backgroundRepeat:"no-repeat",backgroundSize:"auto",padding:"5rem 0",backgroundPosition:"0 70%"}}>
                <div  style={{margin:'0 auto',padding:'0 2.5rem',maxWidth:"1350px"}}>
                    <div className='d-flex flex-column'>
                        <div style={{margin:"0 auto",width:"800px"}} className='d-flex flex-column text-center'>
                            <p style={{fontSize:'1.4rem',fontWeight:"bold",color:"#000",marginBottom:"0.2rem"}}>FAQ</p>
                            <h1 style={{color:"#000",fontWeight:"bold",marginBottom:"1rem"}}>Frequently Asked Questions</h1>
                            <p style={{color:"#706f7b",fontSize:"1.1rem"}}>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                        </div>
                        <div style={{maxWidth:"800px",margin:"0 auto"}} className='shadow d-flex flex-column w-100'>
                            <Accordion  style={{maxWidth:"800px"}} defaultActiveKey="0">
                                <Accordion.Item  eventKey="0">
                                <Accordion.Header>1. What is special about comparing rental car deals?</Accordion.Header>
                                <Accordion.Body>
                                Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2. How do I find the car rental deals?</Accordion.Header>
                                    <Accordion.Body>
                                    You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>3. How do I find such low rental car prices?</Accordion.Header>
                                    <Accordion.Body>
                                    Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Questions