import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import CircularProgress from '@material-ui/core/CircularProgress';

import {withRouter} from 'react-router-dom';
import {Send,Email,Lock} from '@material-ui/icons';

// import { connect } from 'react-redux';
import history from '../../history/history'
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import resetEmail from '../auth/reset/resetemail';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';






import resetEmailUser from '../../../store/action/resetAction/resetaction'
import axios from 'axios';

import { connect } from 'react-redux'; 
// import {
//     Link
// }

 class ResetEmail extends Component {




    state = {

        email: '',
        errors: '',
        emailError:'',
        loading: false,
    };



    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }


    onClickHandler = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        const userData = {
            email: this.state.email,

        };
        console.log(userData)
        this.props.resetEmailUser(userData)

    }

    componentWillReceiveProps(nextProps) {

console.log(nextProps)

        if (nextProps.errors) {
            this.setState({emailError:nextProps.errors.message})
            console.log(this.state.emailError.message)
      
          }
    }




    render() {
        const {email,loading,emailError} = this.state;
        const isnotValid = email === ''||emailError !=='' ||loading;
        return (
            <div style={{ marginTop: "20vh" }} >
                <Container component="main" maxWidth="xs" >

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
                                    FormHelperTextProps={{error:true}}
                                        autoFocus={true}
                                        fullWidth={true}
                                        required={true}
                                        helperText=""
                                        placeholder="Email"
                                        helperText={emailError}
                                        onChange={this.handleChange}/>
                                </Grid>




  <Grid item xs={12} md={12} align="center" className="paddingTop" >
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


                        {/* </Grid> */}
                    {/* </ValidatorForm> */}


                </Container>
            </div>
        )
    }
}

ResetEmail.propTypes = {
    errors:PropTypes.object.isRequired,
    resetEmailUser:PropTypes.func.isRequired
};
const mapStateToProps=(state)=>({
    errors:state.erorr,
  })
export default connect(mapStateToProps,{resetEmailUser})(ResetEmail)