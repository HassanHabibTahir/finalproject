
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
// import {SIGNUP} from '../constants';
import CircularProgress from '@material-ui/core/CircularProgress';
// import {loginUser} from '../../store/action/loginAction';
import {connect} from 'react-redux';

// import {ACCOUNT} from '../constants';
import {withRouter} from 'react-router-dom';
import {Send,Email,Lock} from '@material-ui/icons';

import Footer from '../home/paralelx/footer/footer'
import loginUser from '../../store/action/loginAction/loginaction'
// import { connect } from 'react-redux';
import history from '../history/history'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import resetEmail from '../auth/reset/resetemail';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
// import {toast} from 'react-toastify';
// // import axios from 'axios';
// import Admin from '../adminpanal/admin';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors:'',
            checkbox:''
        }
    }

    componentDidMount() {
        document.title = "SignIn";
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({loading: false})
    //     if (nextProps.user.email) {
    //         this
    //            .props
    //             .history
    //             .push(ACCOUNT);
    //     }

    // }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps)
  this.setState({loading: false})

    if (nextProps.auth.isAuthenticated) {
           
         if(nextProps.auth.user.Admin){
            history.push('/Admin');

        }
        else if(nextProps.auth.user.Admin===false && nextProps.auth.user.userCondition==="seller"  ){
            
            //  if( nextProps.auth.user.userCondition==="seller"){
           console.log(nextProps.auth.user)
           if(nextProps.auth.user.userCondition==="seller" ){
               history.push('/userNav/setting')
               toast.success("Successfully login!");   

           }
            // toast.success("Successfully login!");
        // }
        }
        
        else if(nextProps.auth.user.Admin===false && nextProps.auth.user.userCondition==="buyer"  ){

             if(nextProps.auth.user.userCondition==="buyer" ){
                history.push('/')
                toast.success("Successfully login!");   
         }

        }
         else{
            history.push('/')
        }
        // if( nextProps.auth.user.userCondition==="seller"){
        //    console.log(nextProps.auth.user.userCondition)
        //     history.push('/dashboard')
        // }
        // else if( this.props.auth.user.userCondition==="seller"){
       
        //  }

     
    }

    if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
            // console.log(this.state.errors)
            // if(this.state.errors==="passsword in corect"){
            //     toast.error("passsword in corect");
            // }
            // else if(this.state.errors==="user not found"){
            //     toast.error("user not found");
            // }else{
            //     toast.error("login first")
            // }
          }

  }
    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }




    // onSubmit=(e)=> {
      //     e.preventDefault();
      
      //     const userData = {
      //       email: this.state.email,
      //       password: this.state.password,
      
      //        token : this.props.match.params.token
          
      //       };
      // console.log(userData)
      //     this.props.loginUser(userData);




    onClickHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        // const {email, password} = this.state;

             const userData = {
            email: this.state.email,
            password: this.state.password,
      
             token : this.props.match.params.token
          
            };

            this.props.loginUser(userData);
      

    }

    render() {
        const {email, password, loading,checkbox} = this.state;
        const isnotValid = email === '' || password === '' ||checkbox===''|| loading;
        return (
            <div>         
                   <div style={{marginTop:"10vh"}}>
                <Grid container >
                    <Hidden smDown>
                        <Grid item xs={4} md={4}></Grid>
                    </Hidden>

                    <Grid item xs={12} md={4}>
                        <Paper    style={{padding:"100px"}} className="loginPaper" elevation={10} align="center">

                            {/* <Avatar
                                style={{
                                color: '#fff',
                                backgroundColor: pink[500]
                            }}>
                                <LockIcon/>
                            </Avatar> */}

<div className="Icon_signUp">

<div className=" aut_svg" >       
  <LockOutlinedIcon />
</div>
</div>
<Typography variant="h3" gutterBottom>
LogIn
</Typography>
<br/>  <br/>  <br/> 
                            
                            <Grid container spacing={8} className="LoginContainer">
                            {/* <h4 style={{color:"red"}} >{this.state.errors.message}</h4> */}
                        <Grid aitem xs={12} md={12} align="center">  {this.state.errors.message?<Alert severity="error">{this.state.errors.message}</Alert>:loading}</Grid>
                                <Grid item xs={12} md={12} className="paddingTop">
                                    <TextField
                                        type="email"
                                        name="email"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                               
                                                    <Email color="disabled" fontSize="large" className="iconFixfield" />
                                               
                                            </InputAdornment>
                                        )
                                    }}
                                        autoFocus={true}
                                        fullWidth={true}
                                        required={true}
                                        helperText=""
                                        placeholder="Email"
                                        onChange={this.onChangeHandler}/>
                                </Grid>
                                <Grid item xs={12} md={12} className="paddingTop">
                                    <TextField
                                        type="password"
                                        name="password"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                          
                                                    <Lock  color="disabled" fontSize="large"  className="iconFixfield"/>
                                                
                                            </InputAdornment>
                                        )
                                    }}
                                        fullWidth={true}
                                        required={true}
                                        placeholder="Password"
                                        onChange={this.onChangeHandler}/>
                                </Grid>

                                <Grid item xs={12} md={12} align="right" className="paddingTop">
                                    <FormControlLabel
                                        control={< Checkbox value = "checkedB" color = "primary" />}
                                       
                                        name="checkbox"
                                        onChange={this.onChangeHandler}
                                       
                                       label="Remember Me"/>
                                </Grid>

                                <Grid item xs={12} md={12} align="center">
                                    <Button
                                    size="large"  variant="text"  variant="contained"  fullWidth={true} color="primary"
                                        onClick={this.onClickHandler}
                                        disabled={isnotValid}
                                    
                                     
                                        className="loginbtn">
                                        {loading
                                            ? <CircularProgress size={20}/>
                                            : <span>
                                                Submit
                                                 
                                                    <Send className="iconSize submitIcon" />
                                              
                                            </span>
}
                                    </Button>
                                </Grid>
                                <Grid container spacing={12} className="paddingTop">
                                    <Grid item xs={12} md={12} className="paddingTop" align="right">
                                        <Typography variant="body2">
                                            <Link to='/signup'>Register</Link>
                                        </Typography>
                                   
                                        <Grid item>
                                <Typography variant="body2"> <Link to="/getEmail/forgot">Forgot your password?
                          </Link>  </Typography>
                          </Grid>
                                   
                                   
                                   
                                   
                                     
                                   
                                   
                                   
                                   
                                   
                                   
                                    </Grid>

                                </Grid>

                            </Grid>

                        </Paper>
                    </Grid>

                    <Hidden smDown>
                        <Grid item xs={4} md={4}></Grid>
                    </Hidden>
                </Grid>
            </div>
                <div><Footer/></div>
            </div>

        )
    }
}

