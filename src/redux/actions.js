import { types } from "./types"

export function incrementAction (input) {
    return {
        type: types.INCREMENT,
        payload: input
    }
}

export function clearAllAction () {
    return {
        type: types.CLEAR_ALL
    }
}