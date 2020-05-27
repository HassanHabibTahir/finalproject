import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone'
import {Subtitles,Business,LocalAtm,CastConnected,Details,Attachment,AccountBox,LocationOn,Phone,Email} from '@material-ui/icons';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import {addproducts} from '../../../store/action/products/productaction'
import Verification from './Verification';
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
console.log(productData)
        let fd = new FormData();

        for(let item in productData){
            fd.append(item, productData[item]);
        }
        
        if(this.state.files.length<=3){
            alert("upload 4 imges")
            return false;
        }
        else{
        this.state.files.forEach((file)=>{
        
            fd.append('files', file)
        })
    }
console.log(fd)
          this.props.addproducts(fd,this.props.history)

    }

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }

    ImageshandleChange = (files) => {
  
//         files.forEach((f)=>{
//   console.log(f)
//         })
     
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
        const {price,discount,productname,discription,category,files} = this.state;
        const isnotValid = price === '' ||discount===''||productname===''||discription===''||category===''||files.length==='';
        return (
            <div style={{ marginTop: "20vh" }} >
                <Grid item xs={false} sm={4} md={7} />
             
                    <Container component="main" maxWidth="md">
                    <Paper  style={{padding:"20px"}} elevation={10} align="center" >

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
                                        placeholder="discount"
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
                    <option value="gents">
                    shirt
                    </option>
                    <option value="WOMEN">
                    pent
                    </option>
                    <option value="CHILD">
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
                    <option value="gents">
                    gents
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
                                          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                      filesLimit={5}
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
                    
            </div>
          
            
            )
    }
}

Product.propTypes = {

};

 const mapStateToProps=(state)=>({
    Verifiy:state.Verification.Userverified,
    auth:state.auth
})


export default connect(mapStateToProps,{addproducts}  )(Product)







































































// import React, { Component } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// // import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// // import Select from '@material-ui/core/Select';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import InputLabel from '@material-ui/core/InputLabel';
// import Container from '@material-ui/core/Container';
// import { DropzoneArea } from 'material-ui-dropzone'

// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import {addproducts} from '../../../store/action/products/productaction'
// import Verification from './Verification';
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import '../product/product.css'
// import { connect } from 'react-redux';

// class Product extends Component {
//     constructor() {
//         super();
//         this.state = {
//             price: "",
//             discount: "",
//             productname: "",
//             discription: "",
//             category: "",



//             files: []

//         };
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()

//         const productData = {
//             price:this.state.price,
//             discount:this.state.discount,
//             productname:this.state.productname,
//             discription:this.state.discription,
//             category:this.state.category,
//             // files:this.state.files

//             //   errors: null
//         }

//         let fd = new FormData();

//         for(let item in productData){
//             fd.append(item, productData[item]);
//         }
        
//         this.state.files.forEach((file)=>{
//             fd.append('files', file)
//         })

// console.log(fd)
//           this.props.addproducts(fd,this.props.history)

//     }

//     handleChange = (event) => {

//         this.setState({ [event.target.name]: event.target.value });

//     }

//     ImageshandleChange = (files) => {
//         this.setState({
//             files: files
//         });
//     }

//     handleSelectChange = (event) => {
//         this.setState({
//             category: event.target.value
//         })
//     }

//     componentDidMount() {
//         ValidatorForm.addValidationRule('isTruthy', value => value);
//     }



//     render() {

//         // console.log(this.props.auth.user)
//     // if((typeof(this.props.Verifiy)===null)||(typeof(this.props.Verifiy)===undefined)){

//     //     alert("this is null")

//     // } else if(this.props.Verifiy){

//     //      return(<h1  style={{marginTop:"80vh"}}>you account is under  review</h1>)

//     // }
   




// console.log(this.props.auth.user.isverified)

//         return (
//             <div style={{ marginTop: "20vh" }} >
//                 <Grid item xs={false} sm={4} md={7} />
//                 {/* {  this.props.auth.user.isverified===true? */}
//                     <Container component="main" maxWidth="xs">

