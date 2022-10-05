import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function nav() {
    return (
        <Navbar fixed="top"
        style={{height:"70px",poition:"fixed",top:"0px", backgroundColor: "#0a58ca"}} expand="lg">
        <Container>
          
          <Navbar.Brand href="/" style={{fontFamily:"'Anton', 'Sacramento'",fontSize:"35px",color:"white"}} variant="dark" className="brandlogo">Portfolio</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavLinksItem">
              <Nav.Link href="#Intro" style={{color:"white"}}>Intro</Nav.Link>
              <Nav.Link href="#Portfolio" style={{color:"white"}}>Portfolio</Nav.Link>
              <Nav.Link href="#Working" style={{color:"white"}}>Working</Nav.Link>
              <Nav.Link href="#Services" style={{color:"white"}}>Services</Nav.Link>
              <Link to="/" style={{color:"white"}}><Nav.Link href="#Contact" style={{color:"white"}}>Contact</Nav.Link></Link>
                <Nav.Link><Link to="/about" style={{color:"white"}}>About</Link></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
