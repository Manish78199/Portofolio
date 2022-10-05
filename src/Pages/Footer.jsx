import React from 'react'

import { IconContext } from "react-icons";
import { FiFacebook } from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import "./Assets/Style.css"
export default function Footer(props) {

  // const FoSt={
  //   backgroundColor:"darkBlue"
  // };

  return (
    <>
      <div style={{
        backgroundColor: "#060744",
        display: "flex",
        flexDirection: "row",
        position:"relative",
        top:"70px",
        color: "white"
      }}
        id="footCon"

      >
        <div className='FollowUs' >
        <div>

        </div>
        <p style={{textAlign:"left"}}><span style={{fontFamily:"Sacramento",fontSize:"18px"}}>{props.Brand}</span> Help to Grow Your Bussines With Consulting ,Web development And Software Development Services</p>
         
         <div style={{display:"flex",flexDirection:"row",columnGap:"10px"}} className="SocialLinkCon">
          <IconContext.Provider value={{ size: "20px", className: "Social_Link" }} >
             <a href="https://www.facebook.com/profile.php?id=100028924279690" title='Facebook'><FiFacebook /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
            <a href="https://www.instagram.com/manish_067/" title='Instagram'> <FiInstagram /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
            <a href="https://www.linkedin.com/in/manish-kumar-839a471bb/" title='Linkedin'> <FiLinkedin /></a>
          </IconContext.Provider>
           <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
            <a href="#" title='Twitter'> <FiTwitter /></a>
          </IconContext.Provider>
         </div>


        </div>
      

        <div style={{ textAlign: "left" }}>
           <span >Quik Link</span>
          <br />
          <ul>
            <li> <Link to="/About" style={{cursor:"pointer"}}>About Us</Link></li>
            <li> <a href="http://">web development</a></li>
            <li> <a href="http://">development</a></li>
          </ul>
        </div>
        <div style={{ textAlign: "left" }}> 
         <span>Our services</span>
          <br />
          <ul>
            <li> <a href="http://">home</a></li>
            <li> <a href="http://">web development</a></li>
            <li> <a href="http://">development</a></li>
          </ul>
          </div>

        <div style={{ textAlign: "left" }}>  
        <span>Contact Us</span>
         <br />
          <ul>
            
            <li> <a href="#Contact">Mail us</a></li>
          </ul>
        </div>





      </div>
      <div className="reserve" >
        &copy; <span style={{fontSize:"18px"}} className="brandlogo">it Solution . Com </span> 2022 All Right Reserve    <span style={{fontSize:"18px"}} className="brandlogo">Manish</span>
      </div>

    </>
  )
}
