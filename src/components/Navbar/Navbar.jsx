import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div>
        <div>
          <div>
            <a href="#"></a>
            <img src={logo} alt="logo" />
          </div>
          {/* search bar and order button */}
          <div>
            <div>
              <input type="text" placeholder="Search" className=' ' />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Navbar