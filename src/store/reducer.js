
// import {LOAD, SEARCH } from './action';
const initialState = {
    resturantInfo :[]
}

const reducer = (state=initialState, action)=>{
    switch(action.type) {
        case "LOAD":
            return {
                ...state,
                resturantInfo:action.value
            }
        case "SEARCH":
        console.log('action', action);
            return {
                ...state,
                resturantInfo: action.value.state.filter((item)=>{
                    return item.id == action.value.payload;
                })
            }


        
        default:
            return state;
    }
}

export default reducer;