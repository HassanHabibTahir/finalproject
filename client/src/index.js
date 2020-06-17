import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import Store from './store/index';  
import SetAuthToken from './store/action/utility/setAuthToken'
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux'
import Logout from './store/action/logout/logout'
import SetCurrentUser from './store/action/loginAction/setUser'

//check token
if(localStorage.jwtToken){
    //set aut token header aut
    SetAuthToken(localStorage.jwtToken)
    //decode the item and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken)
    Store.dispatch(SetCurrentUser(decoded))  ;
   
     
    
    const currentTime = Date.now()/1000;
    if(decoded.exp<currentTime){

Store.dispatch(Logout())
window.location.href='/login'

    }

}



ReactDOM.render(
<Provider  store={Store} ><App /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
