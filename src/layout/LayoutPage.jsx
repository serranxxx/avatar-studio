import React, { useContext, useState } from 'react'
import { Propierties } from './Propierties'
import { Button, ColorPicker, Tabs } from 'antd'
import { Selector } from './Selector';
import { BodyAvatar, FaceAvatar, HairAvatar, HeadAvatar } from './BodyAvatar';
import { faces, hairs } from './body_parts';
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
        // {
        //     key: 'glasses',
        //     label: `Glasses`,
        //     children: <Selector />,
        // },
        // {
        //     key: 'moustache',
        //     label: `Moustache`,
        //     children: <Selector />,
        // },
        // {
        //     key: 'hats',
        //     label: `Hats`,
        //     children: <Selector />,
        // },
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
            display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: `${background}80`
        }}>
            <div style={{
                height: '90vh', width: '95vw', 
                border: '2px solid #000',
                boxShadow: '0 10px 20px #00000030',
                borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: `${background}`
            }}>
                <div
                    style={{
                        height: '80%', width: '350px',
                        position: 'relative',
                        // paddingTop: '10%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column', 
                        // paddingBottom:'10%',
                        // border:'1px solid red'
                    }}>

                    <HeadAvatar face={Face} skin={skin} hair={Hair} color={hairColor} />
                    {/* <HairAvatar hair={Hair} color={hairColor} /> */}
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
                        backgroundColor: '#ffffff80'
                    }}>New avatar</Button>
                    <Button style={{
                        height: '60%', borderRadius: '0 2vh 2vh 0', fontWeight: 500,
                        border: '1.6px solid #000', marginLeft: '0.5vh', width:'30vh',
                        backgroundColor: '#ffffff80'
                    }}>My avatars</Button>

                    <Button
                        icon={<BiMenu />}
                        style={{
                            position: 'absolute', right: '2vh',
                            border: '1.6px solid #000', backgroundColor: '#ffffff80'
                        }} />
                </div>

                <Tabs
                    className='scrollable-div'
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
