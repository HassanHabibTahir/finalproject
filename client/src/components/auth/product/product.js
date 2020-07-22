import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { ValidatorForm} from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
// import MenuItem from '@material-ui/core/MenuItem';

import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone'
import {Business,LocalAtm} from '@material-ui/icons';
import DescriptionIcon from '@material-ui/icons/Description';
import Paper from '@material-ui/core/Paper';
import {addproducts} from '../../../store/action/products/productaction'
import Verification from './Verification';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
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
            alerts:false,



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
            invalidImage:''
            // files:this.state.files

            //   errors: null
        }
console.log(productData)
        let fd = new FormData();

        for(let item in productData){
            fd.append(item, productData[item]);
        }
        
        if(this.state.files.length<=3){
          
            this.setState({
                alerts:true
            })
            return false;
        }
        else{
        this.state.files.forEach((file)=>{
        
            

            fd.append('files', file)
        })
    }
// console.log(fd)
          this.props.addproducts(fd,this.props.history)

    }

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }

    ImageshandleChange = (files) => {
  
        files.forEach((fil,i)=>{
console.log(fil.name)
if (!fil.name.match(/\.(jpg|JPG|jpeg|JPEG|webp|png|PNG|gif)$/)) {
            this.setState({ invalidImage: 'Please select valid image.' });
            return false;
          }
return fil
})
      

     
    //  else{
        this.setState({
            files: files
        });
    //  }
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
  console.log(this.state.alerts)

        const {price,discount,productname,discription,category,files} = this.state;
        const isnotValid = price === '' ||discount===''||productname===''||discription===''||category===''||files.length==='';
        return (
            <div>
             {this.props.auth.user.isverified===true?<div style={{ marginTop: "10vh" }} >
                
                <Grid item xs={false} sm={4} md={7} />
             
               <Container component="main" maxWidth="md">
                    <Paper  style={{padding:"20px"}} elevation={10} align="center" >
        <Grid>{this.state.invalidImage&&<Alert severity="error">{this.state.invalidImage}</Alert>}</Grid>
<Grid>{this.state.alerts&&<Alert severity="error">maximaum 4 images required</Alert>}</Grid>
                    <div>

                              <Grid item xs={12} md={12} className="paddingTop">
                                    <TextField
                                        name="price"
                                        type="Number"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                               
                                               <LocalAtm    fontSize="large" className="iconFixfield" />
                                               
                                            </InputAdornment>
                                        )
                                    }}
                                        autoFocus={true}
                                        fullWidth={true}
                                        required={true}
                                        helperText=""
                                        placeholder="price"
                                        value={this.state.price}
                                        onChange={this.handleChange}/>
                                </Grid>
                        
                                
                              <Grid item xs={12} md={12} className="paddingTop">
                                    <TextField
                                        name="discount"
                                        type="Number"
                                        InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                               
                                               <LocalAtm    fontSize="large" className="iconFixfield" />
                                               
                                            </InputAdornment>
                                        )
                                    }}
                                        autoFocus={true}
                                        fullWidth={true}
                                        required={true}
                                        helperText=""
                                        placeholder="Quantity"
                                        value={this.state.discount}
                                        onChange={this.handleChange}/>
                                </Grid>
                                {/* <Grid item xs={12} sm={12}> */}
                                <Grid item xs={12} md={12} className="paddingTop">
                  
                     
                  <Business className="iconFixfield mangaeWithSelect" />
                
                    <select name="productname" className="products-cate"
                    value={this.state.productname}
                    onChange={this.handleChange}
                    className="selectSignUp">
                    <option selected value="none">
                    Choose Product Name
                    </option>
                    <option value="shirt">
                    shirt
                    </option>
                    <option value="pent">
                    pent
                    </option>
                    <option value="jeans">
                    jeans
                    </option>
                   <option value="traditionalclothing" >
                   Traditional ClothingSuits
                   </option>
                   <option value="suits" >
                   suits 
                   </option>
                   <option value="dresess" >
                    Dresess
                   </option>
                    </select>
                    {/* <Divider /> */}
                  </Grid>
                                   
                    

                                <Grid item xs={12} md={12} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
    <DescriptionIcon/>
                         
                        
                        </InputAdornment>
                      ),
                    }}
                    name="discription"
                
                  autoFocus={true}
                  onChange={this.handleChange}
                  fullWidth={true}
                  placeholder="discription"
                  value={this.state.discription}
                  />
            </Grid>


                              
                    
                    <Grid item xs={12} md={12} className="paddingTop">
                  
                     
                  <Business className="iconFixfield mangaeWithSelect" />
                
                    <select name="category" className="products-cate"
                    value={this.state.category}
                    onChange={this.handleChange}
                    className="selectSignUp">
                    <option selected value="none">
                    Choose  Category
                    </option>
                    <option value="mens">
                    mens
                    </option>
                    <option value="WOMEN">
                    WOMEN
                    </option>
                    <option value="CHILD">
                    CHILD
                    </option>
                   
                    </select>
                    {/* <Divider /> */}
                  </Grid>
                                
                    
                                <Grid>
                              
                                    <DropzoneArea
                                            maxFileSize={5000000}
                                            // |webp|gif
                                          acceptedFiles={['image/jpeg','image/JPEG','image/png','image/PNG', 'image/bmp','image/jpg','image/JPG','image/webp','image/gif']}
                                      filesLimit={4}
                                        onChange={this.ImageshandleChange}
                                    />
                                </Grid>
                    
                    
                    
                    
                    
                    
                        
                    
                    <br/>
                    <br/>
                            <Button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                fullWidth
                                disabled={isnotValid}
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                            >
                                Submit  your Product
                    </Button>
                    
                    </div>
                    
                    <Box mt={5}>
                    </Box>
                    </Paper>
  
                    </Container>
                    
            </div>:<Verification/>}
            </div>
            
            )
    }
}

Product.propTypes = {
    auth:PropTypes.object.isRequired,
    addproducts:PropTypes.func.isRequired

};

 const mapStateToProps=(state)=>({
   
    auth:state.auth
})


export default connect(mapStateToProps,{addproducts}  )(Product)




























































