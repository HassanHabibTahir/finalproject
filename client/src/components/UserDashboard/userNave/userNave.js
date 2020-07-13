import React, {Component} from 'react';
import * as routes from '../contents/index';
import {Link,withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import HomeComp from '../AccountsHome';
// import MyAds from '../Myads';
// import Messages  from '../Messages';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home,Visibility,Message} from '@material-ui/icons';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../userDashboard';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Product from '../../auth/product/product';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import Chat from "../../Chat/chat";
import Orders from '../Orders/order';
import Bankaccount from '../bankaccount/bacnkaccount';
import Selleracount from '../selleraccount/selleracount'


// import {startSendTocken} from '../redux/actions/messageActions';

class UserRoutes extends Component {
  state = {
    value: "SELLER"
  };
 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
        
<Router>
       <div style={{marginTop:"10vh"}} >
       <Grid item xs={12} > 
        <Grid  item xs={12} >
   
        <Paper className=""   elevation={15}>
        <Grid  item xs={12} >

          <Grid

                align="center"
                value={value}
                onChange={this.handleChange}
            
                >

{/* <Hidden only={['xs','sm']}> */}

{/* <Link to={routes.SELLERACCOUNT} ><AccountCircleIcon/></Link> */}
<Link to={routes.SELLERACCOUNT}  >
                <span>SELLER
                <BottomNavigationAction 
                  //  showLabels
                // className="buttomNavigation"
                label="SELLER"
                // value=" SELLER"
                icon={<AccountCircleIcon/>}
                component={Link} to={routes.SELLERACCOUNT}
                />

                </span>
                </Link>
              
                <Link to={routes.USERPRODUCT}  >
<span>SELLER ADS
                <BottomNavigationAction 
                className="buttomNavigation" 
                label="My Ads" 
                value=" Ads"
                icon={<Visibility />} 
                component={Link} to={routes.USERPRODUCT}
                />
</span>
</Link>
<Link to={routes.ADDPRODUCT}  >
<span>Add Product
                <BottomNavigationAction
                className="buttomNavigation"
                label="Add Product" 
                value=" Product"
                component={Link} to={routes.ADDPRODUCT}
                icon={<AddAPhotoIcon />} />
</span>
</Link>
<Link to={routes.CHAT}  >
<span>Messages
               <BottomNavigationAction
                className="buttomNavigation"
                label="Messages" 
                value=" Messages"
                component={Link} to={routes.CHAT}
              icon={<Message/>}
              
              />
</span>
</Link>
<Link to={routes.ORDER}  >
<span>ORDERS
        <BottomNavigationAction
    
                label="ORDERS" 
                // value=" ORDERS"
                component={Link} to={routes.ORDER}
              icon={<AttachMoneyOutlinedIcon/>}
              
              />

              </span>
              </Link>
              <Link to={routes.BANKACCOUNT}  >
              
              
              <span  >BANK ACCOUNT
                <BottomNavigationAction
         
                label="BANK ACCOUNT" 
                value=" ACCOUNT"
                component={Link} to={routes.BANKACCOUNT}
              icon={<AccountBalanceIcon/>}
              
              /></span></Link>
            

               {/* </Hidden> */}
             
</Grid>
</Grid>
        </Paper>

       
     
        {/* <Paper className="marginTop" style={{borderRadius:'0'}} elevation={5}> */}
                        
            <Route exact path={routes.USERPRODUCT} component={() => <Dashboard />}/>
            <Route exact path={routes.CHAT} component={() =><Chat />}/>
            <Route exact path={routes.ADDPRODUCT} component={() =>< Product />}/>  
            <Route exact path={routes.ORDER} component={() =>< Orders />}/>  
            <Route exact path = {routes.BANKACCOUNT} component={()=><Bankaccount/>}/>
            <Route exact path = {routes.SELLERACCOUNT} component={()=><Selleracount/>}/>
        {/* </Paper> */}
          
        </Grid>
      
      </Grid>

       </div>
</Router>
    );
  }
}


const mapStateToProps = state => ({

  // user : state.user.user._id,


})

export default withRouter(connect(mapStateToProps)(UserRoutes));
