import React from 'react';
import "./footer.css";
import Logo from "../Img/IMAGE (10).png";

export default function Footer() {
  return (
    <>
    <div className='footer-body' >
    <footer class="footer1">
      <h1>Get updates from Richard</h1>
      <a href='#!'>New course alerts, discounts and free lessons</a>
      <input type="email" placeholder="Email your email" /><button className='foot-btn'>
        <a className='link' href="#!">Subscribe</a>
      </button>
    </footer>
    <footer class="footer2">
      <img src={Logo} alt="logo" />
      <div class="spans">
        <span className='foot-span'>Email</span>
        <span className='foot-span'>Instagram</span>
        <span className='foot-span'>Facebook</span>
        <span className='foot-span'>Twitter</span>
        <span className='foot-span'>Image Licanse Info</span>
        <span className='foot-span'>Powered by Webflow</span>
      </div>
    </footer>

    </div>
    </>
  )
}
