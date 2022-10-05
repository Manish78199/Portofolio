import React from 'react'
import "./Assets/Style.css"
import customer from "./Assets/img/contact-us.png"


import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'


export default function Contact() {
  return (
    <div className='Contact_con' id="Contact">
      <div className='Left'>
        <img src={customer} alt="" />
      </div>
      <div className='Right'>
      
       <h5>Contact us</h5>

      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"   required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" aria-label=" With textarea"   required placeholder="Message"  style={{height:"200px"}}/>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    </div>

  )
}

