import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import resetEmailUser from '../../../store/action/resetAction/resetaction'
import axios from 'axios';
import { connect } from 'react-redux'; 
// import {
//     Link
// }

 class resetEmail extends Component {




    state = {

        email: '',
        errors: ''
    };



    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,

        };
        this.props.resetEmailUser(userData)

    }

    componentWillReceiveProps(nextProps) {

console.log(nextProps)

        if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
            console.log(this.state.errors)
      
          }
    }




    render() {
        return (
            <div style={{ marginTop: "20vh" }} >
                <Container component="main" maxWidth="xs" >
               
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <Grid container spacing={2} >
                        <h4 style={{color:"red"}} >{this.state.errors.message}</h4>
                            <TextValidator
                                label="Email"
                                onChange={this.handleChange}
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                value={this.state.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />


                            <Button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Send To Email
          </Button>

                        </Grid>
                    </ValidatorForm>


                </Container>
            </div>
        )
    }
}


const mapStateToProps=(state)=>({
    errors:state.erorr,
  })
export default connect(mapStateToProps,{resetEmailUser})(resetEmail)