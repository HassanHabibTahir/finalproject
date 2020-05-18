import React from 'react';
import './sideDrawr.css';
import Search from '../serchbar/serchbar'
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
 <li><Search/></li>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>
<h1>Hassan habib tahir</h1>


     <li><Link to="/">Home</Link></li>
    <li><Link to="/Courses">Courses</Link></li>
</ul>

</nav>
    )
}
export default SideDrawr;
