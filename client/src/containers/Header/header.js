import React, { Component } from 'react';
import Header from '../../components/naviGation/header/header';
import SideDrawr from '../../components/naviGation/sideBar/sideDrawr';
import BackDrop from '../../components/naviGation/backdrop/backdrop';
import Admin from '../../components/adminpanal/Dashboard'
import { connect } from 'react-redux'; 
class MainHeader extends Component {
state={
  sideDrawerOpen:false
};
  drawerToggleClickHandler= () =>{
    this.setState((prevState)=>{

      return { sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler=()=>{
this.setState({sideDrawerOpen:false})
  };
   

    render() {
      let backdrop;
  
  if(this.state.sideDrawerOpen){
  
    backdrop=<BackDrop click={this.backdropClickHandler} />
  }

        return (
 <div style={{height:"100%"}} >
<div>
<SideDrawr show={this.state.sideDrawerOpen} />
{backdrop}
<Header drawerClickHandler={this.drawerToggleClickHandler}  />
</div>
</div>
    
        )}
}
const mapStateToProps=(state)=>({
  errors:state.erorr,
  auth:state.auth,
  CartItems: state.allProducts.cartitems,
})

export default connect(mapStateToProps)(MainHeader)