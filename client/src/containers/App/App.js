import React, { Component } from 'react' 
import Aux from '../../hoc/hoc'
import Home from '../../components/home/home'
import Routes from '../routes/router'
import MainPage from '../../containers/Header/header'
import io from "socket.io-client"
const socket = io(window.location.origin);
window.socket=socket;
export default class App extends Component {
  render() {
    return (
      <Aux>
  
        <Routes/>
       {/* <Admin/> */}

       <br/>
   
     </Aux>
    )
  }
}