//                     <div >
//                         <div className="Icon_signUp" >
//                             <div className=" aut_svg" >
//                                 <LockOutlinedIcon />
//                             </div>
                    
//                             <h1>Your Product</h1>
                    
//                         </div>
                    
//                         <ValidatorForm
//                             ref="form"
//                             onSubmit={this.handleSubmit}
//                             onError={errors => console.log(errors)}
//                         >
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6} sm={6}>
//                                     <TextValidator
//                                         variant="outlined"
                    
                    
//                                         label="Price"
//                                         onChange={this.handleChange}
//                                         name="price"
//                                         type="Number"
                    
//                                         validators={['isTruthy']}
//                                         errorMessages={['this field is required']}
//                                         value={this.state.price}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6} sm={6}>
//                                     <TextValidator
//                                         variant="outlined"
                    
                    
//                                         label="Discount Value"
//                                         onChange={this.handleChange}
//                                         name="discount"
//                                         type="Number"
                    
//                                         validators={['isTruthy']}
//                                         errorMessages={['this field is required']}
//                                         value={this.state.discount}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={12}>
//                                     <TextValidator
//                                         variant="outlined"
                    
                    
//                                         fullWidth
//                                         label="Product Name"
//                                         onChange={this.handleChange}
//                                         name="productname"
//                                         type="text"
                    
//                                         validators={['isTruthy']}
//                                         errorMessages={['this field is required']}
//                                         value={this.state.productname}
//                                     />
//                                 </Grid>
                    
                    
//                                 <Grid item xs={12} sm={12}>
//                                     <TextValidator
//                                         variant="outlined"
                    
                    
//                                         fullWidth
//                                         label="Discription"
//                                         onChange={this.handleChange}
//                                         name="discription"
//                                         type="text"
                    
//                                         validators={['isTruthy']}
//                                         errorMessages={['this field is required']}
//                                         value={this.state.discription}
//                                     />
//                                 </Grid>
                    
                    
//                                 <Grid item xs={12} sm={12}>
                    
                    
//                                     <Select
//                                         fullWidth
//                                         required
//                                         placeholder="selectcategory"
//                                         // labelId="demo-simple-select-label"
//                                         // id="demo-simple-select"
//                                         value={this.state.category}
//                                         onChange={this.handleSelectChange}
//                                     >
                    
//                                         <MenuItem value="gents">gents</MenuItem>
//                                         <MenuItem value="WOMEN">WOMEN</MenuItem>
//                                         <MenuItem value="CHILD">CHILD</MenuItem>
//                                     </Select>
                    
                    
                    
                    
                    
//                                 </Grid>
                    
//                                 <Grid>
                    
//                                     <DropzoneArea
//                                             maxFileSize={5000000}
//                                           acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
//                                       filesLimit={5}
//                                         onChange={this.ImageshandleChange}
//                                     />
//                                 </Grid>
                    
                    
                    
                    
                    
                    
                    
//                             </Grid>
                    
//                     <br/>
//                     <br/>
//                             <Button
//                                 style={{ marginTop: "20px" }}
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 color="primary"
//                             >
//                                 Submit  your Product
//                     </Button>
                    
//                         </ValidatorForm>
//                     </div>
                    
//                     <Box mt={5}>
//                     </Box>
//                     </Container>
                    
//                     {/* :<Verification/>
//                 }
//               */}
//             </div>
            
            
            
//             )
//     }
// }

// Product.propTypes = {
//     //   registerUser: PropTypes.func.isRequired,
//     // auth: PropTypes.object.isRequired,
//     // errors:PropTypes.object.isRequired
// };

//  const mapStateToProps=(state)=>({
//     Verifiy:state.Verification.Userverified,
//     auth:state.auth
// })


// export default connect(mapStateToProps,{addproducts}  )(Product)


































































