import React, { Component } from 'react'
import path from 'path';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import {getuserallproducts,DeleteUserProduct} from '../../store/action/products/productaction'
import { connect } from 'react-redux'; 
import './userDashbo.css'
import axios from 'axios'; 
import { Button } from '@material-ui/core';

class Dashboard extends Component {


  


componentDidMount (){
  this.props.getuserallproducts({user:this.props.auth.user})


} 
changedData=(img)=>{

  const containerSrc = this.refs.imageContainer.src
  console.log("this is second",containerSrc)
  this.refs.imageContainer.src="http://localhost:8080/"+img
  console.log(img) 
}


DeleteProduct=(id)=>{

  // userData={

  // }

 this.props.DeleteUserProduct(id)
 
}

  render() {

console.log(this.props.Products)

let   profileItems = this.props.Products===undefined||this.props.Products===null? <h1>show is noting</h1>:this.props.Products.map((item, i) => {
              return (
               <Card className="main"  >

<div className="card_products">
  <div className="deleteButton"> <Button  onClick={()=>{this.DeleteProduct(item._id)}}   className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div>

<div className="top-section">
  
   <center> <img    ref = 'imageContainer'    className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></center>


<div className="nav">

<img    onClick={()=>{this.changedData(item.imgSrc[1])}}    ref = 'image'  src={"http://localhost:8080/"+item.imgSrc[1]}/>
<img    onClick={()=>{this.changedData(item.imgSrc[2])}}    ref = 'image' src={"http://localhost:8080/"+item.imgSrc[2]}/>
<img    onClick={()=>{this.changedData(item.imgSrc[3])}}    ref = 'image'  src={"http://localhost:8080/"+item.imgSrc[3]}/>

</div>

<div className="product_info">

<div  className="name_product"><h2>{item.productname.toUpperCase()}<span className="price">${item.price}</span></h2>

</div>
<div className="dis">{item.discription}</div>

</div>
</div>


</div>

               </Card>
              )

        })
      
    return (
      <div className="mainvalue"  style={{marginTop:'100px'}} >
        {/* welcome */}
        {profileItems}
      </div>
    )
  }
}

 
const mapStateToProps=(state)=>({
  
  Products:state.getuserproducts.UserProducts
 
  ,
  auth:state.auth,
  


})

export default connect(mapStateToProps,{getuserallproducts ,DeleteUserProduct})(Dashboard)