import axios from 'axios';
import types from '../types/types';
import { GET_ERRORS, SET_USERS,TokenSetToUser } from '../types/types';
// const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const registerUser = (userData, history) => (dispatch) => {

    axios.post('/api/users/rejister', userData)

        .then((res) => {

            console.log(res.data)
debugger;
            dispatch({
                type:TokenSetToUser,
                payload:res.data
            })
            // const token = this.props.match.params.token;
            // console.log(token)
            history.push('/login')

        }
           
          
             )
        .catch((err) => {
            console.log(err)
          dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
            })
        })
}


function emailVerification(message) {
    return {
        type: GET_ERRORS,
        payload:   message
    }
}

export function startEmailVerification(email){
    return (dispatch) =>{

        axios.post('/api/users/emailVerification',{email}).then((response=>{
        dispatch(emailVerification(response.data));
        })).catch(err=>{
            console.log(err)
            // toast.error(err);
        });
    }
}



export default registerUser;