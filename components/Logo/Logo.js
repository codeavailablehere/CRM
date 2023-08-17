import React from 'react'
import "./Logo.css"
import logo from '../../assets/img/logo/logo.svg'

const Logo = () => {
  return (
    <div className='logo-container'>
        <div>
            <img src={logo} className='img-fluid' alt='Beat CRM'/>
        </div>
    </div>
  )
}

export default Logo