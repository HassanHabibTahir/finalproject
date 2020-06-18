import React, { Component } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './header.css';
import DrawerToggle from '../sideBar/drawerToggleButon'
import { Link } from "react-router-dom";
import Serch from '../serchbar/serchbar';
import Cart from '../../serchNave/cart/cartlink';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
// import SimpleMenu from '../../auth/toolbar'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ToolBar from '../../auth/toobar/tolbar';
import {getCartProductbyId} from '../../../store/action/cartAction/cartaction'
import Aux from '../../../hoc/hoc';
import { connect } from 'react-redux'; 
class Header extends Component {
//  state={
//     data:[]
//   }

//   componentDidMount() {


//     this.props.getCartProductbyId()
//   }



//   componentWillReceiveProps(nextProps) {
//     // console.log(nextProps.CartItems.products)
//        if(nextProps.CartItems.products !== undefined && nextProps.CartItems.products !== null) {
   
      
//         this.setState({
//           data: nextProps.CartItems.products,
            
//          })
          
//        }
   
   
//    }
    render() {
     
      console.log(this.props.CartItems)
      //  let quanit =   this.props.CartItems&&this.props.CartItems.products!=null&& this.props.CartItems.products!=undefined? this.props.CartItems.products.map((q)=>{
      // return q.quantity
      //  }):null length
      
//       let  itemlngth = this.state.data &&this.state.data!=null&&this.state.data!=undefined?  this.state.data.length:null
// console.log(itemlngth)
  
            const list=(
            <ul  className="toolbarsecond">

<li className="header_nav" ><Link to="/product/mens">MENs</Link>
<ul className="list_show" >
<li  ><a href="#">Shirt</a></li>
<li><a href="#">Pents</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</li>
<li><Link to="/product/child">CHILD</Link>
<ul className="list_show" >
<li><a href="#">Shirt</a></li>
<li><a href="#">curta</a></li>
<li><a href="#">logng shirt</a></li>
</ul>
</li>
<li><Link to="/product/women">WOMEN<i class="fas fa-care?t-down"></i> </Link>
<ul className="list_show" >
<li><a href="#">Shirt</a></li>
<li><a href="#">logn shirt</a></li>
<li><a href="#"> typse <i className="arow_rotate"   style={{transform: "rotate(-90deg)"}} ><span   >&#11162;</span></i> </a>
<ul className="list_show_more" >
<li><a href="#"></a></li>
<li><a href="#">small shirt</a></li>
<li><a href="#">big shirt</a></li>
</ul>
</li>

</ul>

</li>


</ul>
        )


const adminLinks=(
    <div  > 
    <Link to="/admin" ><img src="https://img.icons8.com/ultraviolet/40/000000/data-configuration.png"/></Link>

    </div>

    )


        return (
            <Aux>
<header className="toolbar" >
<nav className="toolbar_navigation" >
{this.props.auth.user.Admin?null:<div  className="tollbar-togle-button" ><DrawerToggle click={this.props.drawerClickHandler} /></div>}
<div  className="toolbar_logo" ><a href="/">GOBACHI</a></div>

{/* <div className="spacer"></div> */}
<div style={{width:"10vw"}}></div>
<div className="toolbar_navigation_items" >
{this.props.auth.user.Admin?adminLinks:list}

</div>
{/* <div style={{width:"20vw"}}></div> */}
<div className="spacer"></div>
{this.props.auth.user.Admin?null:<div  className="serch-bar"> <Serch/></div>}
{/* <div style={{width:"10vw"}}></div> */}
{/* <div className="spacer"></div> */}
{this.props.auth.user.Admin?null:<div>
  
    <Link to="/cart" >  <IconButton aria-label="show 4 new mails" color="inherit">
    <Badge badgeContent={6} color="secondary">
   
    <AddShoppingCartIcon  fontSize="large"  style={{color:'white'}} />
              </Badge>
              </IconButton>
              </Link> 
   </div>}
   <div>
   {/* <div style={{width:"5vw"}}></div> */}
{/* <div className="spacer"></div> */}
   {/* <div style={{width:"5vw"}}></div> */}
<Link to="/favourint"  >  <FavoriteIcon  className="fave_icon" fontSize="large" color="red" />
  </Link>
  </div>
<div  ><ToolBar/></div>
</nav>

</header>
</Aux>

        )}
}

const mapStateToProps=(state)=>({
    errors:state.erorr,
    auth:state.auth,
    CartItems: state.allProducts.cartitems,
  })

export default connect(mapStateToProps,{getCartProductbyId})(Header)

