import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 import {FavouritAdds} from '../../store/action/products/productaction'
 import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
 import Fade from 'react-reveal/Fade';


 import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom';
import '../Mens/mens.css'
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
 class FavCard extends Component {
    
    addToFav=(fav,auth)=>{
    
        
        const userFavouritHandler={
            favpro:fav,
            auth:auth.user.id
        }
        this.props.FavouritAdds(userFavouritHandler,auth)


       }
    


       changedData=(i,img)=>{
        // console.log(i)
        // const index = this.target.valaue
        // console.log(index)
        // .imageContainer.src
        const containerSrc = this.refs[i].src
          
        console.log("this is second",containerSrc)
        this.refs[i].src=`${BURL}/`+ img
        // console.log(img) 
          }
        


    render() {
        const {fCard,index}= this.props
        console.log(fCard)


        let id=fCard?._id
       
        return (

          <Fade bottom cascade>
                    <div  className="main_container_card" >
          <Card className="main">
           <Fab size="medium" color="secondary" aria-label="add" >
          {fCard?.price}$
                 </Fab>
             <FormControlLabel
            fontSize="large"
            
            style={{float:"right"}}
            control={<Checkbox  fontSize="large" onClick = {()=>{this.addToFav(fCard,  this.props?.auth)}} checked = 'true'  icon={<FavoriteBorder fontSize="large"  />} checkedIcon={<Favorite  fontSize="large" />} name="checkedH" />}
                
                  />
          
          
          
          <div className="card_products">
            {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}
          
          <div className="top-section">
                                                                      
          
             <center> <Link  to={`/onlyproduct/productitems/${fCard?._id}`}><img    ref = {id}  valaue={index}    className="img_container" src={"http://localhost:8080/"+fCard?.imgSrc[0]} alt="cartproduct"/></Link></center>
          
          <div className="nav_images">
          
          <img  onClick={()=>{this.changedData( fCard?._id,fCard?.imgSrc[0])}}   ref = 'image'  src={`${BURL}/`+ fCard?.imgSrc[0]}  alt="cartproduct"/>
          <img    onClick={()=>{this.changedData(fCard?._id,fCard?.imgSrc[1])}}    ref = 'image' src={`${BURL}/`+ fCard?.imgSrc[1]} alt="cartproduct"/>
          <img    onClick={()=>{this.changedData(fCard?._id,fCard?.imgSrc[2])}}    ref = 'image'  src={`${BURL}/`+ fCard?.imgSrc[2]} alt="cartproduct"/>
          <img    onClick={()=>{this.changedData(fCard?._id,fCard?.imgSrc[3])}}    ref = 'image'  src={`${BURL}/`+ fCard?.imgSrc[3]} alt="cartproduct"/>
          
          </div>
          
          <div className="product_info">
                  <div className="name_product">


                    <div  ><h2 className="name_category">{fCard?.category.toUpperCase()}

                    </h2>
                    </div>
                    <h2>{fCard?.productname.toUpperCase()}

                    </h2>
                  </div>

                  {/* <div className="dis">{item.discription}</div> */}

                </div>
          </div>
          
          
          </div>
          
                         </Card>
                         </div>
                         </Fade>

        )
    }
}

FavCard.propTypes={
  auth:PropTypes.object.isRequired,
  FavouritAdds:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
  
    
    // unique:state.allProducts.UniqueItem
    auth:state.auth,

  
  })
export default connect(mapStateToProps,{FavouritAdds})(FavCard)


























