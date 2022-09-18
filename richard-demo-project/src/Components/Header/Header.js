import React from 'react'
import img_1 from "../Img/IMAGE (1)"

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 style={{}}>Momentum</h1>
            <p>Launch your product — and savor the momentum.</p>
            <button style={{}}>Get the App</button>
          </div>
          <div className="col-6">
          <img src={img_1} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}
