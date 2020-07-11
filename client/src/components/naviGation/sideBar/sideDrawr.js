import React from 'react';
import './sideDrawr.css';

import Men from './homeSmallScreeLinks/Men'
import Women from './homeSmallScreeLinks/womenlist';
import Child from './homeSmallScreeLinks/childlist';
import List from './homeSmallScreeLinks/list'
import { Link } from "react-router-dom";
const SideDrawr = (props)=>{
    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open'
    }

    return(
        <nav className={drawerClasses} >
            <div>
            
          
            </div>
<ul style={{textAlign:"center"}}>
<div><List/></div>
<div><Men/></div>
<div><Women/></div>
<div><Child/></div>
<div></div>




  
</ul>

</nav>
    )
}
export default SideDrawr;
