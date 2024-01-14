import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Layout, Row, message } from 'antd';
import { BodyAvatar, HeadAvatar, HeadAvatarSmall } from '../BodyAvatar';
import { beards, faces, glasses, hairs, hats } from '../hooks/body_parts';
import { appContext } from '../../context/appContext';
import { RandomFace, RandomSkin } from '../hooks/Randomizer';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoSave } from "react-icons/io5";
import { MdAddReaction } from "react-icons/md";
import { randomColor, randomFace, randomGlasses, randomHair, randomHats, randomMoustache, randomSkin } from '../../helpers/randoms';
import { darker, generateUniqueKey } from '../../helpers/functions';

const { Content } = Layout;

export const ContentHome = () => {

    const {
        setSkin, setBackground, data, newData,
        setFace, setClothes, setHair, setGlasses,
        setHats, setBeards, face, skin, background,
        clothes, hair, glasses, hats, beards, beards_color,
        hair_color, setColorBeard, setColorHair
    } = useContext(appContext)

    const [avatar, setAvatar] = useState(data)
    // const [hairColor, setHairColor] = useState('#995c30')
    // const [beardColor, setbeardColor] = useState('#995c30')


    const getRandomAvatar = () => {
        setFace(randomFace(Math.floor(Math.random() * 3) + 1))
        setSkin(randomSkin(Math.floor(Math.random() * 8) + 1))
        setHair(randomHair(Math.floor(Math.random() * 4) + 1))
        setColorHair(randomColor())
        setGlasses(randomGlasses(Math.floor(Math.random() * 8) + 1))
        setBeards(randomMoustache(Math.floor(Math.random() * 5) + 1))
        setColorBeard(randomColor())
        setHats(randomHats(Math.floor(Math.random() * 7) + 1))
        setClothes(randomColor())
        setBackground(randomColor())
    }

    const newAvatar = () => {
        setFace(faces.face_1)
        setSkin(RandomSkin(Math.floor(Math.random() * 8) + 1))
        setHair(hairs.hair_0)
        setColorHair('#995c30')
        setGlasses(glasses.glass_0)
        setBeards(beards.beard_0)
        setColorBeard('#995c30')
        setHats(hats.hat_0)
        setClothes('#ddd')
        setBackground('#bcdde6')

    }

    const saveAvatar = () => {
        const newData = {
            id: generateUniqueKey(),
            // name: values.name,
            skin: skin,
            face: face,
            hair: hair,
            hairColor: hair_color,
            glasses: glasses,
            beard: beards,
            beardColor: beards_color,
            hat: hats,
            clothes: clothes,
            background: background,
            favorite: false
        }

        setAvatar([...avatar, newData])
        message.success('Saved')
    }

    useEffect(() => {
        newData(avatar)
    }, [avatar])



    return (
        <>
            <Content
                className='large'
                // className='scrollable-div resume-large'
                style={{
                    marginTop: '0vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '0vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    // height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row',
                    // backgroundColor:'red',

                    background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${`${background}80`})`,
                    // padding: '2% 5% 2% 5%',
                }}>



                <div style={{
                    width: '100%',
                    marginTop: '20vh',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                    // border: '1px solid red'
                    // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${background})`,
                }}>
                    <div style={{
                        height: '55%', width: '7vh',
                        borderRadius: '3vh',
                        backgroundColor: `${background}40`,
                        backdropFilter: 'blur(16px)',
                        border: `2px solid ${background}10`,
                        padding: '1%',
                        position: 'absolute', left: '35px',
                        top: '40px',
                        // bottom:'px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}>
                        <Button
                            onClick={getRandomAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<GiPerspectiveDiceSixFacesRandom size={40}
                                style={{
                                    color: darker(background, 0.7)
                                }}
                            />} />

                        <Button
                            onClick={newAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<MdAddReaction size={35}
                                style={{
                                    color: darker(background, 0.7)
                                }} />} />

                        <Button
                            onClick={saveAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<IoSave size={30}
                                style={{
                                    color: darker(background, 0.7)
                                }} />} />


                    </div>
                    <div
                        style={{
                            height: '100%', width: '350px',
                            position: 'relative',
                            // position: 'relative',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column',
                        }}>

                        <HeadAvatar face={face} skin={skin} hair={hair} color={hair_color} glasses={glasses} hat={hats} beard={beards} beardColor={beards_color} />
                        <BodyAvatar clothe={clothes} />
                    </div>

                </div>

            </Content>

            <Content
                className='small'
                // className='scrollable-div resume-large'
                style={{
                    marginTop: '0vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '0vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    // position: 'fixed', zIndex: 1, width: '100%',
                    backdropFilter: 'blur(16px)',
                    // position:'fixed',
                    // height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row',
                    // backgroundColor:'red',

                    background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${`${background}`})`,
                    // padding: '2% 5% 2% 5%',
                }}>



                <div style={{
                    width: '100%',
                    marginTop: '10vh',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                    // border: '1px solid red'
                    // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${background})`,
                }}>
                    <div style={{
                        height: '80%', width: '7vh',
                        borderRadius: '3vh',
                        backgroundColor: `${background}40`,
                        backdropFilter: 'blur(16px)',
                        border: `2px solid ${background}10`,
                        padding: '1%',
                        position: 'absolute', right: '15px',
                        bottom: '20px', zIndex:+1,
                        // bottom:'px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}>
                        <Button
                            onClick={getRandomAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<GiPerspectiveDiceSixFacesRandom size={25}
                                style={{
                                    color: darker(background, 0.7)
                                }}
                            />} />

                        <Button
                            onClick={newAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<MdAddReaction size={22}
                                style={{
                                    color: darker(background, 0.7)
                                }} />} />

                        <Button
                            onClick={saveAvatar}
                            type='ghsot'
                            style={{
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            icon={<IoSave size={20}
                                style={{
                                    color: darker(background, 0.7)
                                }} />} />


                    </div>
                    <div
                        style={{
                            height: '100%', width: '150px',
                            position: 'relative',
                            // position: 'relative',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column', marginBottom:'20px'
                        }}>

                        <HeadAvatarSmall face={face} skin={skin} hair={hair} color={hair_color} glasses={glasses} hat={hats} beard={beards} beardColor={beards_color} />
                        <BodyAvatar clothe={clothes} />
                    </div>

                </div>

            </Content>

        </>
    )
}
