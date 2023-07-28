import React, { useContext, useEffect, useState } from 'react'
import { Propierties } from './Propierties'
import { Button, ColorPicker, Form, Input, Modal, Tabs } from 'antd'
import { Selector } from './Selector';
import { BodyAvatar, FaceAvatar, HairAvatar, HeadAvatar } from './BodyAvatar';
import { beards, faces, glasses, hairs, hats } from './hooks/body_parts';
import { appContext } from '../context/appContext';
import { HiLogout } from "react-icons/hi";
import { ImShuffle } from "react-icons/im";
import { AiFillSave } from "react-icons/ai";
import { RandomColor, RandomFace, RandomGlasses, RandomHair, RandomHats, RandomMoustache, RandomSkin } from './hooks/Randomizer';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';

export const LayoutPage = () => {



    const { data } = useContext(appContext)
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const [avatar, setAvatar] = useState(data)
    const { newSkin, newBackground, newData } = useContext(appContext)
    const [Face, setFace] = useState(faces.face_1)
    const [skin, setSkin] = useState(RandomSkin(Math.floor(Math.random() * 8) + 1))
    const [background, setBackground] = useState('#f3f3f3')
    const [clothe, setClothe] = useState('#ddd')
    const [Hair, setHair] = useState(hairs.hair_0)
    const [hairColor, setHairColor] = useState('#995c30')
    const [beardColor, setbeardColor] = useState('#995c30')
    const [Glasses, setGlasses] = useState(glasses.glass_0)
    const [Hat, setHat] = useState(hats.hat_0)
    const [Beard, setBeard] = useState(beards.beard_0)

    const generateUniqueKey = () => {
        const digits = '0123456789ABCD';
        let key = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            key += digits[randomIndex];
        }

        return key;
    };

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
            children: <Selector type={'beard'} action={beardSelector} color={setBeardColor} />,
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

    const getRandomAvatar = () => {
        setFace(RandomFace(Math.floor(Math.random() * 3) + 1))
        setSkin(RandomSkin(Math.floor(Math.random() * 8) + 1))
        setHair(RandomHair(Math.floor(Math.random() * 4) + 1))
        setHairColor(RandomColor())
        setGlasses(RandomGlasses(Math.floor(Math.random() * 8) + 1))
        setBeard(RandomMoustache(Math.floor(Math.random() * 5) + 1))
        setBeardColor(RandomColor())
        setHat(RandomHats(Math.floor(Math.random() * 7) + 1))
        setClothe(RandomColor())
        setBackground(RandomColor())

        newSkin(skin)
        newBackground(background)
    }

    const newAvatar = () => {
        setFace(faces.face_1)
        setSkin(RandomSkin(Math.floor(Math.random() * 8) + 1))
        setHair(hairs.hair_0)
        setHairColor('#995c30')
        setGlasses(glasses.glass_0)
        setBeard(beards.beard_0)
        setBeardColor('#995c30')
        setHat(hats.hat_0)
        setClothe('#ddd')
        setBackground('#f3f3f3')

        newSkin(skin)
        newBackground(background)
    }

    const saveAvatar = (values) => {
        console.log(values)
        const newData = {
            id: generateUniqueKey(),
            name: values.name,
            description: values.description,
            skin: skin,
            face: Face,
            hair: Hair,
            hairColor: hairColor,
            glasses: Glasses,
            beard: Beard,
            beardColor: beardColor,
            hat: Hat,
            clothes: clothe,
            background: background
        }

        setAvatar([...avatar, newData])
        form.resetFields();
        setVisible(false)
    }

    useEffect(() => {
        newData(avatar)
    }, [avatar])

    useEffect(() => {
        const changeBody = () => {
            document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${background}80)`;
        }

        changeBody()

    }, [background])




    return (

        <>
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

                        <HeadAvatar face={Face} skin={skin} hair={Hair} color={hairColor} glasses={Glasses} hat={Hat} beard={Beard} beardColor={beardColor} />
                        <BodyAvatar clothe={clothe} />
                    </div>

                    <div style={{
                        width: 'auto', height: '10%',
                        position: 'absolute', top: '10vh', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                    }}>
                        <Button
                            onClick={newAvatar}
                            style={{
                                borderRadius: '2vh 0 0 2vh', width: '15vh',
                                border: '1.6px solid #000', fontWeight: 500,
                                backgroundColor: `${background}70`
                            }}>New avatar</Button>

                        <Link to="/avatar-studio/my-avatars"
                            style={{
                                width: '15vh', marginLeft: '0.5vh'
                            }}>
                            <Button
                                style={{
                                    borderRadius: '0 0 0 0', fontWeight: 500, backgroundColor: 'red',
                                    border: '1.6px solid #000', width: '100%',
                                    backgroundColor: `${background}70`
                                }}>My avatars</Button>
                        </Link>


                        <Button
                            onClick={() => setVisible(true)}
                            icon={<AiFillSave size={20} />}
                            style={{
                                // position: 'absolute', right: '2vh',
                                marginLeft: '0.5vh', width: '10vh', borderRadius: '0',
                                border: '1.6px solid #000', backgroundColor: `${background}70`
                            }} />


                        <Button
                            icon={<ImShuffle size={20} />}
                            onClick={getRandomAvatar}
                            style={{
                                // position: 'absolute', right: '2vh',
                                marginLeft: '0.5vh', width: '10vh', borderRadius: '0',
                                border: '1.6px solid #000', backgroundColor: `${background}70`
                            }} />

                        <Link to="/avatar-studio/login" style={{
                            width: '10vh', marginLeft: '0.5vh'
                        }}>
                            <Button
                                icon={<HiLogout size={20} />}
                                style={{
                                    // position: 'absolute', right: '2vh',
                                    width: '100%', borderRadius: '0 2vh 2vh 0',
                                    border: '1.6px solid #000', backgroundColor: `${background}70`
                                }} />

                        </Link>

                    </div>
                    

                    <Tabs
                        
                        style={{
                            position: 'absolute', bottom: '8vh', fontWeight: 500,
                        }}
                        tabBarStyle={{
                            display:'flex',width:'40vw', fontWeight:500
                        }}
                        defaultActiveKey="1" items={items} onChange={onChange} />
                </div>

            </div>

            <Modal
                className='save-modal'
                open={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={<></>}

            >
                <Form
                    form={form}
                    onFinish={saveAvatar}
                    style={{
                        height: 'auto',
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                    <Form.Item
                        name='name'
                        style={{
                            width: '100%', margin: '0vh'
                        }}>
                        <Input style={{
                            backgroundColor: '#f1f1f1'
                        }} placeholder='Name' />
                    </Form.Item>

                    <Form.Item
                        name='description'
                        style={{
                            width: '100%', margin: '1vh 0 0 0'
                        }}>
                        <TextArea style={{
                            backgroundColor: '#f1f1f1'
                        }} placeholder='Description ...' />
                    </Form.Item>

                    <Form.Item style={{
                        width: 'auto', margin: '2vh 0 0 0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Button
                            htmlType='submit'
                            style={{
                                color: '#fff', fontWeight: 500,
                                width: '30vh', backgroundColor: background,
                                border: `1.5px solid ${background}`
                            }}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>

    )
}
