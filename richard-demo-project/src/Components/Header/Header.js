import React from 'react'
import imgheader from "../Img/IMAGE (1).png"
import "./header.css"

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
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
    </>
  )
}
