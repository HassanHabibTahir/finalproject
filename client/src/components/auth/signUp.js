import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';
import Divider from '@material-ui/core/Divider';
import pink from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import {withRouter} from 'react-router-dom';

import LOGIN from '../auth/login';
import InputAdornment from '@material-ui/core/InputAdornment';

import Map from '../auth/map/mapapi/mapapi';
import data from '../auth/map/pk/pk.json';


import './aut.css';
import './toobar/toolbar.css'




import {AccountCircle,Email,Lock,Send,StarHalf,LocationCity,Phone,Add} from '@material-ui/icons';

import {registerUser,startEmailVerification} from '../../store/action/userProfile/userPAction'


import CircularProgress from '@material-ui/core/CircularProgress';

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { connect } from 'react-redux'; 
import './toobar/toolbar.css'
import './aut.css'

// import Paper from '@material-ui/core/Paper';
class SignUp extends Component {

  constructor(props) {
      super(props)
      this.state = {
        
      name: "",
      product:"",
      email: '',
      password: '',
      repeatPassword: '',
      cellNo:'',
        address: '',
          city:'',
          cities:[],
          province:'',
          checkbox:'',
          emailError:'',
          passwordError:'',
          emailVarified:'',
          loading:false
      }
  }

  componentDidMount() {
    document.title = "Signup";
  }


//   componentWillReceiveProps(nextProps){
//     if(nextProps.errors){
//  this.setState({errors:nextProps.errors})
//     }
//     // if(nextProps.auth){
//     //   this.setState({
//     //     setUser:nextProps.auth.user
//     //   })
//     }
//   }



  componentWillReceiveProps(nextProps) {
      this.setState({loading:false});
    if(nextProps.err.message ==='email already in use'){
      this.setState({emailError:"Email already in use, please use another email"});
    
    }
    else{
      this.setState({emailError:''});
    }

    if(nextProps.userAccount ==='Account has been created!'){
      // this.props.history.push(LOGIN);
    }
    
  }

  onBlurEmailHandler = (e) =>{
    const {email} = this.state;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = re.test(String(email).toLowerCase());
  
  if(result){
    this.setState({emailError:''})
    this.props.startEmailVerification(email);
    
  }
  else{
    this.setState({emailError:"Please use correct email address!"})
  }
  
  }

  onBlurPasswordHandler = (e) =>{
    const {password,confirmpassword} = this.state; 
     if(confirmpassword !== ''){
      if(password !== confirmpassword){
        this.setState({passwordError:'Password does not match to the  confirm password!'})
      }
      else{
        this.setState({passwordError:''})
      }
    }
    else{
       this.setState({passwordError:''})
    }
  }

  onBlurConfirmPasswordHanlder=()=>{

    const {password,confirmpassword} = this.state; 
    if(password !== ''){
      if(password !== confirmpassword){
        this.setState({passwordError:'Confirm password does not match to the password!'})
      }
      else{
        this.setState({passwordError:''})
      }
    }
    else{
       this.setState({passwordError:''})
    }
    
  }


  onSubmitHandler=(e)=>{
    e.preventDefault();
    this.setState({loading:true});
    const {name,email,password,cellNo,address,city,province} = this.state;
    
          let userData = {
            name,
            email,
            password,
            cellNo,
            address,
            city,
            province,
          }
          console.log(userData)
      this.props.registerUser(userData);
    
     
  }
  
  onSelectHandler=(e)=>{
    let cities=[]
   cities = data.filter((item)=> item.admin === e.target.value);
    this.setState({
      province:e.target.value,
      cities
    })
  }

  onChangeHandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({[name]: value});
  }
 getAddress=(address)=>{
    this.setState({address})
 }
  render() {
    console.log(this.props.err)
    const {cities,name,email,password,confirmpassword,cellNo,address,city,province,checkbox,emailError,passwordError,loading} = this.state;
    const isvalid = name ==='' || email ==='' || password ==='' || confirmpassword ==='' || cellNo ==='' || address ==='' ||  city ===''||province===''|| checkbox===''  || emailError !=='' || passwordError !== '' || loading; 
      return (
          <div  style={{marginTop:"10vh" ,padding:"100px"}} >
              <Grid container spacing={8}   > 
              <Hidden smDown>
              <Grid item xs={4} md={3}> 
              </Grid>
              </Hidden>
              
               <Grid item xs={12} md={6}>
                 <Paper  style={{padding:"100px"}} className="loginPaper" elevation={10} align="center">
                   
                 


          
             <div className="Icon_signUp">

              <div className=" aut_svg" >       
                <LockOutlinedIcon />
   </div>
</div>
<Typography variant="h3" gutterBottom>
        SignUp
      </Typography>
<br/>  <br/>  <br/> 

                 {/* <Avatar   className="paddingTop" style={{color: '#fff',backgroundColor: pink[500],}} >
                 
                  <AccountCircle fontSize="large" className="largeIcon"/>
                 
                        </Avatar>  */}
                     
                     
                   <Grid container spacing={8} className="LoginContainer"> 
                     <Grid item xs={12} md={6} className="paddingTop">
                     <TextField
              
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                     
                        <AccountCircle color="disabled"  fontSize="large" className="iconFixfield" />
                        
                      </InputAdornment>
                    ),
                  }}
                fullWidth={true}
                required={true}
                autoFocus={true}
                placeholder="Name"
                name="name"
                onChange={this.onChangeHandler}
                />
                    
                    

                     </Grid>
                     <Grid item xs={12} md={6} className="paddingTop">
                     <TextField
                     type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                     
                            <Email fontSize="large" color="disabled" className="iconFixfield"/>
                        
                      </InputAdornment>
                    ),
                  }}
                fullWidth={true}
                required={true}
                FormHelperTextProps={{error:true}}
                helperText={emailError}
                placeholder="email"
                name="email"
                onBlur={this.onBlurEmailHandler}
                onChange={this.onChangeHandler}
                />
                     </Grid>
                  
                  <Grid item xs={12} md={6} className="paddingTop">
                  <TextField
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                     
                            <Lock  fontSize="large" color="disabled" className="iconFixfield"/>
                        
                      </InputAdornment>
                    ),
                  }}
                type="password"
                fullWidth={true}
                required={true}
                placeholder="Password"
                onBlur={this.onBlurPasswordHandler}
                name="password"
                FormHelperTextProps={{
                  error:true
                }}
                helperText={passwordError}
                onChange={this.onChangeHandler}
                />
                  </Grid>

                   <Grid item xs={12} md={6} className="paddingTop">
                  <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                      
                            <Lock fontSize="large" color="disabled" className="iconFixfield"/>
                        
                      </InputAdornment>
                    ),
                  }}
                type="password"
                fullWidth={true}
                FormHelperTextProps={{
                  error:true
                }}
                onBlur={this.onBlurConfirmPasswordHanlder}
                required={true}
                helperText={passwordError}
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={this.onChangeHandler}
                />
                  </Grid>

                    <Grid item xs={12} md={12} className="paddingTop">
                  <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                    
                            <Phone fontSize="large" color="disabled" className="iconFixfield" />
                      
                      </InputAdornment>
                    ),
                  }}
              
                fullWidth={true}
                required={true}
                placeholder="Mobile No."
                name="cellNo"
                onChange={this.onChangeHandler}
                />
                  </Grid>

                  <Grid item xs={12} md={12} className="paddingTop">
                    <Map fontSize="large" color="disabled"  underline={false} sendAddress={this.getAddress}/>
                  </Grid>
                  
                  <Grid item xs={12} md={12} className="paddingTop">
                
                
                  <Add   fontSize="large" color="disabled" className="iconFixfield mangaeWithSelect"/>

                        
                    <select name="province"
                    onChange={this.onSelectHandler}
                    className="selectSignUp">
                    <option selected disabled value="none">
                    Choose your province
                    </option>
                    <option value="Sindh">
                    Sindh
                    </option>
                    <option value="Punjab">
                    Punjab
                    </option>
                    <option value="Khyber Pakhtunkhwa">
                    Khyber Pakhtunkhwa
                    </option>
                    <option value="Islāmābād">
                    Islāmābād
                    </option>
                    <option value="Balochistān">
                    Balochistān
                    </option>
                    <option value="Gilgit-Baltistan">
                    Gilgit-Baltistan
                    </option>
                    <option value="Federally Administered Tribal Areas">
                    Federally Administered Tribal Areas
                    </option>
                    <option value="Federally Administered Tribal Areas">
                    Azad Kashmir
                    </option>
                    </select>
                    <Divider />
                  </Grid>
                   {cities.length>0 ? 
                   <Grid item xs={12} md={12} className="paddingTop">
                     
                 
                  <LocationCity color="disabled" fontSize="large" className="iconFixfield mangaeWithSelect"/>
                   
                    <select name="city" 
                    onChange={this.onChangeHandler}
                    className="selectSignUp">
                    <option selected disabled value="none">
                    Choose your City
                    </option>
                    {cities.map((item,i)=>{
                      return(
                    <option key={i} value={item.city}>
                     {item.city}
                    </option>)
                    })}
                    </select>
                    <Divider />
                   </Grid>
                   :<div></div>}

                   <Grid item xs={12} md={12} className="paddingTop">
                   <TextField
                   readOnly
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                       
                        <StarHalf fontSize="large" color="disabled" className="iconFixfield"/>
                        
                      </InputAdornment>
                    ),
                  }}
                
                type="text"
                fullWidth={true}
                required={true}
                value="Pakistan"
    
                />
                     </Grid>

                     <Grid item xs={12} md={12} className="paddingTop">
                       <Typography variant="caption" > 
                       <FormControlLabel
                       control={< Checkbox 
                       name="checkbox"
                       onChange={this.onChangeHandler}
                       value = "checkedB" color = "primary" />}/>
                       Gobachi is amazing plateform where the factories  sales the products 
                       </Typography>
                     </Grid>
                     <Grid item xs={12} md={12} align="center" className="paddingTop">
                                      <Button
                                      size="large"  variant="text" variant="outlined"  fullWidth={true} color="primary"
                                      onClick={this.onSubmitHandler}
                                      disabled={isvalid}
                                      type="submit"
                                      variant="contained" size="small" color="primary" className="singUpBtn">
                                          {
                                          loading ?
                                          <CircularProgress size={20} />
                                          :
                                          <span>
                                          Submit
                                        
                                              <Send className="iconSize submitIcon"/>
                                         
                                          </span>
                                        }
                                      </Button>
                                  </Grid>
                   </Grid>
               
                 </Paper> 
               </Grid>

              <Hidden smDown>
              <Grid item xs={4} md={3}> 
              </Grid>
              </Hidden>
              </Grid>
          </div>
      )
  }
}

