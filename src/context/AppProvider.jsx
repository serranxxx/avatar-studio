import { useReducer } from "react";
import { types } from "./types";
import { AppReducer } from "./appReducer";
import { appContext } from "./appContext";


const init = () => {

    
    return {
        
    }
}

export const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, {}, init)


    const setItems = (items = []) => {
        const allItems = items
        const action = {
            type: types.setNewItem,
            payload: allItems
        }
        localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }

    

    


    return (
        <appContext.Provider value={{
            ...state,
            setItems,
        }}>
            {children}
        </appContext.Provider >
    )
}
