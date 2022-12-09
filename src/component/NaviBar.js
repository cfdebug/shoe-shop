import { Link } from 'react-router-dom'


export default function NaviBar () {
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
                <Link to="/wishlist">Wishlist</Link>
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