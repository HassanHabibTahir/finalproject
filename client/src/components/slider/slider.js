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
class Slidersimple extends Component {


  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }


  render() {
    var settings = {
      autoplay: true,
      dots: true,
      fade: true,
      useTransform: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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


            <a href='#'>    <div><img className="img1" src={Image1} alt="wisiting"/></div></a>


            <div className="animation-container">

              <div className="type-animation">
                <Typical

                  steps={['WELCOME TO GOBACHI  PLATEFORM! ', 1000, 'GET WOMEN PRODUCTS', 1000, 'GET MEN PRODUCTS ', 1000, 'GET CHILD PRODUCTS', 1000]}
                  loop={Infinity}
                  wrapper="p"
                />
                <h2 className='text2'>GOBACHI PLATEFORM</h2>
              </div>
            </div>




          </div>



          <div  >
            <div>
              <img className="img2" src={Imges2} alt="wisiting" />
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
                <img className="img3" src={Imges3}  alt="wisiting"/>
              </div>
              <div className="animation-container">
                <div className="type-animation">
                  <div className="textDiv">
                    <div className='Slid1text1'>
                      <div className="p"  > YOU </div>
                      <div className="p"  >-</div>
                      <div className="r">CAN </div>
                      <div className="p"  >-</div>
                      <div className="o1">ORDER</div>
                      <div className="p"  >-</div>
                      <div className="f"  >PRODUCTS</div>
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
                <img className="img4" src={Imges4}  alt="wisiting"/>
              </div>
              <div className="animation-container">
                <div className="type-animation">
                  <div className="textDiv">
                    <div className='Slid1text1'>
                      <div className="W">D</div>
                      <div className="E">R</div>
                      <div className="C">E</div>
                      <div className="A1">A</div>
                      <div className="N1">M</div>
                      <div className="N1">-</div>
                      <div className="D">P</div>
                      <div className="O">R</div>
                      <div className="A2">O</div>
                      <div className="N2">D</div>
                      <div className="Y">U</div>
                      <div className="T">C</div>
                      <div className="H">T</div>
                      <div className="I">S</div>
                    </div>
                    <h2 className='text2'>GET YOUR DREAM</h2>

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


