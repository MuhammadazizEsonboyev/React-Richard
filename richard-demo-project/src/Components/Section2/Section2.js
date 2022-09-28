import React from 'react';
import img5 from '../Img/IMAGE (5).png'
import img6 from '../Img/IMAGE (6).png'
import "../Section2/section2.css"

export default function Section2() {
  return (
    <>
      <section className="section2">
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-box'>
              <span className='section2-span1'>Aenean Consectetur</span>
              <h2 className='section2-s'>S</h2>
              <p className="section2-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='col-4 col-box2'>
              <img src={img5} alt="png" className='section2-image-phone' />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={img6} alt="png" className='section2-image-order' />
            </div>
            <div className='col-4 text'>
              <span className='section2-span2'>ConsectUltricies</span>
              <h2 className="section2-amet">Amet Ipsum</h2>
              <p className='section2-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>

          </div>
        </div>


      </section>
    </>
  )
}
