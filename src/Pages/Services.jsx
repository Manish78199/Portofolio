import React from 'react'
import "./Assets/Style.css"
import Web from "./Assets/img/webDeveloper.webp"
import app from "./Assets/img/appDeveloper.webp"
import digi from "./Assets/img/DigitalMarketing.jpg"
import con from "./Assets/img/consulting.png"

export default function Services() {
  return (
    
    <div className='Services_Con' id="Services">
      <h1>Services</h1>
      <div className="Services_Item_Con">
        <div>

          <h5>Web Development</h5>
          <img src={Web} alt="Web Development" />
          <p>Web Developer As Freelancer</p>

        </div>
        <div> 
          <h5>App Development</h5>
          <img src={app} alt="App development" />
          <p>App Developer As Freelancer</p>
          </div>
        <div> 
          <h5>Consulting</h5>
          <img src={con} alt="Consulting" />
          <p>Give Consulting To Improve Bussiness</p>
          </div>
        <div> 
          <h5>Digital Marketing</h5>
          <img src={digi} alt="Digital Marketing" />
          <p>Marketing</p>
          </div>

      </div>

    </div>
  )
}
