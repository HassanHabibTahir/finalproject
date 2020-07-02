import React from 'react'
import './drawertooglebutton.css';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
const DrawerToggle = (props)=>(

    <div className="toogle_button" onClick={props.click}  >

<span style={{color:"white" }} ><FormatListBulletedIcon fontSize="large"/></span>
   {/* <div className="toggle-button-line" />
   <div className="toggle-button-line" />
   <div className="toggle-button-line" /> */}
 </div>


);

export default DrawerToggle;