import SetAuthToken from "../utility/setAuthToken"
import SetCurrentUser from "../loginAction/setUser"
import history from '../../../components/history/history'
import {UserProducts} from '../../action/types/types'
  const Logout = decode=>dispatch=>{
      localStorage.removeItem('jwtToken')
      //Remove auth header for  future requests
      SetAuthToken(false)
      // curent uer to {} which 
      dispatch({
        type:UserProducts,
        payload:[]


    })
      dispatch(SetCurrentUser({}));
    
    history.push('/login');
    }
  export default Logout