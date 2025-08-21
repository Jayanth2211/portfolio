import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'
import logo1 from '../../img/JYN LOGO1.png'
import logo2 from '../../img/JYN_LOGO_WHITE_SMALL.png'
import Toggle from '../toggle/toggle'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const them = useContext(themeContext)
  const darkMode = them.state.darkMode



  return (
    <div className="n-wrapper" style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
      <div className="n-left">
        <div className="n-logo1" style={{ display: darkMode ? "none" : "inline" }}><img src={logo1} alt="" width={100} /></div>
        <div className="n-logo2" style={{ display: darkMode ? "inline" : "none" }}><img src={logo2} alt="" width={100} /></div>
        <Toggle />
      </div>

      {/* Hamburger (visible only on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`n-right ${menuOpen ? "open" : ""}`} style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to='Navbar' smooth={true} onClick={() => setMenuOpen(!menuOpen)}><li>Home</li></Link>
            <Link spy={true} to='Project' smooth={true} onClick={() => setMenuOpen(!menuOpen)}><li>Skills</li></Link>
            <Link spy={true} to='Services' smooth={true} onClick={() => setMenuOpen(!menuOpen)}><li>Services</li></Link>
            <Link spy={true} to='Portfolio' smooth={true} onClick={() => setMenuOpen(!menuOpen)}><li>Portfolio</li></Link>
          </ul>
        </div>
        <Link spy={true} to='Footer' smooth={true}>
          <button className='button n-button'>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar