import React from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history/history'
import Seller from './Allusers/Seller';
import Buyer from './Allusers/Buyer';
import Dashboard from './Dashboard';
import allorders from './sellerReciveOrder/aorders';
import Adminpage from './Allusers/Admin'
import './admin.css';



export default function Admin() {


  return (
    <Router history={history} >
      <div className="admin_page" >
        <Dashboard />
        <div className="contens" >
          <Route exact path="/dashboard" component={Adminpage} />
          <Route exact path="/seller" component={Seller} />
          <Route exact path="/buyer" component={Buyer} />
          <Route exact path="/allorders" component={allorders} />
          {/* <Route exact path="/Products" component={Products}/> */}
        </div>
      </div>

    </Router>
  );
}

