// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
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
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import history from '../history/history'
import AllUser from './users/Allusres' ;

// import './admin.css';
// import { findByLabelText } from '@testing-library/react';
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '150%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

// export default function Admin() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <Router history={history} >
//     <div className="admin_page" >
//         <div className="list"  >

//         <List
        
//       component="nav"
//       aria-labelledby="nested-list-subheader"
    
//       className={classes.root}
//     >
//         <h3  style={{color:'#020D75'}}>admin Name </h3>
//       <ListItem button>
//      <div> <div className="admin_icon" ><GroupIcon fontSize='large'/></div></div>
    
//      <Link to="/AllUser" className="links" >users</Link>
        
        
     
//       </ListItem>
//       <ListItem button>
//       <div className="admin_icon" >
//       <ShoppingBasketIcon fontSize='large'  />
//       </div>
     
//       <Link to="/" className="links" >Products</Link>
         
//        </ListItem>
//        <ListItem button>
//       <div className="admin_icon" >
//       <TagFacesIcon fontSize='large'  />
//       </div>
     
//       <Link to="/factorymen" className="links" >factorymen</Link>
         
//        </ListItem>
//        <ListItem button>
//       <div className="admin_icon" >
//       <ShopIcon fontSize='large'  />
//       </div>
     
//       <Link to="/factorymen" className="links" >wholesaler</Link>
         
//        </ListItem>
//        <ListItem button>
//       <div className="admin_icon" >
//       <AddShoppingCartIcon fontSize='large'  />
//       </div>
     
//       <Link to="/factorymen" className="links" >Cart</Link>
         
//        </ListItem>
//       <ListItem button onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button className={classes.nested}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItem>
//         </List>
//       </Collapse>
//     </List>
//         </div>



//     <div className="contens" >
       
//         <Route exact path="/AllUser" component={AllUser} />
        
//         {/* <Route exact path="/Products" component={Products}/> */}
//     </div>
//     </div>
    
//     </Router>
//   );
// }


import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import Home from "../pages/Home";
// import Grid from "../pages/Grid";

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    height:800,
    marginTop:100
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <Fragment >
    {/* className={classes.aboveDrawer} */}
    <AppBar  style={{marginTop:"7vh"  , height:"5vh" ,backgroundColor:"#020D75"}} >
    {/* <h1 style={{textAlign:"center"}} >ADMIN PAGE</h1> */}
    
      <Toolbar >
        <IconButton
        className="admin_icon"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuClick}
        >
           <MenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        {/* <center><span>Admin Page</span></center>   */}
        </Typography>
      </Toolbar>
    </AppBar>
    {/* <div className={classes.toolbarMargin} /> */}
  </Fragment>
));

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent"
          })}
        />








         <List
        
      component="nav"
      aria-labelledby="nested-list-subheader"
    
      className={classes.root}
    >
        <h3  style={{color:'#020D75'}}>admin Name </h3>
      <ListItem button
      
      
      
      component={Link}
      to="/AllUser"
      onClick={onItemClick("users")}
      
      
      
      
      
      >
     <div> <div className="admin_icon" ><GroupIcon fontSize='large'/></div></div>
    
     {/* <Link to="/AllUser" className="links" >users</Link> */}
        
        
     
      </ListItem>
      <ListItem button
      
      
      >
      <div className="admin_icon" >
      <ShoppingBasketIcon fontSize='large'  />
      </div>
     
      <Link to="/" className="links" >Products</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <TagFacesIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >factorymen</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <ShopIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >wholesaler</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <AddShoppingCartIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >Cart</Link>
         
       </ListItem>
      <ListItem button >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>










            <List>
            <ListItem
            button
            component={Link}
            to="/AllUser"
            onClick={onItemClick("users")}
            // <Link to="/AllUser" className="links" >users</Link>
          >
            <GroupIcon fontSize='large'/>  <ListItemText>Users</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Grid"
            onClick={onItemClick("Page 2")}
          >
            <ListItemText>Page 2</ListItemText>
          </ListItem>
          <ListItem button onClick={onItemClick("Page 3")}>
            <ListItemText>Page 3</ListItemText>
          </ListItem>
        </List> 
      </Drawer>
      <main className={classes.content}>
      <Route exact path="/AllUser" component={AllUser} />
        {/* <Route path="/grid" component={Grid} /> */}
      </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div    className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
