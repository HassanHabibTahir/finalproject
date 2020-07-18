import React from 'react';
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./foot.css"
import img1 from './img/123.jpg';
// const img1 = require("../image/123.jpg");
function LabdorWork() {
  return (
    <div className="lbwork-container">
      <OwlCarousel className="owl-theme"
                    items="5"
                    loop
                    dots={false}
                    autoplay="2000"
                    center
                    // margin={10}
                     >
                    <div className="item">  
                        <img src={img1} alt='fk'/>
                    </div>
                    <div className="item">
                        <img src={img1} alt='error'/>
                    </div>
                    <div className="item">
                        <img src={img1} alt='error'/>
                    </div>
                    <div className="item">
                        <img src={img1} alt='error'/>
                    </div>
                    <div className="item">
                        <img src={img1} alt='error'/>
                    </div>
                    <div className="item itam">
                        <img src={img1} alt='error'/>
                    </div>
                    <div className="item">
                        <img src={img1} alt='error'/>
                    </div>
                </OwlCarousel>
      {/* <div className="lbwork-container2">

        <p className="lbwork-heading">HOW LABDOOR WORKS</p>
        <h2 className="lbwork-h2">
          More science, less marketing.
       </h2>
        <div className="lbwork-p">
        While both are common terms in the fashion industry, a fashion line refers exclusively to all of the clothing a fashion designer produces for a specific category within her fashion company, while a collection refers to a seasonal 
        production of different styles within a line for that same company.
       </div>

      </div> */}

    </div>
  );
}

export default LabdorWork;

        {/* <span className="lbwork-learn-more">
          <Link to="/details">Learn more</Link>
       </span> */}