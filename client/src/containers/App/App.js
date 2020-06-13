import React, { Component } from 'react' 
import Aux from '../../hoc/hoc'
import Home from '../../components/home/home'
import Routes from '../routes/router'
import MainPage from '../../containers/Header/header'
// import Admin from '../../components/adminpanal/Dashboard'
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

