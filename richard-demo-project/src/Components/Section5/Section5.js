import React from 'react'
import img from "../Img/“.png"
import img5 from "../Img/IMAGE (9).png"
import img8 from "../Img/IMAGE (8).png"
import "./Section5.css"


export default function Section5() {
  return (
    <>
    <div className='container'>
      <div className='col-1 img'>
        <img src={img} alt='png' className='sectionimg' />
      </div>
      <div className='col-7 HeadNulla'>
        <div className='col-11 HeadNulla'>
          <p className='p'>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</p>
        </div>
      </div>

      <div className='row justify-content-center '>
        <div className='col-2'>
          <p className='firstp'>Joshua Home</p>
        </div>
        <div className='col-2'>
          <p className='secondp'>New York Times</p>
        </div>
      </div>
      <div className='col-10 margiAut'>
      <img src={img5} alt="png" className='img5'/>
      </div> 
    <div className='tellar'>
      <img src={img8} alt="png" className='img8'/> 
    </div>
    </div>
    </>
  )
}
