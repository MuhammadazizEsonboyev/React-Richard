import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light" >
        <div className='container'>
          <Link to="./" style={{ color: "black", textDecoration: "none" }}>
            <p className='logo'>Richard</p>
          </Link>
          <div style={{ display: "flex" }}>
            <Link to="./section" style={{ color: "black", textDecoration: "none", paddingRight:"20px" }}>
              <p className='Section' >About</p>
            </Link>
            <Link to="./Header" style={{ color: "black", textDecoration: "none", paddingRight:"20px" }}>
              <p className='Header'>Features</p>
            </Link>
            <Link to="./Header" style={{ color: "black", textDecoration: "none", paddingRight:"20px" }}>
              <p className='Header'>How to Use</p>
            </Link>
            <Link to="./Header" style={{ color: "black", textDecoration: "none" }}>
              <p className='Header'>Download</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
