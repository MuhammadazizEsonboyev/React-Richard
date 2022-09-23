import React from 'react';
import "./header.css";
import imgheader from "../Img/IMAGE(1).png";
import imgnavbar from "../Img/IMAGE.png";
import { Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='navheader'>
      <div className="container">
        <div className="row">
          <div className='col-12'>
            <nav
              className="navbar " style={{color: "black"}}>    
              <Link to="/section2">
                <img src={imgnavbar} className=" " alt="png"/>
              </Link>         
              <div style={{display: "flex" }}>
                <Link to="/section4">
                  <p className='Header' >About</p>
                </Link>
                <Link>
                  <p className='Header' >About</p>
                </Link>
                <Link>
                  <p className='Header' >About</p>
                </Link>
                <Link>
                  <p className='Header' >About</p>
                </Link>  
              </div>
            </nav>
          </div>
          <div className="col-6">
            <h1 className='momentum' style={{}}>Momentum</h1>
            <p className='headerp'>Launch your product — and savor the momentum.</p>
            <button className='headerbtn' style={{}}>Get the App</button>
          </div>
          <div className="col-5">
            <div className='headerdiv'>
              <img src={imgheader} className="d-block w-710 " alt="png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
