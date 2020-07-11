import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
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
        
        <ListItemText primary="CHILD LIST" />
        {open ?<ExpandMore />:<ExpandLess />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
      {/* <div><Men/></div> */}
<ul className="list_show">
<li className="header_nav"  ><Link to="/product/child">CHILD</Link></li>
<li  ><Link to="/product/child/shirt" >Shirt</Link></li>
<li><Link to="/product/child/pent"  >Pents</Link></li>
<li><Link to="/product/child/jeans"  >Jeans</Link></li>
</ul>

      </Collapse>
























      
    </List>
  );
}
