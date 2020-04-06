import {ADDTOCARTITEMSS ,GETCARTPRODUCTS,REMOVECARTPRODUCT} from '../../action/types/types'
import axios from 'axios';
export const addtoCartValue=(id)=>dispatch=>{

    axios.get('http://localhost:8080/api/product/allProduts').then((res)=>{
            const cartProduct=res.data;
        let addedItem = cartProduct.find(item=>item._id===id)   
        dispatch({
            type:ADDTOCARTITEMSS,
            payload:addedItem
        })
})


}

export const getcartproducts=(data)=>(dispatch)=>{


  
  dispatch({
    type:GETCARTPRODUCTS,
    payload:data
  })

}

export const  RemoveCartElement=(data)=>(dispatch)=>{
 
    // let data = [];
    // cartItems.filter(product => {
    //     if (product._id !== data.id)
    //       data.push(product)
    //   })
    //   localStorage.setItem('cartItem', JSON.stringify(data)); 
dispatch({
    type:REMOVECARTPRODUCT,
    payload:data
})


}