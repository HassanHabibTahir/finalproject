import React, { Component } from 'react'
import imgShow from './shpimg/shop.jpg'
import Fade from "react-reveal/Fade";
export default class shop extends Component {
    render() {
        return (
            <div>
              
              <Fade  left>
              <img  style={{width:"100%" ,height:"100vh"}} src={imgShow}/>

                  </Fade>              </div>
        )
    }
}
