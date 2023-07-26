import React, { useContext, useState } from 'react'
import { Propierties } from './Propierties'
import { Button, ColorPicker, Tabs } from 'antd'
import { Selector } from './Selector';
import { BodyAvatar, FaceAvatar, HairAvatar, HeadAvatar } from './BodyAvatar';
import { faces, glasses, hairs } from './body_parts';
import { appContext } from '../context/appContext';
import { BiMenu } from "react-icons/bi";

export const LayoutPage = () => {

    const { newSkin, newBackground } = useContext(appContext)
    const [Face, setFace] = useState(faces.face_1)
    const [skin, setSkin] = useState('#ffc5b7')
    const [background, setBackground] = useState('#f3f3f3')
    const [clothe, setClothe] = useState('#52b2cf')
    const [Hair, setHair] = useState(hairs.hair_2)
    const [hairColor, setHairColor] = useState('#995c30')
    const [beardColor, setbeardColor] = useState('#995c30')
    const [Glasses, setGlasses] = useState('')
    const [Hat, setHat] = useState('')
    const [Beard, setBeard] = useState('')

    const faceSelector = (face) => {
        const newFace = face.toString()
        setFace(newFace)
        // return newFace
    }

    const skinSelector = (skin) => {
        setSkin(skin)
        newSkin(skin)
    }

    const backgroundSelector = (bg) => {
        setBackground(bg)
        newBackground(bg)
    }

    const clotheSelector = (clothe) => {
        setClothe(clothe)
    }

    const hairSelector = (hair) => {
        setHair(hair)
    }
    

    const sethairColor = (color) => {
        setHairColor(color)
    }

    const glassSelector = (glass) => {
        setGlasses(glass)
    }

    const hatSelector = (hat) => {
        setHat(hat)
    }

    const beardSelector = (beard) => {
        setBeard(beard)
    }

    const setBeardColor = (color) => {
        setbeardColor(color)
    }
    const items = [
        {
            key: 'skin',
            label: `Skin`,
            children: <Selector type={'skin'} action={skinSelector} />,
        },
        {
            key: 'face',
            label: `Face`,
            children: <Selector type={'face'} action={faceSelector} />,
        },
        {
            key: 'hair',
            label: `Hair`,
            children: <Selector type={'hair'} action={hairSelector} color={sethairColor} />,
        },
        {
            key: 'glasses',
            label: `Glasses`,
            children: <Selector type={'glasses'} action={glassSelector} />,
        },
        {
            key: 'moustache',
            label: `Moustache`,
            children: <Selector type={'beard' } action={beardSelector} color={setBeardColor}/>,
        },
        {
            key: 'hats',
            label: `Hats`,
            children: <Selector type={'hats'} action={hatSelector} />,
        },
        {
            key: 'clothes',
            label: `Clothes`,
            children: <Selector type={'clothes'} action={clotheSelector} />,
        },
        {
            key: 'background',
            label: `Background`,
            children: <Selector type={'background'} action={backgroundSelector} />
        },

    ];

    const onChange = (key) => {
        console.log(key);
    };



    return (
        <div style={{
            height: '100vh', width: 'auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${background}80)`,
        }}>
            <div style={{
                height: '90vh', width: '95vw', 
                border: '2px solid #000',
                boxShadow: '0 10px 20px #00000030',
                borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                // backgroundColor: `${background}`,
                background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${background})`,
            }}>
                <div
                    style={{
                        height: '80%', width: '350px',
                        position: 'relative',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column', 
                    }}>

                    <HeadAvatar face={Face} skin={skin} hair={Hair} color={hairColor} glasses={Glasses} hat={Hat} beard={Beard} beardColor={beardColor}/>
                    <BodyAvatar clothe={clothe} />
                </div>

                <div style={{
                    width: '80vw', height: '10%',
                    position: 'absolute', top: '10vh', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                }}>
                    <Button style={{
                        height: '60%', borderRadius: '2vh 0 0 2vh', width:'30vh',
                        border: '1.6px solid #000', fontWeight: 500,
                        backgroundColor: `${background}80)`
                    }}>New avatar</Button>
                    <Button style={{
                        height: '60%', borderRadius: '0 2vh 2vh 0', fontWeight: 500,
                        border: '1.6px solid #000', marginLeft: '0.5vh', width:'30vh',
                        backgroundColor: `${background}80)`
                    }}>My avatars</Button>

                    <Button
                        icon={<BiMenu />}
                        style={{
                            position: 'absolute', right: '2vh',
                            border: '1.6px solid #000', backgroundColor: `${background}80)`
                        }} />
                </div>

                <Tabs
                    // className='scrollable-div'
                    style={{
                        width: 'auto', height: 'auto',
                        position: 'absolute', bottom: '8vh', fontWeight: 500,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                    defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

        </div>
    )
}
