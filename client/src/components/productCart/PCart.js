import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { getcartproducts, RemoveCartElement, getCartProductbyId, PostOrders, updateCartQuantity } from '../../store/action/cartAction/cartaction'

import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import Spiner from '../spnier/spiner';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import './cart.css';
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
class PCart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      counter: 0
    }
  }

  handleIncrement = (i, item) => {
    let counting = [...this.state.data]
    let q = counting[i].quantity = counting[i].quantity + 1
    this.setState({
      counting
    })

    this.updateQuantity(q, item)
  };

  handleDecrement = (i, item) => {

    let counting = [...this.state.data]
    let cq = counting[i].quantity - 1


    if (cq > 6) {
      console.log(cq)
      counting[i].quantity = cq;
      this.setState({
        counting
      })
      this.updateQuantity(cq, item)
    }


  };



  updateQuantity = (parms, cartproduct) => {


    const updatequn = {
      value: parms,
      ids: cartproduct
    }

    this.props.updateCartQuantity(updatequn)
  }



  DeletedCartItem = (i, id) => {
    const data = {
      // index: i,3e
      id: id
    }
    this.props.RemoveCartElement(data)

  }








  componentDidMount() {


    this.props.getCartProductbyId()

  }



  componentWillReceiveProps(nextProps) {
     console.log(nextProps.CartItems.products)
    if (nextProps.CartItems.products !== undefined && nextProps.CartItems.products !== null) {

      this.setState({
        data: nextProps.CartItems.products,

      })
    }


  }



  checkOrders = (id) => {
    const sellerId = {
      id: id
    }

    this.props.PostOrders(sellerId)
  }




  render() {



    //  const cartProduct = this.props.CartItems.products
    //   let profileItems;
    //   if (cartProduct === null) {
    //     profileItems = <h1>loading.............</h1>;
    // }
    // else {
    //     if (cartProduct === undefined) {
    //         profileItems = <h1>loading...........agin..</h1>;
    //     }
    //     else {


    // let products= !this.props.CartItems.products&&this.props.CartItems.products===undefined&&this.props.CartItems.products===null?null:this.props.CartItems.products.map((item,i)=>{
    //   console.log(i)
    // })





    // if(profileItems.length>0){
    // profileItems.map((item,i)=>{
    //  console.log(i)
    //   // return item
    // })
    // }
    //   }
    // }
    let globalKeyWord = null;
    let gettotal = 0;
    let total = 0;
    const product = this.state.data && this.state.data != null && this.state.data != undefined ? this.state.data.map((item, i) => {

      if (item.productId != null && item.productId != undefined) {
        console.log(item.productId.user)
        globalKeyWord = item.productId.user
        // }

        gettotal += parseInt(item.productId.price) * item.quantity
        if (!(gettotal <= 0)) {
          total = gettotal
        }
        return (
          <div>

            <TableRow key={item.id} >
              <TableCell style={{ width: "20%" }}  >
                <img className="cart-images" src={`${BURL}/`+ item.productId.imgSrc[0]} alt="product" />
                <img className="cart-images" src={`${BURL}/`+item.productId.imgSrc[1]} alt="product" />
                <img className="cart-images" src={`${BURL}/`+ item.productId.imgSrc[2]} alt="product" />
                <img className="cart-images" src={`${BURL}/`+ item.productId.imgSrc[3]} alt="product" />
              </TableCell>
              <TableCell style={{ width: "15%" }} align="right">{item.productId.productname}</TableCell>
              <TableCell style={{ width: "15%" }} align="right">ONE PRODUCT PRICE:{item.productId.price}$</TableCell>
              {/* <TableCell style={{ width: "10%" }} align="right"><Button onClick={()=>{this.handleIncrement(i,) }}>+</Button>{item.quantity<=0?0:item.quantity}  <Button onClick={()=>{this.handleDecrement(i)}}>-</Button></TableCell> */}
              <TableCell style={{ width: "15%" }} align="right">{item.quantity < 1 ? null : item.quantity}</TableCell>
        <TableCell style={{ width: "15%" }} align="right">WE HAVE ITEMS:{item.productId.discount}</TableCell>
              <TableCell style={{ width: "10%" }} align="right">
                <ButtonGroup size="small" aria-label="large outlined button group">
                  <Button onClick={() => { this.handleIncrement(i, item) }}>+</Button>
                  {/* this.state.counter > 0 && */}
                  {<Button>{item.quantity}</Button>}
                  <Button onClick={() => { this.handleDecrement(i, item) }}>-</Button>
                </ButtonGroup>
              </TableCell>

              <TableCell style={{ width: "10%" }} align="right"><Button
                variant="contained"
                color="secondary"

                startIcon={<DeleteIcon />}
                onClick={() => { this.DeletedCartItem(i, item._id) }} >REMOVE</Button></TableCell>

            </TableRow>

          </div>
        )
      }
    }) : <Spiner />


    return (
      <div className="cart_contain" >
        <div >

          <Table >
            <TableBody>

              {product}
            </TableBody>

            {/* {this.props.CartItems.map(item=>{
                return <p>i=e</p>
              })} */}
            {/* {this.product(this.props.CartItems)} */}




          </Table>
        </div>
        {!this.state.data.length == 0 ? <div className="check-container" >
          <div className="checkout-container" > <h1  ><span className="total_product" >Total:</span> <span className="total_price">${total <= 0 ? 0 : total}</span></h1></div>
          <div className="checkout-out-product" > <button onClick={() => { this.checkOrders(globalKeyWord) }} >checkout</button> </div>
          {/* <Spiner/> */}
        </div> : <div>

            <img src={require('./pic/shoping.png')} />
            <hr />
          </div>}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({


  CartItems: state.allProducts.cartitems,

})

export default connect(mapStateToProps, { getcartproducts, RemoveCartElement, getCartProductbyId, PostOrders, updateCartQuantity })(PCart)
