import React from "react";
import "./Section3.css";
import Section3img from "../Img/Page-1.png";
import Sectionimg from "../Img/Page-1(1).png";
import Section2img from "../Img/Combined-Shape.png";

export default function Section3() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={Section3img} className="blocklive" alt="png"/>
          <p className="live">Activity Notifications</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="col-4 ">
          <img src={Sectionimg} className="blocklive" alt="png" />
          <p className="live">Custom Timing</p>
          <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
          varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="col-4 ">
          <img src={Section2img} className="blocklive" alt="png" />
          <p className="live">Mobile Optimized</p>
          <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
          varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="col-3">
          <p className="help">+12k</p>
          <p className="prettier">Nibh Elit Tristique</p>
        </div>
        <div className="col-3">
         <p className="run">84</p>
         <p className="coment">Aenean Condimentum</p>
       </div>
       <div className="col-3">
         <p className="like">3,07</p>
         <p className="git">Quam Inceptos</p>
       </div>
       <div className="col-3">
         <p className="edit">24h</p>
         <p className="cloudy">Ullamcorper</p>
       </div>
      </div>
    </div>
  );
}
