import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <a href="home" className="dropbtn"><img src={Logo} alt='' className='logo'/></a>
        <ul className='header-menu'>
            <li><a href="home">Home</a></li>
            <li><a href="alex">Alex's vision</a></li>
            <li><a href="panoramic">1'ever panoramic landscapes tutorial</a></li>
            <li><a href="collections">collections</a></li>
            <li><a href="phototours">phototours</a></li>
            <li><a href="lessons">editing lessons</a></li>
            <li><a href="blog">blog</a></li>
            <li><a href="contact">contact</a></li>
        </ul>
    </div>
  )
}

export default Header