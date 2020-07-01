import React, { Component } from 'react'
import Slider from "react-slick";
import Typical from 'react-typical'
import './slider.css';
import './textanimation.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Button from '@material-ui/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image1 from './images/img1.jpg'
import Imges2 from './images/img2.jpg'
import Imges3 from './images/img3.jpg'
import Imges4 from './images/img4.jpg'
import Imges5 from './images/menShirt.jpg'
import { Link } from '@material-ui/core';
import Animate from 'animate.css-react'
 import 'animate.css/animate.css'
 import Fade from 'react-reveal/Fade';
 import Roll from 'react-reveal/Roll';
class Slidersimple extends Component {


  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }


  render() {
    var settings = {
      autoplay:true,
      dots: true,
      fade: true,
      useTransform: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
       arrows : false,
      useCSS: true,
      beforeChange: this.onBeforeChange,
      afterChange: this.onAfterChange
    };

    return (

      <div className='container'>

        <div onClick={this.previous} className="left-arrow"><ArrowBackIosIcon className="leftIcon" /></div>
        <div onClick={this.next} className="right-arrow"><ArrowForwardIosIcon className="rightIcon" /></div>

        <Slider ref={c => (this.slider = c)} {...settings} className="sliderContainer"   >
            <div >
              

            <a href='#'>    <div><img   className="img1" src={Image1} /></div></a>
         
         
          <div className="animation-container">

          <div className="type-animation">
           <Typical
           
           steps={['Hi!', 1000, 'GET SHIRTS', 1000,'GET PENTS ', 1000,'GET JEANS', 1000  ]}
           loop={Infinity}
           wrapper="p"
         />
         <Link className="shop-now"   to="/shop">SHOP GOBACHI</Link>
         </div>
          </div>
      
              
             

            </div> 
         
     

           <div  >
              <div>
                <img className="img2" src={Imges2} />
              </div>
              <div className="animation-container">

<div className="type-animation">
<div>
<div className="textDiv">
              <div className='Slid1text1'>
								<div className="p">P</div>
								<div className="r">R</div>
								<div className="o1">O</div>
								<div className="f">F</div>
								<div className="e">E</div>
								<div className="s1">S</div>
								<div className="s2">S</div>
								<div className="i">I</div>
								<div className="o2">O</div>
								<div className="n">N</div>
								<div className="a">A</div>
								<div className="l">L</div>
								<div className="s3">S</div>
							</div>
              <h2 className='text2'>Factory Products</h2>
					
					
						</div>
</div>


</div>
</div>
            </div>
      
          <div>
            <div  >
              <div>
                <img className="img3" src={Imges3} />
              </div>
              <div className="animation-container">
           <div className="type-animation">
           <div className="textDiv">
							<div className='Slid1text1'>
								<div className="p"> YOU CAN ORDER PRODUCTS</div>
               
								{/* <div className="r">R</div>
								<div className="o1">O</div>
								<div className="f">F</div>
								<div className="e">E</div>
								<div className="s1">S</div>
								<div className="s2">S</div>
								<div className="i">I</div>
								<div className="o2">O</div>
								<div className="n">N</div>
								<div className="a">A</div>
								<div className="l">L</div>
								<div className="s3">S</div> */}
							</div>
              <h2 className='text2'> GOBACHI PLATEFORM</h2>
						
						</div>
        
</div>
           </div>
            </div>
          </div> 
        <div>
            <div  >
              <div>
                <img className="img4" src={Imges4} />
              </div>
              <div className="animation-container">
           <div className="type-animation">
           <div className="textDiv">
           <div className='Slid1text1'>
								<div className="W">B</div>
								<div className="E">U</div>
								<div className="C">Y</div>
								<div className="A1">P</div>
								<div className="N1">N</div>
								<div className="D">D</div>
								<div className="O">O</div>
								<div className="A2">A</div>
								<div className="N2">N</div>
								<div className="Y">Y</div>
								<div className="T">T</div>
								<div className="H">H</div>
								<div className="I">I</div>
								<div className="N3">N</div>
								<div className="G">G</div>
								<div className="LAST">!</div>
							</div>
              <h2 className='text2'>HYDDIMAN SERVICES</h2>
						
						</div>
        
</div>
           </div>
            </div>
          </div>


        </Slider>
      </div>
    );
  }
}

export default Slidersimple


