import React, { Component } from 'react'
import Slider from "react-slick";
import './slider.css';
import './slideranimation.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image1 from './images/img1.jpg'
import Imges2 from './images/mensS.jpg'
import Imges3 from './images/women (1).jpg'
import Imges4 from './images/store.jpg'
import Imges5 from './images/menShirt.jpg'


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
      // fade: true,
      // useTransform: true,
      infinite: true,
      speed: 3300,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // arrows: true,
      // useCSS: true,
      beforeChange: this.onBeforeChange,
      afterChange: this.onAfterChange
    };
    return (

      <div className='container'>

        <div onClick={this.previous} className="left-arrow"><ArrowBackIosIcon className="leftIcon" /></div>
        <div onClick={this.next} className="right-arrow"><ArrowForwardIosIcon className="rightIcon" /></div>

        <Slider ref={c => (this.slider = c)} {...settings} className="sliderContainer"   >

          <div>

            <div className="slide2" >
              <br />

              <img className="img1" src={Image1} />
            
            </div>
          </div>
          <div>

            <div className="slide1" >
              <div>
                <img className="img2" src={Imges2} />
              </div>
            </div>
          </div>
          <div>
            <div className="slide3" >
              <div>
                <img className="img3" src={Imges3} />
              </div>
            </div>
          </div>
          <div>
            <div className="slide4" >
              <div>
                <img className="img4" src={Imges4} />
              </div>
            </div>
          </div>


        </Slider>
      </div>
    );
  }
}

export default Slidersimple