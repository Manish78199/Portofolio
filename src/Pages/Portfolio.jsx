import React, { useEffect, useState } from 'react'
import "./Assets/Style.css";
import { webApp,mobileApp,feature} from './PortofolioItems';


export default function Portfolio() {

  const list = [
    {
      id: "Feature",
      text: "Feature"
    },

    {
      id: "WebApp",
      text: "Web App"
    },
    {
      id: "MobileApp",
      text: "Mobile App"
    }
  ];

const [isAct,setAct] =useState("Feature");
const [Data,setData]=useState([]);

useEffect(()=>{

switch (isAct) {
  case "Feature":
    setData(feature)
    break;
  case "WebApp":
    setData(webApp)
    break;
 case "MobileApp":
    setData(mobileApp)
    break;
}

},[isAct]);


  return (
    <div className='Portfolio_con' id='Portfolio'>
      <h1 style={{width:"100%"}}>Portfolio</h1>
      <ul>
        {
          list.map((item) => (

            <li key={item.id} className={isAct===item.id?"selectItem":"listItem"} onClick={()=>(setAct(item.id))}>{item.text}</li>
          ))
        }

      </ul>

         
      
      <div className='Container'>
        {Data.map(({text,img})=>(
          <div className='portfolioItemCon'>
          <h5 >{text}</h5>
          <img src={img} alt="" width={250}  height={200}/>
          </div>
        ))
        }
      </div>
 

    </div>
  )
}
