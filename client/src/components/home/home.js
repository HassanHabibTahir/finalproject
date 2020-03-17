import React, { Component } from 'react'
import Slidersimple from '../slider/slider';
import MenuList from '../menueList/menulist';
import CatgSlider from '../home/categorslider/quickbox/catgSlider'
import Showcase from './shopImg/shop'
import Details from './Details/details'
import Aux from '../../hoc/hoc'
export default class Home extends Component {
  render() {
    return (

      <Aux>

        <div>
          <Slidersimple />
        </div>

        <div style={{ height: "50vh" ,marginTop:"60px"}}>

          <Details />
        </div>

        <div>
          <CatgSlider />
        </div>

        <div>     <MenuList /></div>

        <div> <Showcase /></div>
      </Aux>
    )
  }
}
