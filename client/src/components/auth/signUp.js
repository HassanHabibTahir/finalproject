
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import {withRouter} from 'react-router-dom';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

// import LOGIN from '../auth/login';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import history from '../history/history'
import Map from '../auth/map/mapapi/mapapi';
import data from '../auth/map/pk/pk.json';
import Footer from '../home/paralelx/footer/footer'
import FormControl from '@material-ui/core/FormControl';


import {AccountCircle,Email,Lock,Send,StarHalf,LocationCity,Phone,Add} from '@material-ui/icons';

import {registerUser,startEmailVerification} from '../../store/action/userProfile/userPAction'

import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

import { connect } from 'react-redux'; 
import './toobar/toolbar.css'
import './aut.css'

// import Paper from '@material-ui/core/Paper';




// const styles = {
//   root: {
//     color: green[600],
//     '&$checked': {
//       color: green[500],
//     },
//   },
//   checked: {},
// };


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
          cellNumberError:'',
          passwordError:'',
          
          emailVarified:'',
          loading:false,
          buyer: '',
          seller:'',
          userCondition:null,
          checkedA: true,
          checkedB: true,
          passwrdStrong:'',
          currentLocation: {
            latitude: 0.0,
            longitude: 0.0
          }
      }
  }
  handleChangeCondition = event => {
    this.setState({ userCondition: event.target.value });
  };
  componentDidMount() {
 this.getLoctions()
  }


getLoctions=async()=>{
    await  navigator.geolocation.getCurrentPosition(
  (position) => {
    let lat = position.coords.latitude
    let lng = position.coords.longitude
    console.log("getCurrentPosition Success " + lat + lng) // logs position correctly
    this.setState({
      currentLocation: {
        latitude: lat,
        longitude: lng
      }
    })
  },
  (error) => {
    this.props.displayError("Error dectecting your location");
    console.error(JSON.stringify(error))
  },
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
)
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
      this.setState({emailError:''})
    }
     if(nextProps.err.message ==='account is created'){
      history.push('/login')
    }
     if(nextProps.err.message.password==="Password must be at least 6 characters"){
       debugger;
      this.setState({
        passwrdStrong:nextProps.err.message.password
      })
    } 
    // if(nextProps.auth.user){
    //   history.push('/login')
    // }
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




  onBlurNumberHandler=(e)=>{
    const {cellNo} = this.state;
    const re = /^[0-9\b]+$/;
    let result = re.test(cellNo);
    if (result) {
      this.setState({cellNumberError:''})
   }
   else{
    this.setState({cellNumberError:"Please use correct Number!"})
   }
  }




  onBlurPasswordHandler = (e) =>{
    const {password,confirmpassword} = this.state; 
    // const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      //  const  re = /^\w+$/; 
    if(confirmpassword !== ''){
      if(password !== confirmpassword){
        this.setState({passwordError:'Password does not match to the  confirm password!'})
      } 
    
      
      // if(!re.test(password)) {
      //   this.setState({passwordError:"Error: Username must contain only letters, numbers and underscores!"});
           
            
      // }
    
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
    const {name,email,password,cellNo,address,city,province,userCondition,currentLocation} = this.state;
    
          let userData = {
            name,
            email,
            password,
            cellNo,
            address,
            city,
            province,
            userCondition,
            currentLocation
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
 console.log(this.state.currentLocation)
    const {cities,name,email,password,confirmpassword,cellNo,address,city,province,checkbox,emailError,passwordError,loading,userCondition,cellNumberError} = this.state;
    const isvalid = name ==='' || email ==='' || password ==='' || confirmpassword ==='' || cellNo ==='' || address ==='' ||  city ===''||province===''|| checkbox===''  || emailError !=='' ||cellNumberError!==''|| passwordError !== '' || loading||userCondition==null; 
      return (
        <div>          <div  style={{marginTop:"10vh"}} >
              <Grid container   > 
              <Hidden smDown>
              <Grid item xs={4} md={3}> 
              </Grid>
              </Hidden>
              
               <Grid item xs={12} md={6}>
                 <Paper   className="loginPaper" elevation={10} align="center">
                   
                 


          
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
                   <Grid aitem xs={12} md={12} align="center">  {this.state?.passwrdStrong==="Password must be at least 6 characters"?<Alert severity="error">{this.state?.passwrdStrong}</Alert>:loading}</Grid>
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
                FormHelperTextProps={{error:true}}
                helperText={cellNumberError}
                onChange={this.onChangeHandler}
                onBlur={this.onBlurNumberHandler}
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
              

              
                     <Grid align="center"   item xs={12} md={12} >
          
                     <Typography variant="caption" > 
                    
                     <FormControl  align="center" >
                     Check UserCondition
           <Grid  align="center" item xs={12} md={6}>
             
           <FormControlLabel value="male" control={   <Radio
          checked={this.state.userCondition === 'seller'}
          onChange={this.handleChangeCondition}
          value="seller"
          name="sel"
          aria-label="A"
    
        />} label="SELLER" />

            
        </Grid>
     
        <Grid  align="center" item xs={12} md={6}  >

        <FormControlLabel value="male" control={

<Radio
          checked={this.state.userCondition==='buyer'}
          onChange={this.handleChangeCondition}
          value="buyer"
          name="buy"
          aria-label="B"
        />


        } label="BUYER" />

        </Grid>
     
</FormControl>

        </Typography>   
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
          <div><Footer/></div>
          </div>

      )
  }
}
SignUp.propTypes={
  startEmailVerification: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  err: PropTypes.object.isRequired
}

const mapStateToProps = state => ({

  // emailVerification:state.user.emailVerification,
// userAccount :state.user.userAccount,
// err:state.user.signupErr
err:state.erorr,
  auth:state.auth
})

export default withRouter(connect(mapStateToProps,{registerUser,startEmailVerification})(SignUp));
// {registerUser,startEmailVerification}



