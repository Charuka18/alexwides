import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import Cart from '../../assets/cart.png'
import Search from '../../assets/search.png'
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className="header">
        <a href="home" className="dropbtn"><img src={Logo} alt='' className='logo'/></a>
        <ul className='header-menu'>
            <li><a href="home">Home</a></li>
            <li><a href="alex">Alex's vision</a></li>
            <li><a href="panoramic">1'ever panoramic landscapes tutorial</a></li>
            <li>
              <NavDropdown title="collections" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="phototours" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li><a href="lessons">editing lessons</a></li>
            <li>
              <NavDropdown title="blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li><a href="contact">contact</a></li>
            <li><a href="home" className="dropbtn"><img src={Cart} alt='' className='cart'/></a></li>
            <li><a href="home" className="dropbtn"><img src={Search} alt='' className='search'/></a></li>

        </ul>
    </div>
  )
}

export default Header