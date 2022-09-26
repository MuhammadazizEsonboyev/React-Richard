import React from 'react';
import img5 from '../Img/IMAGE (5).png'
import img6 from '../Img/IMAGE (6).png'
import "../Section2/section2.css"

export default function Section2() {
  return (
    <>
      <div className='container box1'>
        <div className='row'>
          <div className='col-6 text'>
            <span className='aenean'>Aenean Consectetur</span>
            <h2>S</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
          <div className='col-2'>
            <img src={img5} alt="png" className='image-sec2' />
          </div>
        </div>
      </div>
      <div className='container box1'>
        <div className='row'>
          <div className='col-6'>
            <img src={img6} alt="png" className='img6' />
          </div>
          <div className='col-6 text'>
            <span className='sec2-span'>ConsectUltricies</span>
            <h2 className="title2">Amet Ipsum</h2>
            <p className='sec2-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>

        </div>
      </div>

    </>
  )
}
