import {BUYERORDERSDATA,SELLERINFORMATION} from '../../action/types/types'
import { act } from 'react-dom/test-utils'


const intialState = {
    buyer:"BUYORDERS",
    buyerprdouct:[],
    SELLERINFO:''
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))

    
    switch(action.type){
    
    
    
        case BUYERORDERSDATA:
    
                     return({
                      ...newState,
                      buyerprdouct:action.payload
             
                     })
case SELLERINFORMATION:
    return({
        ...newState,
        SELLERINFO:action.payload
    })

            default:
                return newState
    }
    


}
