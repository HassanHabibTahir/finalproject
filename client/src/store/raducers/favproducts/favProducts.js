


import {FAVOURITPRODUCTBYID} from '../../action/types/types'


const intialState = {
    Favourit:"userProducts",
    FavouritProducts:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case FAVOURITPRODUCTBYID:
    
        console.log(action.payload)
            return({
             ...newState,
             FavouritProducts:action.payload,
    
            })


            default:
                return newState
    }
    
    
}