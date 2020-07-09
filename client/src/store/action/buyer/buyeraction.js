import axios from 'axios';
import {BUYERORDERSDATA} from '../types/types'

export const buyergetallbuy=()=> (dispatch) => {
    
    axios.get('http://localhost:8080/api/product/getBuyerOrders').then((res) => {
    console.log("action",res.data)
    dispatch({
    
      type: BUYERORDERSDATA,
      payload: res.data
    })
  
    })
  
  
  }
  

  // export const getCartProductbyId = () => (dispatch) => {


  //   axios.get('http://localhost:8080/api/product/getCart').then((res) => {
  
  
  //     dispatch({
  //       type: ADDTOCARTITEMSS,
  //       payload: res.data
  //     })
  //   })
  
  // }
  