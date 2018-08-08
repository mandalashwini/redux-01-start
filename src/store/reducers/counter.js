import * as actionType from '../action'
const initialState = {
    counter : 0
}
const counter_reducer = (state = initialState,action) => {
   
    switch(action.type){
        case actionType.INCREMENT :  return{
                                    ...state,
                                    counter : state.counter + 1
                            
                            }
        case actionType.DECREMENT : return{
                                  ...state,
                                  counter : state.counter - 1  

                             }
        case actionType.ADD : return{
                                ...state,
                                counter : state.counter + action.value  

                          }
        case actionType.SUB : return{
                            ...state,
                            counter : state.counter - action.value  

                       }
     }   
    return state
}

export default counter_reducer