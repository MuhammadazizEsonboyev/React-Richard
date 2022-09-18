import React from 'react'
import { Link } from 'react-router-dom'
import imgnavbar from "../Img/IMAGE.png"
import "./navbar.css"

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light" style={{ color: "black", background:"" }}>
        <div className='container'>
          <Link to="./" style={{ color: "black", textDecoration: "none" }}>
          <img src={imgnavbar} className="d-block w-100" alt="png" />
          </Link>
          <div style={{ display: "flex" }}>
            <Link to="./section" style={{ color: "black", textDecoration: "none", paddingRight:"20px" }}>
              <p className='Header' >About</p>
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
