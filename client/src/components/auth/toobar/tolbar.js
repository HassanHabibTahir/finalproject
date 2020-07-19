import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import {Home,Visibility,Message} from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './toolbar.css'
import PropTypes from 'prop-types';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import Logout from '../../../store/action/logout/logout'
import { connect } from 'react-redux'; 
import Avatar from '@material-ui/core/Avatar';
import Aux from '../../../hoc/hoc'
import {
   
    Link
  } from "react-router-dom";



  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

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
        const classes = useStyles;
        const {isAuthenticated}= this.props.auth
        

 

        const LogoutAdmain=(
            <div>
      <p>      
        <Button>
        <Avatar  src={this.props.auth.user.avatar} alt="Remy Sharp"   className={classes.large} /><span  >{this.props.auth.user.name}</span>
            </Button> 
            </p>

            <p> 
                    <Button onClick={this.handleClose} ><Link to="/admin" >
        <Button>  <AccountCircleIcon fontSize="large" style={{color:"#020D75"}} />Go admin page</Button></Link></Button></p>
                <p><Button 
                onClick={this.onLogoutClick}>
                
                <ExitToAppIcon fontSize="large"  style={{color:"#020D75"}} />
                    logout</Button></p>
                   
            </div>
            )
            


const Logout=(
<div>

<Button><Avatar  src={this.props.auth.user.avatar} alt="Remy Sharp" /><span  >{this.props.auth.user.name}</span></Button>
   <br/>
{/* {this.props.auth.user.Admin===false?<Button onClick={this.handleClose} ><Link to="/addProduct" ><img src="https://img.icons8.com/nolan/64/edit-property.png"/> InsertProduct</Link></Button>:null} */}
{this.props.auth.user.Admin===false && this.props.auth.user.userCondition==="seller"?<Button onClick={this.handleClose} ><Link to="/userNav/setting" >
 <Button>  <AccountCircleIcon fontSize="large" style={{color:"#020D75"}} />SELLER DASHBOARD</Button></Link></Button>:null}

{this.props.auth.user.Admin===false && this.props.auth.user.userCondition==="buyer"?<Button onClick={this.handleClose} ><Link to="/buyer/orders/getorder" >
 <Button>  <AccountCircleIcon fontSize="large" style={{color:"#020D75"}} />BUYER ORDERS</Button></Link></Button>:null}
 {this.props.auth.user.Admin===false && this.props.auth.user.userCondition==="buyer"?<Button onClick={this.handleClose} ><Link to="/buyerchat" >
 <Button>  <Message fontSize="large" style={{color:"#020D75"}} />MESSAGES</Button></Link></Button>:null}

<p><Button 
    onClick={this.onLogoutClick}>
            <ExitToAppIcon fontSize="large"  style={{color:"#020D75"}} />
       {/* <img src="https://img.icons8.com/nolan/64/logout-rounded.png"/> */}
        logout</Button></p>
</div>
)  

        const loginFirtst=(
<div className="auth" >
          <div className="aut_svg" >  
      <MenuItem  onClick={this.handleClose}>
     <Link  className="links_auth"  to="/signup"> <span className="Icon_sign" ><SupervisorAccountIcon fontSize="large"  /></span> <Button  type="button">
     SignUp
</Button></Link></MenuItem> 
<MenuItem  onClick={this.handleClose}> <Link className="links_auth"   to="/login"><span className="Icon_sign" ><LockOpenIcon fontSize="large"  /></span><Button>Login</Button></Link></MenuItem> 
    
 </div>
          </div>


        )
console.log(this.props.auth.user.avatar)
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
ToolBar.propTypes = {
  errors:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired,
  Logout:PropTypes.func.isRequired

};
const mapStateToProps=(state)=>({
    errors:state.erorr,
    auth:state.auth
  })
  
  export default connect(mapStateToProps,{Logout})(ToolBar)