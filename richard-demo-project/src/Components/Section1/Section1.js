import React from 'react';
import "./Section1.css";
import Sectionimg from "../Img/IMAGE(2).png";

export default function Section1() {
  return (
    <div className='sectionbackround'>
    <nav>
        <div className="container">
            <div className="row ">
            <div className="col-12 xox">
                <p1>Aenean Consectetur Porta</p1>
             </div>
            <div className="col-6 style">
                <p className='nullam'>Nullam quis risus eget urna mollis ornare vel eu leo.</p>
            </div>
            </div>
            <div>
                <img src={Sectionimg} className="d-block w-710" alt="png" />
             </div>
        </div>
    </nav>
</div>

  )
}
