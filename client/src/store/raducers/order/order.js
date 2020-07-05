import {GETORDERS} from '../../action/types/types'


const intialState = {
    order:"GETORDERS",
    orders:[]
}

export default function ( state=intialState, action ) {

    let newState = JSON.parse(JSON.stringify(state))
 
    
    switch(action.type){
    
    
    
        case GETORDERS:
    
        // console.log(action.payload)
            return({
             ...newState,
             orders:action.payload
    
            })


            default:
                return newState
    }
    
    


}
