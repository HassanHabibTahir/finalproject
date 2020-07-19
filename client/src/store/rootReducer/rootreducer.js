import { combineReducers } from 'redux';
import errors from '../raducers/error/error'
import Auth from '../raducers/auth/autUser'
import userprofiles from '../raducers/Adminreudcer/allusers/Allusersreducer'

import UserProducts from '../raducers/Products/product';
import getallproducts from '../raducers/getuserProducts/getuserproducts';
import AllProducts from '../../store/raducers/getAllproduct/getallproduct';
import ItempProduct from '../raducers/itemProduct/itemProduct';
import  FavouritProducts from '../raducers/favproducts/favProducts'
import serchProducts from '../raducers/searchProduct/searchProduct'
import ChatReducer from '../raducers/ChatReducer/ChatReducer'
import order from '../raducers/order/order'
import buyerOrder from '../raducers/buyer/buyerorders'
const rootReducer = combineReducers({
    erorr:errors,
    auth:Auth,
    profile:userprofiles,
    // Verification:userVerification,
    Products:UserProducts, 
    getuserproducts:getallproducts,
    allProducts:AllProducts,
    ItempProduct:ItempProduct,
    favproduct:FavouritProducts,
    SERCHPRODUCT:serchProducts,
    ChatReducer:ChatReducer,
    orders:order,
    buyerOrder:buyerOrder
})
export default rootReducer;