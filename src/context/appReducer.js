import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.SKIN:
            return {
                ...state,
                skin: action.payload
            }

        case types.BACKGROUND:
            return {
                ...state,
                background: action.payload
            }

        case types.FACE:
            return {
                ...state,
                face: action.payload
            }

        case types.CLOTHES:
            return {
                ...state,
                clothes: action.payload
            }

        case types.HAIR:
            return {
                ...state,
                hair: action.payload
            }

        case types.GLASSES:
            return {
                ...state,
                glasses: action.payload
            }

        case types.HATS:
            return {
                ...state,
                hats: action.payload
            }

        case types.BEARDS:
            return {
                ...state,
                beards: action.payload
            }

        case types.COLOR_BEARD:
            return {
                ...state,
                beards_color: action.payload
            }

        case types.COLOR_HAIR:
            return {
                ...state,
                hair_color: action.payload
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
