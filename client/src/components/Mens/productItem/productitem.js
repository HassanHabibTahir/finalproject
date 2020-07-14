import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux'
import { getProfilebyId } from '../../../store/action/products/productaction'
import { addtoCartValue } from '../../../store/action/cartAction/cartaction';
// ,getAllProduts
// import ImageGallery from 'react-image-gallery';
import history from '../../history/history'
import { Button } from '@material-ui/core';
import ChatPopUp from '../../Chat/chatPopUp';
import './productitem.css'
class Productitem extends Component {
constructor(props){
    super(props);
    this.state={
        chatPopUp:false,
        DItems:[]
    }
}

    componentDidMount() {
        if (this.props.match.params.id) {
console.log("this ",this.props.match.params.id)
            this.props.getProfilebyId(this.props.match.params.id)
        }
    }



    addProductinCart = (id, isauth) => {
        if (!isauth.isAuthenticated === false) {
            const cartId = {
                id: id
            }
console.log(cartId)
            this.props.addtoCartValue(cartId)
        }
        else {

            history.push('/cartproductItems/loginbycart')
        }
        // this.props.getAllProduts()    


    }


    changedData = (img) => {
        const containerSrc = this.refs.imageContainer.src

        this.refs.imageContainer.src = "http://localhost:8080/" + img

    }


componentWillReceiveProps(nexprops){

}



    render() {

        console.log(this.props.unique)

        const Images = this.props.SingleProduct === undefined || this.props.SingleProduct === null ? <h1>show is noting</h1> : this.props.SingleProduct.ItemProduct.map((item) => {
                     
            return (
                <div className="product-item">
                 
        
<div class="container-of_items ">
  <div class="box_items">
    <img src={"http://localhost:8080/" + item.imgSrc[0]} />
    {/* <span>CSS</span> */}
  </div>
  <div class="box_items">
    <img src={"http://localhost:8080/" + item.imgSrc[1]} />
    {/* <span>Image</span> */}
  </div>
  <div class="box_items">
    <img src={"http://localhost:8080/" + item.imgSrc[2]} />
    {/* <span>Hover</span> */}
  </div>
  <div class="box_items">
    <img src={"http://localhost:8080/" + item.imgSrc[3]} />
    {/* <span>Effect</span> */}
  </div>
</div>
                    <div className="product_infomation" >

                      {/* <div className="pr-discription"  >
                            <h1 className="product_description" >Descriptio</h1>
                            <h1 className="product_description">   {item.discription}</h1>
                        </div>  */}
                    
    
                      
                      
                      <div className="addto_box">
                      <div className="Deliverd"><div className="delivery-product" >
                        <h1 className="product_description">
                            {/* <span className="desc_ription" >Description</span> */}
                       
                        </h1>
Welcome to choosing factory products 
 Gobachi plate form hav many garments  factory products  in whic many seller  uploads their  products  and they selles theirproduct  , beacuse in this plate form  only Factor  person display their  prodcus or any Seller whow wanna to sell their  prodcts ,
  it is depending upone the satiscfaction between seller and buyer   A seller is responsible for initiating sales conversations and making the selling process easy for customers. They work in various settings, especially retail stores or service centers.

                 </div></div>
 

 <div className="description_auanttiy"  >
 <div className="checkout-container" > <h1  ><span className="total_product" >Discription</span></h1></div> 
     
                    <div className="checkout-container" > <h1  >{item.discription}</h1></div> 
 
 <div className="checkout-container" > <h1  ><span className="total_product" >Total:</span> <span className="total_price">${item.price}</span></h1></div> 
 <div className="checkout-container" > <h1  ><span className="total_product" >ITEMS:</span> <span className="total_price">{item.discount}</span></h1></div> 
 <div className="checkout-container" > <h1  >if you like this product you can CHAT with seller and   do add to cart</h1></div> 
     
      <div className="checkout-out-product" > <button onClick={() => this.addProductinCart(item._id, this.props.auth)}   >ADD to CART</button> </div> 
      {/* <div className="checkout-container" > <h1  > you can chat with seller</h1></div>  */}
     <div className="checkout-out-product" > <button   onClick={e=>handleChat(true)}   >CHAT WITH SELLER</button> </div> 
      {/* <h1  > {item.discription}</h1> */}
 </div>
 <div>
 </div>
                      </div>
                      
                      
                        {/* <div className="addto_cart" ><Button size="large" variant="text" variant="outlined" fullWidth={true} color="primary" onClick={() => this.addProductinCart(item._id, this.props.auth)}   >ADD TO CART</Button></div> */}
                       <br/>
                    </div>





                </div>
            )
        })
        const handleChat = (value) => {
            if(value)
            {
                if(this.props.auth.isAuthenticated)
                {
                    console.log(this.props.auth?.user?.id==this.props.SingleProduct.ItemProduct[0]?.user)
                    if(this.props.auth?.user?.id!=this.props.SingleProduct.ItemProduct[0]?.user)
                    this.setState({...this.state,chatPopUp:true})
                    else{
                        alert("its your own prodect so chat is unavailable")
                    }
                }
                else{
                    history.push("/login")
                }
            }
            else{
                this.setState({...this.state,chatPopUp:false})
            }
        }

        return (
            <div className="container_product" >
                {Images}
   
                {
                    this.state.chatPopUp&&
                    <ChatPopUp handleChatPopUp={handleChat} users={[this.props.auth?.user?.id,this.props.SingleProduct.ItemProduct[0]?.user]}/>
                }
                        {/* <Button size="large" variant="text" variant="outlined" fullWidth={true} color="primary"  onClick={e=>handleChat(true)} >chat with us</Button> */}

            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    SingleProduct: state.ItempProduct,
    unique: state.allProducts.addedItems,
    auth: state.auth,
})

export default connect(mapStateToProps, { getProfilebyId, addtoCartValue })(Productitem)














// <ImageGallery 
// items={
//   [
//     {
//         original: `http://localhost:8080/${item.imgSrc[0]}`,
//         thumbnail:  `http://localhost:8080/${item.imgSrc[0]}`,
//       },
//       {
//         original: `http://localhost:8080/${item.imgSrc[1]}`,
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//       },
//       {
//         original: `http://localhost:8080/${item.imgSrc[2]}`,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//       },
//       {
//         original: `http://localhost:8080/${item.imgSrc[3]}`,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//       },
//   ]

// }                
//                     />