import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const ContactUs = () => {

  
  return (


    <div>

<h1 style={{padding:'35px', fontFamily:'sans-serif'}}>CONTACT US</h1>
   
    <Form style={{paddingLeft:'100px', paddingRight:'100px'}}>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>


      <Row style={{paddingTop:'35px'}}>
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
       
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave Your comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

    </Form>

</div>
    
  );
}


export default ContactUs