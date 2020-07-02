import React, { Component } from 'react' 
import Aux from '../../hoc/hoc'
import Home from '../../components/home/home'
import Routes from '../routes/router'
import MainPage from '../../containers/Header/header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default class App extends Component {
  render() {
    return (
      <Aux>
   <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />
        <Routes/>
       {/* <Admin/> */}

       <br/>
   
     </Aux>
    )
  }
}

