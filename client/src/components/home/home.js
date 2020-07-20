import React, { Component } from 'react'
import Slidersimple from '../slider/slider';

import CatgSlider from '../home/categorslider/quickbox/catgSlider'
import Showcase from './shopImg/shop'
import CategoryGrid from './Categrid/categorigrid'
import Details from './Details/details'
 import Paralex from './paralelx/foot';
 import Footer from './paralelx/footer/footer';
 import Scrool from './scrolUpBtn/ScrolUp'
import Aux from '../../hoc/hoc'
export default class Home extends Component {
  render() {
    return (

      <Aux>

      <div>
    <div style={{ height: "auto" ,marginTop:"50px"}} > 
    <Slidersimple /> 
     </div> 


        <div style={{ height: "auto" }}>
        <div><CategoryGrid/></div>
         
        </div>
{/* <br/> */}
        <div style={{ height: "auto" }} >
          <CatgSlider />
        </div>

<br/>
{/* <div><CategoryGrid/></div> */}
        {/* <div   ><MenuList/></div> */}
        <div> <Showcase /></div>
        <div>  <Details /> </div>
        <div> <Paralex/></div> 
   <div><Footer/></div>   
        <div><Scrool/></div>
      </div>
           </Aux>
    )
  }
}
