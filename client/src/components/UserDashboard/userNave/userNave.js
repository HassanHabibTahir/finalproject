import React, {Component} from 'react';
import * as routes from '../contents/index';
import {Link,withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import HomeComp from '../AccountsHome';
// import MyAds from '../Myads';
// import Messages  from '../Messages';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home,Visibility,Message} from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../userDashboard';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Product from '../../auth/product/product';
// import {startSendTocken} from '../redux/actions/messageActions';

class UserRoutes extends Component {
  state = {
    value: 0
  };
//   componentDidMount() {
//      document.title = "Account";
//      if(!this.props.user){
//        this.props.history.push(routes.LOGIN);
//      }
//      else{
//        let tocken = localStorage.getItem('token');
//        if (tocken){
//       let data = {
//         tocken,
//         userid:this.props.user
//       }
//       this.props.startSendTocken(data);
//      }}
//   }  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
        
<Router>
       <div style={{marginTop:"9vh"}} >
       <Grid > 
        {/* <Grid item xs={12} md={8}> */}
        <Hidden only={['xs','sm']}>
        <Paper className="" elevation={10}>
        
          <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                >
                <BottomNavigationAction 
                className="buttomNavigation"
                label="SELLER"
                icon={<AccountCircleIcon/>}
                component={Link} to={routes.SELLERACCOUNT}
                />

                <BottomNavigationAction 
                className="buttomNavigation" 
                label="My Ads" 
                icon={<Visibility />} 
                component={Link} to={routes.USERPRODUCT}
                />


                <BottomNavigationAction
                className="buttomNavigation"
                label="Add Product" 
                component={Link} to={routes.ADDPRODUCT}
                icon={<AddAPhotoIcon />} />

              {/*  <BottomNavigationAction
                className="buttomNavigation"
                label="Saved Ads" 
                component={Link} to={routes.SAVEDADS}
              icon={<Icon>streetview</Icon>} /> */}

</BottomNavigation>

        </Paper>

        </Hidden>
          
        {/* <Paper className="marginTop" style={{borderRadius:'0'}} elevation={5}> */}
                        
        <Route exact path={routes.USERPRODUCT} component={() => <Dashboard />}/>
            {/* <Route exact path={routes.MESSAGE} component={() =><Product />}/>*/}
            <Route exact path={routes.ADDPRODUCT} component={() =>< Product />}/>  
        {/* </Paper> */}
          
        {/* </Grid> */}
        <Hidden smDown>
        <Grid item xs={1} md={2}>
        </Grid>
        </Hidden>
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
