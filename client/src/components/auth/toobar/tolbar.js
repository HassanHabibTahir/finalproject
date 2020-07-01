import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import Logout from '../../../store/action/logout/logout'
import { connect } from 'react-redux'; 
import Aux from '../../../hoc/hoc'
import {
   
    Link
  } from "react-router-dom";
class ToolBar extends React.Component {
   constructor(props){
       super(props)
      this.state = {
        open: false,
        name:''
    };
   }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    componentWillReceiveProps(nextProps) {


        if (nextProps.auth.isAuthenticated) {
    
                    
                  this.setState({
                      name:nextProps.auth.user.name
                  })
        
          
    
         
        }
    
      }




      onLogoutClick=(e)=>{
        e.preventDefault();
    
        this.props.Logout();
        this.handleClose();
      }


    render() {

        const {isAuthenticated}= this.props.auth
        

 

        const LogoutAdmain=(
            <div>
            
            <div><img  src="https://img.icons8.com/nolan/64/user.png"/><span style={{marginTop:"100px"}} >{this.props.auth.user.name}</span></div>
                <p><Button 
                onClick={this.onLogoutClick}>
                   <img src="https://img.icons8.com/nolan/64/logout-rounded.png"/>
                    logout</Button></p>
            </div>
            )
            


const Logout=(
<div>

<div><img  src="https://img.icons8.com/nolan/64/user.png"/><span style={{marginTop:"100px"}} >{this.props.auth.user.name}</span></div>
   
{/* {this.props.auth.user.Admin===false?<Button onClick={this.handleClose} ><Link to="/addProduct" ><img src="https://img.icons8.com/nolan/64/edit-property.png"/> InsertProduct</Link></Button>:null} */}
{this.props.auth.user.Admin===false && this.props.auth.user.userCondition==="seller"?<Button onClick={this.handleClose} ><Link to="/userNav/setting" ><img src="https://img.icons8.com/ultraviolet/40/000000/user-male.png"/>SELLER DASHBOARD</Link></Button>:null}
<p><Button 
    onClick={this.onLogoutClick}>
       <img src="https://img.icons8.com/nolan/64/logout-rounded.png"/>
        logout</Button></p>
</div>
)

        const loginFirtst=(
<div className="auth" >
          <div className="aut_svg" >  
          <h1>SignUp here</h1>    
      <MenuItem  onClick={this.handleClose}>
     <Link  className="links_auth"  to="/signup"> <span className="Icon_sign" ><SupervisorAccountIcon/></span> <Button  type="button">
     SignUp
</Button></Link></MenuItem> 
<MenuItem  onClick={this.handleClose}> <Link className="links_auth"   to="/login"><span className="Icon_sign" ><LockOpenIcon/></span><Button>Login</Button></Link></MenuItem> 
    
 </div>
          </div>


        )

        return (
            <Aux>
            <div>
                <Button onClick={this.handleClickOpen}>
                   <div>{isAuthenticated? <span style={{color:"white"}}><SettingsIcon fontSize="large"/></span>:<span style={{color:"white"}}><EnhancedEncryptionOutlinedIcon fontSize="large"/></span>}</div>
        </Button>
                <Dialog  
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                <div   className="cartimg" >  
                </div>
                  
                    <DialogActions>
            
               {isAuthenticated?Logout:loginFirtst}
                   
                    </DialogActions>
                </Dialog>
            </div>
            </Aux>
        );
    }
}

const mapStateToProps=(state)=>({
    errors:state.erorr,
    auth:state.auth
  })
  
  export default connect(mapStateToProps,{Logout})(ToolBar)