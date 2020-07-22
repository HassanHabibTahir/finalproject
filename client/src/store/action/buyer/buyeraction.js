import axios from 'axios';
import {BUYERORDERSDATA,SELLERINFORMATION} from '../types/types'
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const buyergetallbuy=()=> (dispatch) => {
    
    axios.get(BURL+'/api/product/getBuyerOrders').then((res) => {
    console.log("action",res.data)
    dispatch({
    
      type: BUYERORDERSDATA,
      payload: res.data
    })
  
    })
  
  
  }
  

  export const getSellerAccount = (id) => (dispatch) => {
// console.log(id)
    axios.post(BURL+'/api/users/getSellerUnicount',{id}).then((res) => {
  
    console.log(res.data)
  
      dispatch({
        type: SELLERINFORMATION,
        payload: res.data
      })
    })
  
  }
  