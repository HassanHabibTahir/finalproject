import { ADDTOCARTITEMSS, GETCARTPRODUCTS, REMOVECARTPRODUCT, GETORDERS } from '../../action/types/types'
import axios from 'axios';
import { toast } from 'react-toastify';
import history from '../../../components/history/history'
let globalKeyWord;
export const addtoCartValue = (cartId) => dispatch => {

  axios.post('http://localhost:8080/api/product/PostCart', cartId).then((res) => {

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
  axios.post('http://localhost:8080/api/product/removeCartproduct', data).then((res) => {


    if (res) {
      axios.get('http://localhost:8080/api/product/getCart').then((res) => {


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


  axios.post('http://localhost:8080/api/product/postOrdr', sellerId).then((res) => {
    toast.success("Successfully  send Order to seller!");
    if(res){
      getCartProductbyId()(dispatch)
    }
  })

}




export const getCartProductbyId = () => (dispatch) => {


  axios.get('http://localhost:8080/api/product/getCart').then((res) => {


    dispatch({
      type: ADDTOCARTITEMSS,
      payload: res.data
    })
  })

}


export const updateCartQuantity = (updatequn) => () => {
  console.log("changed", updatequn)
  axios.post('http://localhost:8080/api/product/updatequantity', updatequn).then((res) => {


  })
}

export const GetBuyerOrder = (user) => (dispatch) => {
  axios.get('http://localhost:8080/api/product/getOrders').then((res) => {

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


    // a.map((item) => {
    //   // item.map((q)=>{
    //   //   console.log(q)
    //   // })

      
  

    // let a =res.data.filter((item)=>{
    //  


    //    let a=  item.products.filter((i)=>{

    //   // globalKeyWord=i.user
    //         return i.product.user===user.user.id

    //       })
    // return item



    // })

    // globalKeyWord=res.data.user

    //  let a=  res.data.products.filter((i)=>{
    //   console.log(i)      
    //   // globalKeyWord=i.user
    //         return i.product.user===user.user.id
    // })


  })
}


// export const DeleteOrder = (id) => (dispatch) => {
//   axios.post('http://localhost:8080/api/product/deleteOrder',id).then((res) => {})

// }

export const SendbanckDetail = (data) => (dispatch) => {
  history.push('/userNav/setting')
  axios.put('http://localhost:8080/api/users/sellerDetail',data).then((res) => {
    toast.success("you accout has been update!");
console.log(res)


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

