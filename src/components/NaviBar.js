import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import { RetrieveContext } from '../context/retrieveContext'
import Button from 'react-bootstrap/Button'


export default function NaviBar () {
  const {handleRetrieve} = useContext(RetrieveContext)
    return (
        <ul>
              <li>
                <Button variant = 'light' className='navi-btn'><Link to="/">Home</Link></Button>
              </li>
              <li>
                <Button variant = 'light' className='navi-btn'><Link to="/about">About the Page</Link></Button>
              </li>
              <li>
                <Button variant = 'light' className='navi-btn'><Link to="/contact">Contact Us</Link></Button>
              </li>
              <li>
                <Button variant = 'light' className='navi-btn' onClick={(e) => handleRetrieve(e)}><Link to="/wishlist">Wishlist</Link></Button>
              </li>
        </ul>
    )
}