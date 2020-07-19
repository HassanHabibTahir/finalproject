import axios from 'axios';
import {GETUSER_PROFILE,USERPROFILE_LOADING,RemoveElemets,} from '../../types/types';
import {toast} from 'react-toastify';

export const getUsersProfiles = ()=>dispatch=>{
      dispatch(ProfileLoading())
axios.get('/api/users/all')
.then(res=>

    dispatch({

        
        type:GETUSER_PROFILE,
        payload: res.data
        
})
)

}

//profile loading
export  const ProfileLoading=()=>{
      return{
        type:USERPROFILE_LOADING
    };
}; 

export  const DeleteUserprofile=data=>dispatch=>{

  console.log(data)
 const user= window.confirm("are you sure you want to delete  user")

 if(user){

    dispatch({
        type:RemoveElemets,
        payload:data.index
            })
    axios.delete(`/api/users/deleteUser/${data.id}`).then((user)=>{
        toast.success("sussefully deleted")
//second concept to get users

        // axios.get('/api/users/all')
        // .then(res=>
        
        //     dispatch({
        
                
        //         type:GETUSER_PROFILE,
        //         payload: res.data
                
        // })
        // )




        
    // console.log(user)
})
 
 }

}; 

export const updataElement=data=>dispatch=>{

 axios.put(`/api/users/updateUser/${data.id}`,data)
    .then((res)=>{
     
        getUsersProfiles()(dispatch)
     
    })



} 