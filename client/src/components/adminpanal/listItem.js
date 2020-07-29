import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import CollectionsIcon from '@material-ui/icons/Collections';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button  component={Link}  to="/dashboard" >
    {/* <Link primary="Dashboard"  to="/dashboard" className="links" > */}
    <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
      {/* </Link> */}
   <ListItemText primary="Admin" /> 
    </ListItem>

    <ListItem button  component={Link}  to="/seller" >
    {/* <Link primary="Dashboard"  to="/dashboard" className="links" > */}
    <ListItemIcon>
    <PeopleIcon />
        </ListItemIcon>
      {/* </Link> */}
   <ListItemText primary="Seller" /> 
    </ListItem>

    <ListItem button  component={Link}  to="/buyer" >
    {/* <Link primary="Dashboard"  to="/dashboard" className="links" > */}
    <ListItemIcon>
    <PeopleIcon />
        </ListItemIcon>
      {/* </Link> */}
   <ListItemText primary="buyer" /> 
    </ListItem>



    <ListItem button  component={Link}  to="/allorders" >
    {/* <Link primary="Dashboard"  to="/dashboard" className="links" > */}
    <ListItemIcon>
 
    <ShoppingCartIcon />
    </ListItemIcon>
      {/* </Link> */}
   <ListItemText primary="All Orders" /> 
    </ListItem>

    <ListItem button  component={Link}  to="/prodcutsall" >
    <ListItemIcon>
 
    <CollectionsIcon />
    </ListItemIcon>
   <ListItemText primary="AllProducts" /> 
    </ListItem>



   





    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem> */}
    <ListItem button   component={Link}  to="/regsssister
"  >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);