import { ADDTOCARTITEMSS, GETCARTPRODUCTS, REMOVECARTPRODUCT, GETORDERS,GETALLORDERS } from '../../action/types/types'
import axios from 'axios';
import { toast } from 'react-toastify';
import history from '../../../components/history/history'
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
let globalKeyWord;
export const addtoCartValue = (cartId) => dispatch => {

  axios.post(BURL+'/api/product/PostCart', cartId).then((res) => {
    toast.success("Successfully add to cart!");
    console.log(res)

  })
}
//     axios.get('http://localhost:8080/api/product/allProduts').then((res)=>{
//             const cartProduct=res.data;
//         let addedItem = cartProduct.find(item=>item._id===cartId)   
//         dispatch({
//             type:ADDTOCARTITEMSS,
//             payload:addedItem
//         })
// })


// }

export const getcartproducts = (data) => (dispatch) => {



  dispatch({
    type: GETCARTPRODUCTS,
    payload: data
  })

}

export const RemoveCartElement = (data) => (dispatch) => {

  console.log(data)
  axios.post(BURL+'/api/product/removeCartproduct', data).then((res) => {


    if (res) {
      axios.get(BURL+'/api/product/getCart').then((res) => {


        dispatch({
          type: ADDTOCARTITEMSS,
          payload: res.data
        })
      })
    }

  })






  // let data = [];
  // cartItems.filter(product => {
  //     if (product._id !== data.id)
  //       data.push(product)
  //   })
  //   localStorage.setItem('cartItem', JSON.stringify(data)); 
  // dispatch({
  //     type:REMOVECARTPRODUCT,
  //     payload:data
  // })


}



export const PostOrders = (sellerId) => (dispatch) => {


  axios.post(BURL+'/api/product/postOrdr', sellerId).then((res) => {
    toast.success("Successfully  send Order to seller!");
    if(res){
      getCartProductbyId()(dispatch)
    }
  })

}




export const getCartProductbyId = () => (dispatch) => {


  axios.get(BURL+'/api/product/getCart').then((res) => {


    dispatch({
      type: ADDTOCARTITEMSS,
      payload: res.data
    })
  })

}


export const updateCartQuantity = (updatequn) => () => {
  console.log("changed", updatequn)
  axios.post(BURL+'/api/product/updatequantity', updatequn).then((res) => {


  })
}


export const GetAllsendOrders = () => (dispatch) => {
  axios.get(BURL+'/api/product/getOrders').then((res) => {

    dispatch({
      type: GETALLORDERS,
      payload: res.data
    })


})
}



export const GetBuyerOrder = (user) => (dispatch) => {
  axios.get(BURL+'/api/product/getOrders').then((res) => {

    let data = []

    res.data.map((item) => {

      let a = item.products.filter((i) => {
        return (i.product.user === user.user.id)
      })
      data.push(a)
      return item
    })
    // console.log(data)
    let a = data.map((item) => {
      return item = item
    })

        let items= a.reduce((r, e) => (r.push(...e), r), [])
        dispatch({
          type: GETORDERS,
          payload: items  
        })



  })
}


// export const DeleteOrder = (id) => (dispatch) => {
//   axios.post('http://localhost:8080/api/product/deleteOrder',id).then((res) => {})

// }

export const SendbanckDetail = (data) => (dispatch) => {
  history.push('/userNav/setting')
  axios.put(BURL+'/api/users/sellerDetail',data).then((res) => {
    toast.success("you accout has been update!");
console.log(res)


  })


}





export const getallProducts =()=>()=>{
  axios.get(BURL+'/api/product/getallProducts').then((products)=>{

    console.log(products)
  })
}



// axios.get('http://localhost:8080/api/product/allProduts').then((res)=>{
//   const cartProduct=res.data;
// let addedItem = cartProduct.find(item=>item._id===id)   
// dispatch({
//   type:ADDTOCARTITEMSS,
//   payload:addedItem
// })
// })

