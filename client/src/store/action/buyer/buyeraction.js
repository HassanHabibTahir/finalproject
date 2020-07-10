import axios from 'axios';
import {BUYERORDERSDATA,SELLERINFORMATION} from '../types/types'

export const buyergetallbuy=()=> (dispatch) => {
    
    axios.get('http://localhost:8080/api/product/getBuyerOrders').then((res) => {
    console.log("action",res.data)
    dispatch({
    
      type: BUYERORDERSDATA,
      payload: res.data
    })
  
    })
  
  
  }
  

  export const getSellerAccount = (id) => (dispatch) => {
// console.log(id)
    axios.post('http://localhost:8080/api/users/getSellerUnicount',{id}).then((res) => {
  
    console.log(res.data)
  
      dispatch({
        type: SELLERINFORMATION,
        payload: res.data
      })
    })
  
  }
  