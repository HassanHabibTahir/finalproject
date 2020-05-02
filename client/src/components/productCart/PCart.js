import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import { getcartproducts ,RemoveCartElement ,getCartProductbyId} from '../../store/action/cartAction/cartaction'
import axios from 'axios';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import history from '../history/history'
class PCart extends Component {
  constructor(props) {
    super(props)

 this.state={
   data:[]
 }
  }

  DeletedCartItem=(i,id)=>{

    // var cartItems= JSON.parse(localStorage.getItem('cartItem'));

    // for(let x in cartItems ){
// if(x==0){
//   localStorage.removeItem('cartItem');
// }
// let ie= cartItems.splice(i,1)

// let ie = cartItems.filter(item=>item!==id)
// console.log("filter",ie)
// localStorage.setItem('cartItem', JSON.stringify(ie)); 

    //}
    const data = {
      // index: i,
      id: id
  }
        this.props.RemoveCartElement(data)

  }








  componentDidMount() {


   this.props.getCartProductbyId()


    // let cartProduct = JSON.parse(localStorage.getItem('cartItem'));
    // let data = [];
    // axios.get('http://localhost:8080/api/product/allProduts').then((res) => {
    //   cartProduct.map(id => {

    //     res.data.filter(product => {
    //       if (product._id == id)
    //         data.push(product)
    //     })
    //   })
    // })


    // this.props.getcartproducts(data)

  }


  //  product = (cartItems)=>cartItems.map((item, i) => {
  //   console.log(item)
  //         return (
    
  //           <TableRow key={item.id}>
  //             <TableCell>
  //               <img height="50" src={"http://localhost:8080/" + item.imgSrc[0]} />
  //             </TableCell>
  //             <TableCell align="right">{item.productname.toUpperCase()}</TableCell>
  //             <TableCell align="right">{item.price}</TableCell>
  //             <TableCell align="right">1</TableCell>
  //             <TableCell align="right">Discount</TableCell>
  //             <TableCell align="right"><Button onClick={()=>{this.DeletedCartItem(i,item._id)}} >REMOVE</Button></TableCell>
  //           </TableRow>
    
  //         )
  //       })
  


  componentWillReceiveProps(nextProps) {
 
    if(nextProps.CartItems.products !== undefined && nextProps.CartItems.products !== null) {

       this.setState({
        data: nextProps.CartItems.products,
          
       })
    }


}


  render() {

this.state.data.map((item,i)=>{
  console.log(item,i)
})
 
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
      let total=0;
    const  product = this.state.data &&this.state.data!=null&&this.state.data!=undefined?this.state.data.map((item, i) => {
    if(item.productId!=null && item.productId!=undefined){
    //   console.log(item.productId)
    // }
   
           total+=parseInt(item.productId.price)*item.quantity
           console.log(total)
          return (
    <div>
            <TableRow key={item.id}>
              <TableCell>
                <img height="50" src={"http://localhost:8080/" + item.productId.imgSrc[0]} />
              </TableCell>
              <TableCell align="right">{item.productId.productname}</TableCell>
              <TableCell align="right">{item.productId.price}</TableCell>
          <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right"><Button onClick={()=>{this.DeletedCartItem(i,item._id)}} >REMOVE</Button></TableCell>
           
            </TableRow>
         
    </div>
          )
    }
        }):null
  
 
    return (
      <div style={{ marginTop: "vh" }}>
        <h1>Shoping Cart</h1>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">REMOVE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
              {/* {this.props.CartItems.map(item=>{
                return <p>i=e</p>
              })} */}
              {/* {this.product(this.props.CartItems)} */}
              {product}
            
            </TableBody>
          </Table>
        </TableContainer>
        <h1>total={total}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({


  CartItems: state.allProducts.cartitems,

})

export default connect(mapStateToProps, { getcartproducts,RemoveCartElement,getCartProductbyId })(PCart)