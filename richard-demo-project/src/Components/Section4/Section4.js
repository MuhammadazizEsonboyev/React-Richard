import React from "react";
import "./section4.css";
import img6 from "../Img/IMAGE (6).png";
import img7 from "../Img/IMAGE (7).png";

export default function Section4() {
  return (
    <>
      <div className="container con4">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="col-11">
              <div className="col-11">
                <p className="secp_4">Aenean Consectetur Porta</p>
                <div className="sec4">Sem Risus Elit Vestibulum</div>
                <p className="sec_4p">
                  Nulla vitae elit libero, a pharetra augue. Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                  sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                  Donec id elit non mi porta gravida at eget metus. Etiam porta
                  sem malesuada magna mollis euismod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img src={img6} alt="png" className="img6" />
          </div>
        </div>
      </div>
      <div className="container con4">
        <div className="row justify-content-center">
          <div className="col-6 text-start">
            <img src={img7} alt="png" className="img7" />
          </div>

          <div className="col-4">
            <div className="col-11">
              <div className="col-11">
                <p className="secp_41">Aenean Consectetur Porta</p>
                <div className="sec4">Parturient Tortor</div>
                <p className="sec_4p">
                  Nulla vitae elit libero, a pharetra augue. Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                  sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                  Donec id elit non mi porta gravida at eget metus. Etiam porta
                  sem malesuada magna mollis euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
