
  import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 import {FavouritAdds} from '../../store/action/products/productaction'
import history from '../history/history'
import '../Mens/mens.css'
import Fade from 'react-reveal/Fade';
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

return  (<Fade bottom cascade>
         <div  className="main_container_card" >
<Card className="main">
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
           

           <div className="top-section">


            <center> <Link to={`/onlyproduct/productitems/${item._id}`}><img ref={id} valaue={i} className="img_container" src={"http://localhost:8080/" + item?.imgSrc[0]} alt="serchproduct" /></Link></center>

            <div className="nav_images">

              <img onClick={() => { this.changedData(item._id, item.imgSrc[0]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[0]} alt="serchproduct" />
              <img onClick={() => { this.changedData(item._id, item.imgSrc[1]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[1]}  alt="serchproduct"/>
              <img onClick={() => { this.changedData(item._id, item.imgSrc[2]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[2]} alt="serchproduct" />
              <img onClick={() => { this.changedData(item._id, item.imgSrc[3]) }} ref='image'  src={"http://localhost:8080/" + item?.imgSrc[3]} alt="serchproduct"  />

            </div>

            <div className="product_info">
              <div className="name_product">


                <div  ><h2 className="name_category">{item.category.toUpperCase()}

                </h2>
                </div>
                <h2>{item.productname.toUpperCase()}

                </h2>
              </div>

            </div>
          </div>


        </div>

               </Card>
               </div>
                </Fade>)
             
 
})


        return (
          <div  className="container-product">
          <div className="mainvalue"   >
        
            {product}
          </div>
        
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