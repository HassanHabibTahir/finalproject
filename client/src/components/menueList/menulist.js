// import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import './menulist.css';

// import imgShowCase from './images/men-906703245888-654537555048.png'
// import Shirt from './images/manshirt.png'
// import Pents from './images/menPents.jpg'
// import tarditional from './images/traditioncloth.png'
// import Suite from './images/suit.png'
// import Women from './images/women.png'
// import womenShirt from './images/womenshirt.png'
// import womenPents from './images/womenjeans.jpg'
// import TraditionClothes from './images/womenTradition.jpg'
// import womenDerss from './images/womendress.png'
// import Child from './images/child.png'
// import girlsShirts from './images/girsClothing.png'
// import boysClothing from './images/bosysclothing.png'
// import Frocks from './images/gFroks.png'
// import Tradition from './images/tradition.png'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// export default class MenuList extends Component {
//   render() {


//     const useStyles = makeStyles(theme => ({

//       root: {
//         flexGrow: 1,
//       },
//       paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//       },
//     }));
//     return (
//       <div>


//         <Grid item xs={12}>


//           <div>
//             <div className="items-body-men">
//               <span className="men_list" ><Link to="/mens">MENs</Link></span>
//               <span><img className="cate_img" src={imgShowCase} /></span>
//             </div>

//           </div>


//         </Grid>

//         <div style={{flex:"wrap" }}  className="card" >
//           <div className="itesm-list">



//             <div className="items-body-lists">
//               <span className="men_list" ><Link>Shirt</Link></span>
//               <span><img className="cate_img_list" src={Shirt}/></span>
//             </div>

//           </div>
//           <div style={{ flex: 1 }}></div>
      
//             <div className="itesm-list">



//               <div className="items-body-lists">
//                 <span className="men_list"   ><Link>Traditional Clothing</Link></span>
//                 <span><img className="cate_img_list" src={tarditional} /></span>
//               </div>

//             </div>
//           <div className="fist-list"></div>
         


//           <div className="itesm-list">



// <div className="items-body-lists">
//   <span className="men_list" ><Link>Suits</Link></span>
//   <span><img className="cate_img_list" src={Suite} /></span>
// </div>

// </div>
// <div style={{ flex: 1 }}></div>

// <div className="itesm-list">



//   <div className="items-body-lists">
//     <span className="men_list"   ><Link> Pents</Link></span>
//     <span><img className="cate_img_list" src={Pents} /></span>
//   </div>

// </div>




//         </div>

// <br/>

//         <Grid item xs={12}>


// <div>

//   <div className="items-body-women">
//     <span className="women_list" ><Link to="/women" >Women</Link></span>
//     <span><img className="cate_img2"   src={Women} /></span>
//   </div>

// </div>


// </Grid>




// <div style={{flex:"wrap" }}  className="card" >
//           <div className="itesm-list">



//             <div className="items-body-lists">
//               <span className="women_list" ><Link>Shirt</Link></span>
//               <span><img className="cate_img_list" src={womenShirt} /></span>
//             </div>

//           </div>
//           <div style={{ flex: 1 }}></div>
      
//             <div className="itesm-list">



//               <div className="items-body-lists">
//                 <span className="women_list"   ><Link>Jeans &Pents</Link></span>
//                 <span><img className="cate_img_list" src={womenPents} /></span>
//               </div>

//             </div>
//           <div className="fist-list"></div>
         


//           <div className="itesm-list">



// <div className="items-body-lists">
//   <span className="women_list" ><Link>Traditional Clothes</Link></span>
//   <span><img className="cate_img_list" src={TraditionClothes} /></span>
// </div>

// </div>
// <div style={{ flex: 1 }}></div>

// <div className="itesm-list">



//   <div className="items-body-lists">
//     <span className="women_list"   ><Link> Women Dresess</Link></span>
//     <span><img className="cate_img_list" src={womenDerss} /></span>
//   </div>

// </div>




//         </div>


// <br/>
//       <Grid item xs={12}>


// <div>

//   <div className="items-body-child">
//     <span className="child_list" ><Link>Kids</Link></span>
//     <span><img className="cate_img3"    src={Child} /></span>
//   </div>

// </div>


// </Grid>

// <div style={{flex:"wrap" }}  className="card" >
//           <div className="itesm-list">



//             <div className="items-body-lists">
//               <span className="child_list" ><Link>boys Shirts</Link></span>
//               <span><img className="cate_img_list" src={boysClothing} /></span>
//             </div>

//           </div>
//           <div style={{ flex: 1 }}></div>
      
//             <div className="itesm-list">



//               <div className="items-body-lists">
//                 <span className="child_list"   ><Link>girls Shits</Link></span>
//                 <span><img className="cate_img_list" src={girlsShirts} /></span>
//               </div>

//             </div>
//           <div className="fist-list"></div>
         


//           <div className="itesm-list">



// <div className="items-body-lists">
//   <span className="child_list" ><Link>Frocks</Link></span>
//   <span><img className="cate_img_list" src={Frocks} /></span>
// </div>

// </div>
// <div style={{ flex: 1 }}></div>

// <div className="itesm-list">



//   <div className="items-body-lists">
//     <span className="child_list"   ><Link>Tradition </Link></span>
//     <span><img className="cate_img_list" src={Tradition} /></span>
//   </div>

// </div>




//         </div>



 


//       </div>
//     )
//   }
// }
