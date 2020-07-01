import { UserProducts, getUserProducts, getAllProducts,
     GetByIdProducts, FAVOURITPRODUCTBYID,SEARCGPRODUCT } from '../../action/types/types'
import axios from 'axios';
import history from '../../../components/history/history'
let globalKeyword=null;
export const addproducts = (productData) => dispatch => {
console.log(productData)
    axios.post('/api/product/upload', productData)
        .then((res) => {
            console.log(res)
            history.push('/dashboard')
            dispatch({
                type: UserProducts,
                payload: res.data


            })


        }



        )

}



export const getuserallproducts = (user) => dispatch => {
console.log(user)
    axios.post('http://localhost:8080/api/product/getallproducts', user).then((res) => {

     dispatch({
            type: getUserProducts,
            payload: res.data


        })

    })

}



// export const getChildProduct=(child)=>(dispatch)=>{
// console.log(child)
// }


export const DeleteUserProduct=(userData)=>(dispatch)=>{

    axios.delete(`http://localhost:8080/api/product/deleteUserproduct/${userData.id}`).then((res) => {
       

    console.log(userData)
if(res){
    axios.post('http://localhost:8080/api/product/getallproducts', userData).then((res) => {

        dispatch({
               type: getUserProducts,
               payload: res.data
   
   
           })
   
       })
}
    })
}

export const serchProduct = (keyword,user) => (dispatch) => {
console.log(keyword)
globalKeyword=keyword;
    axios.post('http://localhost:8080/api/product/allProduts2', keyword).then((res) => {

 if(res){
    axios.get("http://localhost:8080/api/Favour/FavproductId").then(users=>{
        const data=users.data.filter(product=>product.user==user.id);
      res.data=  res.data.map(product=>{
          console.log(product,data)
            if(data.find(fvprod=>fvprod.adId==product._id))
          
            {
                product.fav=true;
            }
            else
            product.fav=false;
            return product;
        })

        
        dispatch({
            type:SEARCGPRODUCT,
            payload:res.data
        })
        history.push('/serchProducts')
    })
     
    
    
 }



    })

}

export const getAllMenProduts = (user) => (dispatch) => {
    // console.log("user",user)
    axios.get('http://localhost:8080/api/product/allProduts').then((res) => {
        
        
        axios.get("http://localhost:8080/api/Favour/FavproductId").then(users=>{
            const data=users.data.filter(product=>product.user==user.id);
          res.data=  res.data.map(product=>{
              console.log(product,data)
                if(data.find(fvprod=>fvprod.adId==product._id))
              
                {
                    console.log("found")
                    product.fav=true;
                }
                else
                product.fav=false;
                return product;
            })

            
            dispatch({
                type: getAllProducts,
                payload: res.data
                
                
            })
        })


    })


}



export const FavouritAdds = (add,auth) => (dispatch) => {
    axios.post("http://localhost:8080/api/Favour/favaddChanged", add)
        .then((res) => {
            if (res) {
                GetFavourproducts()(dispatch)
                serchProduct(globalKeyword,auth.user)(dispatch)
                getAllMenProduts(auth.user)(dispatch)
                
                // console.log("are you here")
               
                // axios.get('http://localhost:8080/api/product/allProduts').then((res) => {



                //     dispatch({
                //         type: getAllProducts,
                //         payload: res.data
            
            
                //     })
            
            
                // })

                // axios.get("http://localhost:8080/api/Favour/getFavouritadd")
                //     .then((res) => {
                  
                //         dispatch({
                //             type: FAVOURITPRODUCTBYID,
                //             payload: res.data
                //         })
                //     })
            }
        })

}



export const getCategoryProduct = (data) => (dispatch) => {

    console.log(data)

    axios.post('http://localhost:8080/api/product/categoryProducts',data).then((res) => {
        dispatch({
            type: getAllProducts,
            payload: res.data


        })

    })
}



export const getProfilebyId = (id) => (dispatch) => {

    axios.get(`http://localhost:8080/api/product/profilebyid/${id}`).then((res) => {


        dispatch({
            type: GetByIdProducts,
            payload: res.data


        })


    })

}


export const GetFavourproducts = () => (dispatch) => {

    axios.get("http://localhost:8080/api/Favour/getFavouritadd")
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: FAVOURITPRODUCTBYID,
                payload: res.data
            })
        })
}


// /  favourit user get
//  const favouritProductsId=(b)=>{
//    const data=axios.get("http://localhost:8080/api/Favour/FavproductId").then((users)=>{
//        console.log("get",users.data)
// return users.data
//    }).then(data=>data).catch(err=>console.log(err))
//    console.log(data)
//    return data;
// }