import {BUYERORDERSDATA} from '../../action/types/types'


const intialState = {
    buyer:"BUYORDERS",
    buyerprdouct:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))

    
    switch(action.type){
    
    
    
        case BUYERORDERSDATA:
    
            console.log(action.payload)
                     return({
                      ...newState,
                      buyerprdouct:action.payload
             
                     })


            default:
                return newState
    }
    


}
