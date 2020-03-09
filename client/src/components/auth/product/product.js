import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import addproducts from '../../../store/action/products/productaction'

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../product/product.css'
import { connect } from 'react-redux';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            price: "",
            discount: "",
            productname: "",
            discription: "",
            category: "",



            files: []

        };
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const productData = {
            price:this.state.price,
            discount:this.state.discount,
            productname:this.state.productname,
            discription:this.state.discription,
            category:this.state.category,
            // files:this.state.files

            //   errors: null
        }

        let fd = new FormData();

        for(let item in productData){
            fd.append(item, productData[item]);
        }
        
        this.state.files.forEach((file)=>{
            fd.append('files', file)
        })


          this.props.addproducts(fd,this.props.history)

    }

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }

    ImageshandleChange = (files) => {
        this.setState({
            files: files
        });
    }

    handleSelectChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isTruthy', value => value);
    }



    render() {


    
        //  const { errorMessages,validators } = this.props;

        return (
            <div style={{ marginTop: "20vh" }} >
                <Grid item xs={false} sm={4} md={7} />
                <Container component="main" maxWidth="xs">

                    <div >
                        <div className="Icon_signUp" >
                            <div className=" aut_svg" >
                                <LockOutlinedIcon />
                            </div>

                            <h1>Your Product</h1>

                        </div>

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <TextValidator
                                        variant="outlined"


                                        label="Price"
                                        onChange={this.handleChange}
                                        name="price"
                                        type="Number"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.price}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextValidator
                                        variant="outlined"


                                        label="Discount Value"
                                        onChange={this.handleChange}
                                        name="discount"
                                        type="Number"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.discount}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextValidator
                                        variant="outlined"


                                        fullWidth
                                        label="Product Name"
                                        onChange={this.handleChange}
                                        name="productname"
                                        type="text"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.productname}
                                    />
                                </Grid>


                                <Grid item xs={12} sm={12}>
                                    <TextValidator
                                        variant="outlined"


                                        fullWidth
                                        label="Discription"
                                        onChange={this.handleChange}
                                        name="discription"
                                        type="text"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.discription}
                                    />
                                </Grid>


                                <Grid item xs={12} sm={12}>


                                    <Select
                                        fullWidth
                                        required
                                        placeholder="selectcategory"
                                        // labelId="demo-simple-select-label"
                                        // id="demo-simple-select"
                                        value={this.state.category}
                                        onChange={this.handleSelectChange}
                                    >

                                        <MenuItem value="gents">gents</MenuItem>
                                        <MenuItem value="WOMEN">WOMEN</MenuItem>
                                        <MenuItem value="CHILD">CHILD</MenuItem>
                                    </Select>





                                </Grid>

                                <Grid>

                                    <DropzoneArea
                                            maxFileSize={5000000}
                                          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                      filesLimit={5}
                                        onChange={this.ImageshandleChange}
                                    />
                                </Grid>







                            </Grid>

<br/>
<br/>
                            <Button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Submit  your Product
          </Button>

                        </ValidatorForm>
                    </div>

                    <Box mt={5}>
                    </Box>
                </Container>
            </div>)
    }
}

Product.propTypes = {
    //   registerUser: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    // errors:PropTypes.object.isRequired
};

 const mapStateToProps=(state)=>({
  

})


export default connect(mapStateToProps,{addproducts})(Product)
