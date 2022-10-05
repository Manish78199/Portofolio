import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import s1 from "./Assets/img/Manish_emovebg.png";
import Image from 'react-bootstrap/Image';


export default function Intro() {



  return (
    <>
      <div id="Intro" >
        <div className='Left'>
             <div className="Container">
                 <h2>Hi There i,m </h2>
                 <h1 style={{fontFamily:"Anton",fontSize:"64px"}}>Manish</h1>
                 <h3 style={{color:"red"}}>Web Developer <span ></span></h3>
             </div>
        </div>
        <div  className="Right">
          <div className='ImgCon'>
            <Image src={s1} />
          </div>
        </div>
     





    </div>
    </>
  )
}
