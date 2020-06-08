import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux'
import './productitem.css'
import { getProfilebyId  } from '../../../store/action/products/productaction'
import {addtoCartValue  } from '../../../store/action/cartAction/cartaction';
// ,getAllProduts
import ImageGallery from 'react-image-gallery';
import history from '../../history/history'
import { Button } from '@material-ui/core';
class Productitem extends Component {


    componentDidMount() {
        if (this.props.match.params.id) {

            this.props.getProfilebyId(this.props.match.params.id)
        }
    }

    
    
    addProductinCart=(id ,isauth)=>{
        if(!isauth.isAuthenticated===false){
            const cartId={
                id:id
            }
            
            this.props.addtoCartValue(cartId)
        }
else{
  
    history.push('/cartproductItems/loginbycart')
}
// this.props.getAllProduts()    
 

}
    
    
    changedData = (img) => {
        const containerSrc = this.refs.imageContainer.src

  this.refs.imageContainer.src="http://localhost:8080/"+img

    }






    render() {

        console.log(this.props.unique)

        const Images = this.props.SingleProduct===undefined||this.props.SingleProduct===null? <h1>show is noting</h1>:this.props.SingleProduct.ItemProduct.map((item) => {
         
            return (
                <div className="product-item">
                    <br />
                    <br />

    
                    <div className="item-slider">



                       <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[0]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[0]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[1]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[1]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[2]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[2]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[3]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[3]} /></div> 
                    </div>
                    <div className="space-between"></div>
                    <div className="big-card" >
                        <Card className="item-card"  >

                            <img ref='imageContainer' className="img_container" src={"http://localhost:8080/" + item.imgSrc[3]} alt="img1" />
                        </Card>

                    </div>
                    <div className="space-between"></div>
                    <div className="product_infomation" >
                       
                    <div className="pr-discription"  >
                    <h1 className="product_description">   {item.discription}</h1>
                    </div>
                    <br/>
                    <br/>
                 <div className="pr-price">   <h1 className="product_price" > <span className="price-text" >price</span> {item.price}$  </h1></div>
                 <br/>
                    <br/>
                 <div className="Deliverd"><h3 className="delivery-product" > Product Delikver after  the  complete satisfaction  </h3></div>
                  <br/>
                   <div className="addto_cart" ><Button size="large"  variant="text" variant="outlined"  fullWidth={true} color="primary"   onClick={()=>this.addProductinCart(item._id ,this.props.auth)}   >ADD TO CART</Button></div>
                    </div>
                  
                
                           
                     

                </div>
            )
        })


        return (
            <div className="container_product" >
                {Images}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    SingleProduct: state.ItempProduct,
    unique:state.allProducts.addedItems,
    auth:state.auth, 
})

export default connect(mapStateToProps, { getProfilebyId , addtoCartValue })(Productitem)



  