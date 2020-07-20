import axios from 'axios';
import { GET_ERRORS } from '../types/types';
import SetAuthToken from '../utility/setAuthToken';
import jwt_decode from 'jwt-decode';
import SetCurrentUser from '../loginAction/setUser';
// import {toast} from 'react-toastify';
const loginUser = userData => dispatch => {
axios.post(`/api/users/login?token=${userData.token}`, userData)
        .then(res => {

            //Save to localStorage
            const {token} = res.data;
            //set Token to localStorage
            localStorage.setItem('jwtToken', token);
            //Set token to Auth header
            SetAuthToken(token);
         //Decode token to get user data
          const decoded  = jwt_decode(token)
          //set Current user
          dispatch(SetCurrentUser(decoded))



       

        }).catch((err) =>{

            console.log(err)
            if (err.response && err.response.data){
            
            dispatch({
               
                        
                type: GET_ERRORS,
                payload: err.response.data
            })
        }

        } )


}
export default loginUser