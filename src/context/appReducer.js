import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.setSkin:
            return {
                ...state,
                skin: action.payload
            }

        case types.setBackground:
            return {
                ...state,
                background: action.payload
            }

        case types.getData:
            return {
                ...state,
                data: action.payload
            }
        default:
            break;
    }
}
