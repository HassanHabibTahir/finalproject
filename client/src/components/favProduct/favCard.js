import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 import {FavouritAdds} from '../../store/action/products/productaction'
// import './men.css'
 import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom';
 class FavCard extends Component {
    
    addToFav=(fav)=>{
        this.props.FavouritAdds(fav)
        alert(fav)
       }
    
    render() {
        const {fCard,index}= this.props
        console.log(fCard)



       
        return (
        //  <div></div>
            <Card className="main">

            <FormControlLabel
            fontSize="large"
            
            style={{float:"right"}}
            control={<Checkbox onClick = {()=>{this.addToFav(fCard)}} checked = {fCard.fav ? true : false}  icon={<FavoriteBorder fontSize="large"  />} checkedIcon={<Favorite  fontSize="large" />} name="checkedH" />}
                
                  />
            
            
            
            <div className="card_products">
              {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}
            
            <div className="top-section">
              
               <center>><img  className="img_container" src={"http://localhost:8080/"+fCard.imgSrc[0]} alt="img1" /></center>
            
            
            {/* <div className="nav"> */}
            
            {/* <img src={"http://localhost:8080/"+item.imgSrc[1]}/>
            <img src={"http://localhost:8080/"+item.imgSrc[2]}/>
            <img src={"http://localhost:8080/"+item.imgSrc[3]}/> */}
            
            {/* </div> */}
            
            <div className="product_info">
            
            <div  className="name_product"><h2>{fCard.productname.toUpperCase()}<span className="price">${fCard.price}</span></h2>
            
            </div>
            <div className="dis">{fCard.discription}</div>
            
            </div>
            </div>
            
            
            </div>
            
                           </Card>
        )
    }
}

export default connect(null,{FavouritAdds})(FavCard)