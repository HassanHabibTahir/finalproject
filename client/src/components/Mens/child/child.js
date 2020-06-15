import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
 import {getCategoryProduct,FavouritAdds} from '../../../store/action/products/productaction'
  import '../mens.css'
 import { connect } from 'react-redux';
 import Fab from '@material-ui/core/Fab'; 
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Checkbox from '@material-ui/core/Checkbox';
 import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
 import CheckBoxIcon from '@material-ui/icons/CheckBox';
 import Favorite from '@material-ui/icons/Favorite';
 import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 import history from '../../history/history'
 import {Link} from 'react-router-dom';
import ChildCard from '../card/card'
 class Child extends Component {



  componentDidMount (){

   

    this.props.getCategoryProduct({category:"CHILD"})
   
  
  } 
    

  addToFav=(fav ,auth)=>{
    if(!auth.isAuthenticated===false){
   this.props.FavouritAdds(fav)
  //  alert(fav)
    }
    else{
      history.push('/login')
    }
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
console.log(this.props.Products)
 const  MenProducts = this.props.Products

 let Prdouctsitems= MenProducts.filter(( item,index)=>{
  
  return item.category ===  "CHILD"

})
      let product= Prdouctsitems.map((item,i)=>{
        let id=item._id
// return (
//   <ChildCard 
            
//   images={item.imgSrc}
//   price={item.price}
//   description={item.discription}
//   productName = {item.productname}
//   category={item.category}
//   _id={item._id}
//   id={item._id}
//   i={i}
//   fav={item.fav}
// />
// )
return <Card className="main">
<Fab size="medium" color="secondary" aria-label="add" >
{item.price}$
      </Fab>
<FormControlLabel
fontSize="large"

style={{float:"right"}}
control={<Checkbox onClick = {()=>{this.addToFav(item,this.props.auth)}} checked = {item.fav ? true : false}  icon={<FavoriteBorder fontSize="large"  />} checkedIcon={<Favorite  fontSize="large" />} name="checkedH" />}
   
     />



<div className="card_products">
 {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}

<div className="top-section">
                                                           

  <center> <Link  to={`productitems/${item._id}`}><img    ref = {id}  valaue={i}    className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></Link></center>

<div className="nav">

<img    onClick={()=>{this.changedData( item._id  ,item.imgSrc[0])}} ref = 'image'  src={"http://localhost:8080/"+item.imgSrc[0]}/>
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[1])}}    ref = 'image' src={"http://localhost:8080/"+item.imgSrc[1]}/>
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[2])}}    ref = 'image'  src={"http://localhost:8080/"+item.imgSrc[2]}/>
<img    onClick={()=>{this.changedData(item._id,item.imgSrc[3])}}    ref = 'image'  src={"http://localhost:8080/"+item.imgSrc[3]}/>

</div>

<div className="prduct_info">

<div  className="name_product"><h2>{item.productname.toUpperCase()}
{/* <span className="price">${item.price}</span> */}
</h2>

</div>
<div className="dis">{item.discription}</div>

</div>
</div>


</div>

              </Card>
 
})


        return (
            <div className="mainvalue">
         
            {product}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
    Products:state.allProducts.AllusersProducts,
    auth:state.auth,

  
  })

  export default connect(mapStateToProps,{getCategoryProduct,FavouritAdds})(Child)