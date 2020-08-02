import {UserProducts,GETALLPRODUCTSFORADMIN} from '../../action/types/types'


const intialState = {
    prduct:"userProducts",
    products:[],
    allProducts:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
           case UserProducts:
    
        // console.log(action.payload)
            return({
             ...newState,
             products:intialState.products.concat(action.payload),
    
            })
          case GETALLPRODUCTSFORADMIN:
           return({
           ...newState,
           allADProducts:action.payload

    })

            default:
                return newState
    }
    
    


}
