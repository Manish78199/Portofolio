import React from 'react'


import "./Assets/Style.css"
import Hav from "./Nav"
import Intro from './Intro';
import Contact from "./Contact"
import Working from './Working';
import Portfolio from './Portfolio';
import Services from './Services';
import Footer from './Footer';

export default function home(){
return( <div className='Home'>
     <Hav/>
     <div className='Sectoins'>
     <Intro/>
     <Portfolio/>
     <Working/>
     <Services/>
     <Contact/>
     </div>
     <Footer/>

</div>

);
};




