import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import {getuserallproducts,DeleteUserProduct} from '../../store/action/products/productaction'
import { connect } from 'react-redux'; 
import '../Mens/mens.css'
// import UserRoutes from './userNave/userNave'
import { Button } from '@material-ui/core';
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

class Dashboard extends Component {


  


componentDidMount (){
  this.props.getuserallproducts({user:this.props.auth.user})


} 
changedData=(i,img)=>{
// console.log(i)
// const index = this.target.valaue
// console.log(index)
// .imageContainer.src
  const containerSrc = this.refs[i].src
  
  console.log("this is second",containerSrc)
  this.refs[i].src=`${BURL}/`+img
  // console.log(img) 
}


DeleteProduct=(id)=>{

  let userData={
    user:this.props.auth.user,
    id:id
  }

 this.props.DeleteUserProduct(userData)
 
}

  render() {



let   profileItems = this.props.Products===undefined||this.props.Products===null? <h1>show is noting</h1>:this.props.Products.map((item, i) => {
          
  let id=item._id
  console.log(item.imgSrc[0])
  return (
    <div  className="main_container_card" >
               <Card className="main"  >

<div className="card_products">
  <div className="deleteButton"> <Button  onClick={()=>{this.DeleteProduct(item._id)}}   className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div>

<div className="top-section">
  
   <center> <img    ref = {id}  valaue={i}    className="img_container" src={`${BURL}/`+item.imgSrc[0]} alt="img1" /></center>


<div className="nav_images">

<img    onClick={()=>{this.changedData( item._id  ,item.imgSrc[0])}}    ref = 'image'  src={`${BURL}/`+item.imgSrc[0]} alt="userproduct"  />
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[1])}}    ref = 'image' src={`${BURL}/`+item.imgSrc[1]} alt="userproduct"   />
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[2])}}    ref = 'image'  src={`${BURL}/`+item.imgSrc[2]} alt="userproduct"   />
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[3])}}    ref = 'image'  src={`${BURL}/`+item.imgSrc[3]} alt="userproduct"   />
</div>

                  <div className="product_info">
                  <div className="name_product">


                    <div  ><h2 className="name_category">{item.category.toUpperCase()}

                    </h2>
                    </div>
                    <h2>{item.productname.toUpperCase()}

                    </h2>
                  </div>

                  <div className="dis">{item.discription}</div>

                </div>
</div>


</div>

               </Card>
               </div>
              )

        })
      
    return (
 
      <div className="container-product"  >
      <div className="mainvalue"   >
        {/* <UserRoutes/> */}
        {/* welcome */}
        {profileItems}
      </div>
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