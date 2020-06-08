import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import history from '../../history/history'

 import { connect } from 'react-redux'; 
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {FavouritAdds} from '../../../store/action/products/productaction'
import {Link} from 'react-router-dom';
import './card.css'
 class ChildCard extends Component {



    addToFav=(fav ,auth)=>{
    console.log(fav)
        //     if(!auth.isAuthenticated===false){
    //    this.props.FavouritAdds(fav)
    //    alert(fav)
    //     }
    //     else{
    //       history.push('/login')
    //     }
      }








    changedData=(i,img)=>{
        // console.log(i)
        // const index = this.target.valaue
        // console.log(index)
        // .imageContainer.src
        const containerSrc = this.refs[i].src
          
        console.log("this is second",containerSrc)
        this.refs[i].src="http://localhost:8080/"+img
        // console.log(img) 
          }
        
    render() {
 const  Products = this.props
console.log(Products)



return    (

    <Card className="main">
    <Fab size="medium" color="secondary" aria-label="add" >
   {Products.price}$
          </Fab>
   <FormControlLabel
   fontSize="large"
   
   style={{float:"right"}}
   control={<Checkbox onClick = {()=>{this.addToFav(Products,this.props.auth)}} checked = {Products.fav ? true : false}  icon={<FavoriteBorder fontSize="large"  />} checkedIcon={<Favorite  fontSize="large" />} name="checkedH" />}
       
         />
   
   
   
   <div className="card_products">
     {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}
   
   <div className="top-section">
                                                               
   
      <center> <Link  to={`productitems/${Products._id}`}><img    ref = {Products._id}  valaue={Products.i}   className="img_container" src={"http://localhost:8080/"+Products.images[0]} alt="img1" /></Link></center>
   
   <div className="nav">
   
   <img    onClick={()=>{this.changedData( Products._id  ,Products.images[0])}}    ref = 'image'  src={"http://localhost:8080/"+Products.images[0]}/>
   <img    onClick={()=>{this.changedData(Products._id,Products.images[1])}}    ref = 'image' src={"http://localhost:8080/"+Products.images[1]}/>
   <img    onClick={()=>{this.changedData(Products._id,Products.images[2])}}    ref = 'image'  src={"http://localhost:8080/"+Products.images[2]}/>
   <img    onClick={()=>{this.changedData(Products._id,Products.images[3])}}    ref = 'image'  src={"http://localhost:8080/"+Products.images[3]}/>
   
   </div>
   
   <div className="prduct_info">
   
   <div  className="name_product"><h2>
{Products.productName}
   </h2>
   
   </div>
 <div className="dis">{Products.description}</div>
   
   </div>
   </div>
   
   
   </div>
   
                  </Card>
)
 
    }
}


  const mapStateToProps=(state)=>({
  
 
    auth:state.auth,

  
  })

  export default connect(mapStateToProps,{FavouritAdds})(ChildCard)