import { useReducer } from "react";
import { types } from "./types";
import { AppReducer } from "./appReducer";
import { appContext } from "./appContext";
import { RandomColor, RandomFace, RandomGlasses, RandomHair, RandomHats, RandomMoustache, RandomSkin } from "../layout/hooks/Randomizer";
import { beards, faces, glasses, hairs, hats } from "../helpers/body";
import { message } from "antd";


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
        face: faces.face_1,
        clothes: '#DDD',
        hair: hairs.hair_0,
        glasses: glasses.glass_0,
        hat: hats.hat_0,
        beard: beards.beard_0,
        beards_color: '#995c30',
        hair_color:'#995c30',
        data: Data
    }
}

export const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, {}, init)


    const setSkin = (skin = '') => {
        const skins = skin
        const action = {
            type: types.SKIN,
            payload: skins
        }
        dispatch(action)
    }
    const setFace = (face = '') => {
        const Face = face
        const action = {
            type: types.FACE,
            payload: Face
        }
        dispatch(action)
    }

    const setBackground = (bg = '') => {
        const background = bg
        const action = {
            type: types.BACKGROUND,
            payload: background
        }
        dispatch(action)
    }

    const setClothes = (clothes = '') => {
        const Clothes = clothes
        const action = {
            type: types.CLOTHES,
            payload: Clothes
        }
        dispatch(action)
    }

    const setHair = (hair = '') => {
        const Hair = hair
        const action = {
            type: types.HAIR,
            payload: Hair
        }
        dispatch(action)
    }

    const setGlasses = (glasses = '') => {
        const Glasses = glasses
        const action = {
            type: types.GLASSES,
            payload: Glasses
        }
        dispatch(action)
    }

    const setHats = (hats = '') => {
        const Hats = hats
        const action = {
            type: types.HATS,
            payload: Hats
        }
        dispatch(action)
    }

    const setBeards = (beards = '') => {
        const Beards = beards
        const action = {
            type: types.BEARDS,
            payload: Beards
        }
        dispatch(action)
    }

    const setColorHair = (hair = '') => {
        const Hair = hair
        const action = {
            type: types.COLOR_HAIR,
            payload: Hair
        }
        dispatch(action)
    }

    const setColorBeard = (beards = '') => {
        const Beards = beards
        const action = {
            type: types.COLOR_BEARD,
            payload: Beards
        }
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
        // message.success('Saved')
    }






    return (
        <appContext.Provider value={{
            ...state,
            setSkin,
            setFace,
            setBackground,
            setClothes,
            setHair,
            setGlasses,
            setHats,
            setBeards,
            setColorBeard,
            setColorHair,
            newData
        }}>
            {children}
        </appContext.Provider >
    )
}
