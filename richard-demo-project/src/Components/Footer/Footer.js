import React from 'react';
import footerImage from "../Img/IMAGE (10).png"
import "./footer.css"

export default function Footer() {
  return (
    <>
      <footer className='footer1'>
        <h2 id='footer-h2'>Get updates from Richard</h2>
        <p id='footer-p'>New course alerts, discounts and free lessons</p>
        <input id='footer-input' type={"email"} placeholder="Enter your email"/>
        <button id='footer-btn'><a href='#!' id='footer-btn-text'>Subscribe</a></button>
      </footer>

{/* -------------------------------------------------- footer2 start ------------------------------------------------------ */}

      <footer className="footer2" >
            <img id='footer-logo' src={footerImage} alt="logo" />
            <div className='spans'>
              <span id='span-item'>Email</span>
              <span id='span-item'>Instagram</span>
              <span id='span-item'>Facebook</span>
              <span id='span-item'>Twitter</span>
              <span id='span-item'>Image Lisance Info</span>
              <span id='span-item'>Powered Webflow</span>
            </div>
      </footer>
    </>
  )
}
