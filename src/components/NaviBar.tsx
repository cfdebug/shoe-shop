import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import { RetrieveContext } from '../context/retrieveContext'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default function NaviBar () {
  const {handleRetrieve}:any = useContext(RetrieveContext)
    return (
        <Navbar bg="light" expand="lg">
          <Container>
              <Nav>
                <Button variant = 'light' className='navi-btn'><Link to="/">Home</Link></Button>
              </Nav>
              <Nav>
                <Button variant = 'light' className='navi-btn'><Link to="/about">About the Page</Link></Button>
              </Nav>
              <Nav>
                <Button variant = 'light' className='navi-btn'><Link to="/contact">Contact Us</Link></Button>
              </Nav>
              <Nav>
                <Button variant = 'light' className='navi-btn' onClick={(e) => handleRetrieve(e)}><Link to="/wishlist">Wishlist</Link></Button>
              </Nav>
          </Container>
        </Navbar>
    )
}