import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt='' className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Alex's vision</li>
            <li>1'ever panoramic landscapes tutorial</li>
            <li>collections</li>
            <li>phototours</li>
            <li>editing lessons</li>
            <li>blog</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Header
