import { useReducer } from "react";
import { types } from "./types";
import { AppReducer } from "./appReducer";
import { appContext } from "./appContext";


const init = () => {


    return {
        skin: '#ffb79e',
        background: '#f3f3f3'
    }
}

export const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, {}, init)


    const newSkin = (skin = '') => {
        const skins = skin
        const action = {
            type: types.setSkin,
            payload: skins
        }
        // localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }

    const newBackground = (bg = '') => {
        const background = bg
        const action = {
            type: types.setBackground,
            payload: background
        }
        // localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }






    return (
        <appContext.Provider value={{
            ...state,
            newSkin,
            newBackground
        }}>
            {children}
        </appContext.Provider >
    )
}
