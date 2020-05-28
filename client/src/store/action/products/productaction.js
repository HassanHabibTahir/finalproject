import { UserProducts, getUserProducts, getAllProducts, GetByIdProducts, FAVOURITPRODUCTBYID } from '../../action/types/types'
import axios from 'axios';
import history from '../../../components/history/history'
export const addproducts = (productData) => dispatch => {

    axios.post('/api/product/upload', productData)
        .then((res) => {
            // console.log(res)
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


export const serchProduct = (keyword) => (dispatch) => {
console.log(keyword)
    // axios.post('http://localhost:8080/api/product/allProduts2', {keyword: keyword}).then((res) => {



        // dispatch({
        //     type: getAllProducts,
        //     payload: res.data


        // })


    // })

}


export const getChildProduct = (data) => (dispatch) => {

    axios.post('http://localhost:8080/api/product/childProducts',data).then((res) => {

console.log(res)

    })
}



export const getAllMenProduts = () => (dispatch) => {

    axios.get('http://localhost:8080/api/product/allProduts').then((res) => {



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
export const FavouritAdds = (add) => (dispatch) => {

    axios.post("http://localhost:8080/api/Favour/favaddChanged", add)
        .then((res) => {
            console.log(res)
            if (res) {
                axios.get('http://localhost:8080/api/product/allProduts').then((res) => {



                    dispatch({
                        type: getAllProducts,
                        payload: res.data


                    })


                })

                axios.get("http://localhost:8080/api/Favour/getFavouritadd")
                    .then((res) => {
                        console.log(res.data)
                        dispatch({
                            type: FAVOURITPRODUCTBYID,
                            payload: res.data
                        })
                    })
            }
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
