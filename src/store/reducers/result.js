import * as actionType from '../action'
const initialState = {
    result : []
}
const result_reducer = (state = initialState,action) => {
   
    switch(action.type){
        case actionType.STORE_RESULT : 
                            console.log("Hello");
                                return{
                                ...state,
                                result : state.result.concat({value: action.result , id: new Date})
                                
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

export default result_reducer