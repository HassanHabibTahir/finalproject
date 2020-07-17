import {GETORDERS,GETALLORDERS} from '../../action/types/types'


const intialState = {
    order:"GETORDERS",
    orders:[],
    allorders:[]
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

            case GETALLORDERS:
                return({
                    ...newState,
                    allorders:action.payload
                })

            default:
                return newState
    }
    
    


}
