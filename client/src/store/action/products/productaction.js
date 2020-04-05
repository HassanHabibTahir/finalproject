import {UserProducts,getUserProducts,getAllProducts ,GetByIdProducts} from '../../action/types/types'
import axios from 'axios';
import history from '../../../components/history/history'
 export const addproducts=(productData)=>dispatch=>{

    axios.post('/api/product/upload',productData)
    .then((res)=>{
        // console.log(res)
        history.push('/dashboard')
        dispatch({
            type:UserProducts,
            payload:res.data


        })
    
    
    }
        
  
        
        )

}



export const getuserallproducts=(user)=>dispatch=>{

   axios.post('http://localhost:8080/api/product/getallproducts',user).then((res)=>{





   dispatch({
            type:getUserProducts,
            payload:res.data


        })
  
  })

}


export const getAllMenProduts=()=>(dispatch)=>{

    axios.get('http://localhost:8080/api/product/allProduts').then((res)=>{

      

        dispatch({
            type:getAllProducts,
            payload:res.data


        })

   
})

}






export const getProfilebyId=(id)=>(dispatch)=>{

    axios.get(`http://localhost:8080/api/product/profilebyid/${id}`).then((res)=>{


        dispatch({
            type:GetByIdProducts,
            payload:res.data


        })

   
})

}