Login.propTypes ={
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  
  errors:state.erorr,
  auth:state.auth, 
  
  // error: state.user.error
})

export default withRouter(connect(mapStateToProps, {loginUser})(Login));























































































// import React, { Component } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { render } from '@testing-library/react';
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import './toobar/toolbar.css'
// import SignUp from '../auth/signUp';
// import loginUser from '../../store/action/loginAction/loginaction'
// import { connect } from 'react-redux'; 
// import resetEmail from '../auth/reset/resetemail';
// // import axios from 'axios';
// import Paper from '@material-ui/core/Paper';
// // or
// // import { Paper } from '@material-ui/core';
// import Admin from '../adminpanal/admin';
// import './aut.css'








// class Login extends Component {

//   state = {
    
//       email: '',
//       password: '',
//      errors:''
//       };

 

//   handleChange = (event) => {
   
//     this.setState({[event.target.name] :event.target.value});
//   }

 
//   onSubmit=(e)=> {
//     e.preventDefault();

//     const userData = {
//       email: this.state.email,
//       password: this.state.password,

//        token : this.props.match.params.token
    
//       };
// console.log(userData)
//     this.props.loginUser(userData);

    


// //  const token = this.props.match.params.token;
//         // axios.post('/api/users/login/'+token,userData).then((res)=>{
//         //     console.log("backend",res)
//         //     history.push('/login');
//         // })
      


//   }



//   componentWillReceiveProps(nextProps) {


//     if (nextProps.auth.isAuthenticated) {
           
//          if(nextProps.auth.user.Admin){
//           this.props.history.push('/Admin');

//          }else{
//           this.props.history.push('/dashboard');
//          }

     
//     }

//     if (nextProps.errors) {
//       this.setState({errors:nextProps.errors})
//       console.log(this.state.errors)

//     }
//   }


//   componentDidMount() {
//     ValidatorForm.addValidationRule('isTruthy', value => value);
// }




//   render() {

  
// {console.log(this.state.errors)}
//     return (

//      <div  className="main_container"  >

// <div  style={{ marginTop: "20vh" }} >

// <Paper   className="mainPaper_form"   variant="outlined" square >
// <br/>  
// <br/>                
    
//                     <Container component="main" maxWidth="xs">
                   
//                       <div >
//                         <div className="Icon_signUp" >
//                           <div className="aut_svg"><LockOutlinedIcon /></div>  
                          
                          
//                           <h1>Log In</h1>
//                           <h4 style={{color:"red"}} >{this.state.errors.message}</h4>
//                         </div>
            
//                         <ValidatorForm
//                           ref="form"
//                           onSubmit={this.onSubmit}
//                           onError={errors => console.log(errors)}
//                         >
//                           <Grid container spacing={2}>
                           
//                             <Grid item xs={12}>
            
//                               <TextValidator
//                                 label="Email"
//                                 onChange={this.handleChange}
//                                 name="email"
//                                 variant="outlined"
//                                 // required
//                                 fullWidth
//                                 value={this.state.email}
//                                 validators={['required', 'isEmail']}
//                                 errorMessages={['this field is required', 'email is not valid']}
//                               />
//                             </Grid>
//                             <Grid item xs={12}>
//                               <TextValidator
//                                 variant="outlined"
//                                 // required
//                                 fullWidth
//                                 label="Password"
//                                 onChange={this.handleChange}
//                                 name="password"
//                                 type="password"
            
//                                 validators={['isTruthy']}
//                                 errorMessages={['this field is required']}
//                                 value={this.state.password}
//                               /></Grid>
                           
            
//                           </Grid>
            
            
//                           <Button
//                           style={{marginTop:"20px"}}
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                           >
//                             Log In
//                       </Button>
//                           <Grid container justify="flex-end">
                          
                          
//                             <Grid item>
//                              <div className="Link_text" > <Link to="/getEmail/forgot">Forgot your password?
//                           </Link></div>
//                           </Grid>
                          
//                           </Grid>
//                           <Grid item>
//                           <div className="Link_text" >
//                           if  you have no account:
//                           <Link to='/signup' variant="body2">
//                                 Create an account
//                           </Link>
//                           </div>
//                             </Grid>
//                         </ValidatorForm>
//                       </div>
//                       <Box mt={5}>
//                       </Box>
//                     </Container>
//                   </Paper>
// </div>
//      </div>
      
//       )
//   }
// }



// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps=(state)=>({
//   errors:state.erorr,
//   auth:state.auth
// })

// export default connect(mapStateToProps,{loginUser})(Login)