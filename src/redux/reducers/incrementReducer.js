import { types } from "../types";

const initialState = {
    num: 0,
    count: []
}

export function incrementReducer (state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
                return {...state, num: action.payload, count: +state.num + +action.payload}
        case types.CLEAR_ALL:
            return {state: ''}    
       



        default: return state
    }
}