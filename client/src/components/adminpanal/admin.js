import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// import { Link } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShopIcon from '@material-ui/icons/Shop';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history/history'
import Seller from './Allusers/Seller' ;
import Buyer from './Allusers/Buyer' ;
import Dashboard from './Dashboard';
import allorders from './sellerReciveOrder/aorders';
import Adminpage from './Allusers/Admin'
import './admin.css';
import { findByLabelText } from '@testing-library/react';
const useStyles = makeStyles(theme => ({
  root: {
    width: '150%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router history={history} >
    <div     className="admin_page" >
      <Dashboard/>
        <div className="contens" >
       <Route exact path="/dashboard" component={Adminpage}/>
        <Route exact path="/seller" component={Seller} />
        <Route exact path="/buyer" component={Buyer}/>
        <Route exact path="/allorders" component={allorders}/>
        {/* <Route exact path="/Products" component={Products}/> */}
    </div>
    </div>
    
    </Router>
  );
}

