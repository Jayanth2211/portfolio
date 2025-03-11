import React from 'react'
import "./navbar.css"

import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Jayanth.</div>  
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Project' smooth={true} >
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} > 
                    <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Footer' smooth={true} > <button className='button n-button'>
                Contact 
            </button>   </Link>
        </div>
    </div>
  )
}

export default Navbar