const mapStateToProps = state => ({

  // emailVerification:state.user.emailVerification,
// userAccount :state.user.userAccount,
// err:state.user.signupErr
err:state.erorr,
  // auth:state.auth
})

export default withRouter(connect(mapStateToProps,{registerUser,startEmailVerification})(SignUp));
// {registerUser,startEmailVerification}




























////////////////////////////////////////////////////////////////////////////




// import React, { Component } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { render } from '@testing-library/react';
// import {AccountCircle,Email,Lock,Send,StarHalf,LocationCity,Phone,Add} from '@material-ui/icons';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import registerUser from '../../store/action/userProfile/userPAction'
// import Map from './map/mapapi/mapapi'
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

// import { connect } from 'react-redux'; 
// import './toobar/toolbar.css'
// import './aut.css'
// import Paper from '@material-ui/core/Paper';
// import Paper from '@material-ui/core/Paper';
//  class SignUp extends Component {
// constructor(){
//   super();
//   this.state = {
   
//       name: "",
//       product:"",
//       email: '',
//       password: '',
//       repeatPassword: '',
//       PhoneNumber:'',
//       phone:''
    
//   };
// }
// handleSubmit=(e)=>{
//   e.preventDefault()
  
//   const newUser = {
//   name:this.state.name,
//   email:this.state.email,
//   password:this.state.password,
//   product:this.state.product,
//   PhoneNumber:this.state.PhoneNumber,
  
//   errors: null,
//   setUser:null
//   }
  
//   this.props.registerUser(newUser,this.props.history)
  
//     }
  
//   componentDidMount() {
//     // custom rule will have name 'isPasswordMatch'
//     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//       if (value !== this.state.password) {
//         return false;
//       }
//       return true;
//     });
//   }
//   componentWillUnmount() {
//     // remove rule when it is not needed
//     ValidatorForm.removeValidationRule('isPasswordMatch');
    
//   }

//   handleChange = (event) => {
 
//     this.setState({ [event.target.name]: event.target.value });

//   }


//   componentWillReceiveProps(nextProps){
//     if(nextProps.errors){
//  this.setState({errors:nextProps.errors})
//     }
//     if(nextProps.auth){
//       this.setState({
//         setUser:nextProps.auth.user
//       })
//     }
//   }


