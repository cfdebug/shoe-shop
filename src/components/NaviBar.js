import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { RetrieveContext } from '../context/retrieveContext'


export default function NaviBar () {
  const {handleRetrieve} = useContext(RetrieveContext)

    return (
        <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About the Page</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={(e) => {handleRetrieve(e)}}>Wishlist</Link>
              </li>
        </ul>
    )
}

//  import NaviBar from './components/NaviBar'
//  <NaviBar />
//  
//
//
//
//
//
//
//