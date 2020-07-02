// import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
// class SerchProduct extends Component {


//   render() {
//     console.log("componetn",this.props.serchProducts)
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


// const mapStateToProps = state => ({
  
//    serchProducts:state.SERCHPRODUCT
    
   
//   })

  
//   export default withRouter(connect(mapStateToProps)(SerchProduct));
  



  import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 import {FavouritAdds} from '../../store/action/products/productaction'
import history from '../history/history'
// import MenCard from '../card/card'

 import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom';
 class SerchProduct extends Component {

   addToFav=(fav ,auth)=>{

    if(!auth.isAuthenticated===false){

      const userFavouritHandler={
        favpro:fav,
        auth:auth.user.id
      }
       
   this.props.FavouritAdds(userFavouritHandler,auth)
  //  alert(fav)
  console.log(fav)
  // console.log(auth.user.id)
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
console.log(this.props.serchProducts)
 const  MenProducts = this.props.serchProducts

//  let Prdouctsitems= MenProducts.filter(( item,index)=>{
  
//       return item.category ===  "gents"
  
// })
// console.log(Prdouctsitems)
  let product= MenProducts.map((item,i)=>{
    let id=item._id


// return(
//   <MenCard 
            
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

return    <Card className="main">
 <Fab size="medium" color="secondary" aria-label="add" >
{item.price}$
       </Fab>
<FormControlLabel
fontSize="large"

style={{float:"right"}}

//  we dont use retuen method  of likes product becase we only  like product in the  
// checked = {item.fav? true : false}

control={<Checkbox onClick = {()=>{this.addToFav(item,this.props.auth)}}   checked = {item.fav? true : false}  icon={<FavoriteBorder fontSize="large"  />} checkedIcon={<Favorite  fontSize="large" />} name="checkedH" />}
    
      />



<div className="card_products">
  {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}

<div className="top-section">
                                                            

<center> <Link  to={`/product/productitems/${item._id}`}><img    ref = {id}  valaue={i}    className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></Link></center>

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
            <div className="mainvalue"   >
        
            {product}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
  serchProducts:state.SERCHPRODUCT.searchproducts,
    // unique:state.allProducts.UniqueItem
    auth:state.auth,

  
  })

  export default connect(mapStateToProps,{FavouritAdds})(SerchProduct)