// //   componentDidMount() {
// //     ValidatorForm.addValidationRule('isTruthy', value => value);
// // }

//   render() {
//     console.log(this.state.setUser)
//       const {errors} = this.state;
//       console.log(errors)
//     return (

//       <div  className="main_containerSignUp"  >

//       <div  style={{ marginTop: "20vh" }} >
      
//       <Paper  maxWidth="lg"  variant="outlined" square >
    
//         <Container component="main" maxWidth="sm">
//     <br/>
//     <br/> 
//           <div >
//             <div className="Icon_signUp" >
//               <div className=" aut_svg" >
//                 <LockOutlinedIcon />
//               </div>
              
//               <h1>Sign up</h1>
//     <h3 style={{color:"red"}} >{this.state&&<div>{this.state.setUser}</div>}</h3>
//               <h3 style={{color:"red"}} >  { errors&&<div>{errors.message}</div>}</h3>
//             </div>

//             <ValidatorForm
//               ref="form"
//               onSubmit={this.handleSubmit}
//               onError={errors => console.log(errors)}
//             >
//               <Grid container spacing={2}>

            
//                 <Grid item xs={12} sm={12}>
          
//                   <TextValidator
//                     variant="outlined"
//                     // required
//                     fullWidth
//                     label="Name"
//                     onChange={this.handleChange}
//                     name="name"
//                     type="text"
                
//                     validators={['required']}
//                     errorMessages={['this field is required']}
//                     value={this.state.name}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>

//                   <TextValidator
//                     label="Email"
//                     onChange={this.handleChange}
//                     name="email"
//                     variant="outlined"
//                     // required
//                     fullWidth
//                     value={this.state.email}
//                     validators={['required', 'isEmail']}
//                     errorMessages={['this field is required', 'email is not valid']}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextValidator
//                     variant="outlined"
//                     // required
//                     fullWidth
//                     label="Password"
//                     onChange={this.handleChange}
//                     name="password"
//                     type="password"

//                     validators={['required']}
//                     errorMessages={['this field is required']}
//                     value={this.state.password}
//                   />
//                 </Grid>
//                 <Grid item xs={12}> <TextValidator

//                   variant="outlined"
//                   // required
//                   fullWidth
//                   label="Repeat password"
//                   onChange={this.handleChange}
//                   name="repeatPassword"
//                   type="password"
//                   // validators={['required']}
//                   validators={['isPasswordMatch', 'required']}
//                   errorMessages={['password mismatch', 'this field is required']}
//                   value={this.state.repeatPassword}
//                 />
//                     {/* {this.state.password!==this.state.repeatPassword&&<p style={{color:'red'}}>password did not match </p>} */}
//                 </Grid>
         
//                 <Grid item xs={12} md={12} className="paddingTop">
//                       <Map underline={false} sendAddress={this.getAddress}/>
//                     </Grid>

//                 <Grid item xs={12} sm={12}>
//                   <TextValidator
//                     variant="outlined"
//                     // required
//                     fullWidth
//                     label="Product"
//                     onChange={this.handleChange}
//                     name="product"
//                     type="text"

//                     validators={['required']}
//                     errorMessages={['this field is required']}
//                     value={this.state.product}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
                  
//                   <TextValidator
//                     variant="outlined"
//                     // required
//                     fullWidth
//                     label="Number"
//                     onChange={this.handleChange}
//                     name="PhoneNumber"
//                     type="number"

//                     validators={['required']}
//                     errorMessages={['this field is required']}
//                     value={this.state.PhoneNumber}
//                   />
//                 </Grid>



//               </Grid>


//               <Button
//                 style={{ marginTop: "20px" }}
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//               >
//                 Sign Up
//           </Button>
//               <Grid container justify="flex-end">
//                 <Grid item>
//                 <span className="Link_text" >
//                   <Link to="/login" variant="body2">
//                     Already have an account? Sign in
//               </Link>
//               </span>
//                 </Grid>
//               </Grid>
//             </ValidatorForm>
//           </div>
          
//           <Box mt={5}>
//           </Box>
//         </Container>
//       </Paper>
//       </div></div>
//       )
//   }
// }

// SignUp.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   // auth: PropTypes.object.isRequired,
//     errors:PropTypes.object.isRequired
// };

//  const mapStateToProps=(state)=>({
//   errors:state.erorr,
//   auth:state.auth

// })


// export default connect(mapStateToProps,{registerUser})(SignUp)