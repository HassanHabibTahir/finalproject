
  import React, { Component } from 'react'
  import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';
import Dashboard from '../../components/UserDashboard/userDashboard'
import MainHeader from '../../containers/Header/header';
import resetEmail from '../../components/auth/reset/resetemail'
import Resetpassword from '../../components/auth/reset/resetpassword';
import Product from '../../components/auth/product/product';
import UserDashboard from '../../components/UserDashboard/userDashboard'
  import {
     Router,
  
    Route,
    Switch,
    Redirect
  
  } from "react-router-dom";
import history from '../../components/history/history'
import ProvatieRoutes from '../../components/privavte/private'
import Admin from '../../components/adminpanal/admin'
 
  export default class Routes extends Component {
    render() {
      return (
        <Router history={history}>
    <MainHeader/>
      <Route  exact path="/"    component={Home} />
      <Route  exact  path="/signup"    component={Register}/>
      <Route   exact path="/login"    component={Login}/>
      <Route   exact path="/login/:token"    component={Login}/>
      <Route   exact path="/getEmail/forgot"   component={resetEmail} />
      <Switch>
      <Route   exact path="/reset/:token"     component={Resetpassword}/>
      </Switch>
        <Switch>
          <Redirect to="/" />
        </Switch>
      <Switch>
      <ProvatieRoutes  exact path="/dashboard"  component={Dashboard} />
      </Switch>
      <Switch> <ProvatieRoutes exact path="/addProduct" component={Product}/></Switch>
      <Switch>
      <ProvatieRoutes   path="/Admin"  exact component={Admin} />
      </Switch>
     
      <Switch>
      <ProvatieRoutes   path="/userproduct"  exact component={UserDashboard} />
      </Switch>

{/* <Route path="/users" component={Users} /> */}
     </Router>
          
    
      )
    }
  }
  