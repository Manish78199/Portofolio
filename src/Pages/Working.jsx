import React from 'react'
import { IconContext } from "react-icons";
import "./Assets/Style.css"
import { useEffect, useState } from 'react';
import w1 from "./Assets/img/work1.jpg"
import w2 from "./Assets/img/work2.jpg"
import w3 from "./Assets/img/work3.jpg"

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import Carousel from 'react-bootstrap/Carousel'

export default function Working() {

  const [active,setActive]=useState(1);


  const data = [
    {
      id: 1,
      img: w1
    },
    {
      id: 2,
      img: w2
    }, 
    {
      id: 3,
      img: w3
    }

  ];



  return (
    <div className="Working_con" id="Working">
      <h1 style={{ padding: "10px 0px", fontWeight: "bold" }}>Working</h1>
      <div class="Slide">

        <IconContext.Provider value={{className: "Slides_Btn" }}>
          <MdArrowBackIos onClick={()=>(setActive(active===1?3:active-1))} />
        </IconContext.Provider>
        <div className="Slide-Con">


          {
            data.map(({ id, img }) => (
            <div  id={id} className={id===active?"ActiveSlide Slides-Item":"Slides-Item"}>
            <div className='Left_slides'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repudiandae ratione reprehenderit iste optio beatae amet? Consequuntur sit quod quas voluptates, dicta tempore?
            </div>
            <div className='Right_slides'> 
            <img
              className="Slide_img"
              src={img}
              alt="Third slide"
              
            />
            </div>
            </div>
            
            ))
          }


        </div>
        <IconContext.Provider value={{  className: "Slides_Btn" }} >
          <MdArrowForwardIos onClick={()=>(setActive(active===3?1:active+1))}/>
        </IconContext.Provider>
      </div>
    </div>
  );



}
