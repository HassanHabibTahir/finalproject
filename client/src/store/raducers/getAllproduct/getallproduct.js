import {getAllProducts,ADDTOCARTITEMSS,
    GETCARTPRODUCTS,
    REMOVECARTPRODUCT} from '../../action/types/types'


const intialState = {
    addedItems: [],
    prduct:"allproducs",
    AllusersProducts:[],
    cartitems:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case getAllProducts:
    
            
        return({
             ...newState,
            
             AllusersProducts:intialState.AllusersProducts.concat(action.payload),
    
            })

 
      case ADDTOCARTITEMSS:
        //   console.log(action.payload)
        //  var cartItem= localStorage.getItem('cartItem');
        //  var items=[]
    // if(cartItem)
    // {
// items=JSON.parse(cartItem)
//    }
//    items.push(action.payload._id)
        // localStorage.setItem('cartItem', JSON.stringify(items)); 
        // let cartProduct=JSON.parse(localStorage.getItem('cartItem'));
        // let addedItem = cartProduct
        // console.log(addedItem)

          return{
              ...newState,
              cartitems:action.payload
            //   addedItems: [...state.addedItems, addedItem],
          }



       case GETCARTPRODUCTS:
        console.log(action.payload) 
        return({
            ...newState,
            cartitems: action.payload,
      
   
           })

     case REMOVECARTPRODUCT:
        console.log("reducerindex",action.payload.index)
        
        return{
         
            cartitems: [
                newState.cartitems.splice(action.payload.index,1),
            ],
           
            ...newState,
        }

            default:
               
             
                return {
                   ...newState,
                    // products: cartProduct != null ? cartProduct : [] ,
                }
    }
    
    


}
