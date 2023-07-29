import { useReducer } from "react";
import { types } from "./types";
import { AppReducer } from "./appReducer";
import { appContext } from "./appContext";
import { RandomColor, RandomFace, RandomGlasses, RandomHair, RandomHats, RandomMoustache, RandomSkin } from "../layout/hooks/Randomizer";


const init = () => {

    let Data = JSON.parse(localStorage.getItem('MyAvatars'))
    if (!Data) {
        Data = [{
            id: '1234',
            name: 'Example Avatar',
            skin: RandomSkin(Math.floor(Math.random() * 8) + 1),
            face: RandomFace(Math.floor(Math.random() * 3) + 1),
            hair: RandomHair(Math.floor(Math.random() * 4) + 1),
            hairColor: RandomColor(),
            glasses: RandomGlasses(Math.floor(Math.random() * 8) + 1),
            beard: RandomMoustache(Math.floor(Math.random() * 5) + 1),
            beardColor: RandomColor(),
            hat: RandomHats(Math.floor(Math.random() * 7) + 1),
            clothes: RandomColor(),
            background: RandomColor(),
            favorite: false
        }]
    }

    return {
        skin: RandomSkin(Math.floor(Math.random() * 8) + 1),
        background: '#bcdde6',
        data: Data
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
        localStorage.setItem('avatar-background', JSON.stringify(background))
        dispatch(action)
    }

    const newData = (data) => {
        const Data = data
        const action = {
            type: types.getData,
            payload: Data
        }
        localStorage.setItem('MyAvatars', JSON.stringify(Data))
        dispatch(action)
    }






    return (
        <appContext.Provider value={{
            ...state,
            newSkin,
            newBackground,
            newData
        }}>
            {children}
        </appContext.Provider >
    )
}
