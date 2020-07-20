import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      
      className={classes.root}
    >
      

      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="MEN LIST" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
  
<ul className="list_show">
<li  ><Link to="/product/mens">MENs</Link></li>
<li  ><Link to="/product/mens/shirt" >Shirt</Link></li>
<li><Link to="/product/mens/pent"  >Pents</Link></li>
<li><Link to="/product/mens/jeans"  >Jeans</Link></li>
<li><Link to="/product/mens/suits">suits</Link></li>
<li><Link to="/product/mens/dresess">Dresess</Link></li>
<li><Link to="/product/mens/traditionalclothing">traditional</Link></li>
</ul>

      </Collapse>
























      
    </List>
  );
}
