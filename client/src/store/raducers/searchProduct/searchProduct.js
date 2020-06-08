import {SEARCGPRODUCT} from '../../action/types/types'


const intialState = {
    prduct:"serchProducts",
    searchproducts:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case SEARCGPRODUCT:
    
            return({
             ...newState,
             searchproducts: intialState.searchproducts.concat(action.payload)
    
            })


            default:
                return newState
    }
    
    


}
