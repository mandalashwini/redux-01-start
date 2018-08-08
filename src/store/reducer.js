import * as actionType from './action'
const initialState = {
    counter : 0,
    result : []
}
const reducer = (state = initialState,action) => {
   
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
        case actionType.STORE_RESULT : 
                            console.log("Hello");
                                return{
                                ...state,
                                result : state.result.concat({value:state.counter , id: new Date})
                                
                        }
        case actionType.DELETE_RESULT :
                                const updated_array = state.result.filter(res => res.id !== action.id)
                                return{
                                        ...state,
                                        result : updated_array
                                }
     }   
    return state
}

export default reducer