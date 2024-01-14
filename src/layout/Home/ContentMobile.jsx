import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, ColorPicker, Form, Layout, Row, message } from 'antd';

import { appContext } from '../../context/appContext';

import { darker, generateUniqueKey, lighter } from '../../helpers/functions';
import { features } from '../../helpers/features';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

const { Content } = Layout;

export const ContentMobile = () => {

    const [collapsed, setCollapsed] = useState(false)
    const [index, setIndex] = useState(0)
    const {
        setSkin, setBackground,
        setFace, setClothes, setHair, setGlasses,
        setHats, setBeards, face, skin, background,
        clothes, hair, glasses, hats, beards, beards_color,
        hair_color, setColorBeard, setColorHair
    } = useContext(appContext)

    const next = () => {
        if (index < features.length - 1) {
            setIndex(index + 1)
        }
    }

    const previous = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const newFeature = (type, value) => {
        switch (type) {
            case 'Skin': setSkin(value)
                break;
            case 'Face': setFace(value)
                break;
            case 'Background': setBackground(value)
                break;
            case 'Clothes': setClothes(value)
                break;
            case 'Hair': setHair(value)
                break;
            case 'Glasses': setGlasses(value)
                break;
            case 'Hats': setHats(value)
                break;
            case 'Beards': setBeards(value)
                break;
            default:
                break;
        }
    }

    const handleColor = (type, value) => {
        switch (type) {
            case 'Hair': setColorHair(`#${value.toHex()}`)
                break;
            case 'Beards': setColorBeard(`#${value.toHex()}`)
                break;

            case 'Clothes': setClothes(`#${value.toHex()}`)
                break;

            case 'Background': setBackground(`#${value.toHex()}`)
                break;

            case 'Skin': setSkin(`#${value.toHex()}`)
                break;


            default:
                break;
        }
    }

    const handleBackground = (type) => {
        switch (type) {
            case 'Skin': return skin
            case 'Background': return background
            case 'Clothes': return clothes
            case 'Hair': return hair_color
            case 'Beard': return beards_color
            default:
                break;
        }
    }



    return (
        <>
            <Content
                // className='scrollable-div resume-large'
                style={{
                    marginTop: '0vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '9vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    // overflowY: 'scroll',
                    // height: 'auto', // Ajusta estos valores según el header y footer
                    display: 'flex', alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row',
                    height:'25vh',
                    // backgroundColor:'red',

                    background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${`${background}80`})`,
                    // padding: '2% 5% 2% 5%',
                }}>


                <Col style={{
                    // width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', width: '100%', height: '100%',
                    marginTop: '0vh'
                }}>
                    <Row style={{
                        width: '80%', display: 'flex', alignItems: 'flex-start',
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        <Button
                            onClick={previous}
                            disabled={index === 0 ? true : false}
                            icon={<MdOutlineArrowBackIosNew size={18} style={{
                                color: lighter(background, 0.5)
                            }} />}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '3vh', backgroundColor: index === 0 ? '#00000010' : darker(background, 0.8),
                                border: '0px solid #000'
                            }}
                        />
                        {
                            features ?
                                <div style={{
                                    width: '70%', height: '4vh',
                                    borderRadius: '3vh',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: darker(background, 0.8),
                                    color: lighter(background, 0.5), fontWeight: 'bolder'
                                }}>
                                    {features[index].name}
                                </div>
                                : <></>
                        }
                        <Button
                            onClick={next}
                            disabled={index === features.length - 1 ? true : false}
                            icon={<MdOutlineArrowForwardIos size={18} style={{
                                color: lighter(background, 0.5)
                            }} />}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '3vh',
                                backgroundColor: index === features.length - 1 ? '#00000010' : darker(background, 0.8),
                                border: '0px solid #000'
                            }}
                        />

                    </Row>

                    <Row style={{
                        width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row', marginTop: '5vh'
                    }}>


                        {
                            features[index].items.map((item) => (
                                <Button
                                    onClick={() => newFeature(features[index].name, item)}
                                    style={{
                                        height: '8vh', aspectRatio: '1/1', cursor: 'pointer',
                                        borderRadius: '2vh', border: `3px solid ${darker(background, 0.8)}`,
                                        marginBottom: '4%', marginLeft: '2%', marginRight: '2%',
                                        backgroundColor:
                                            features[index].name === 'Face' ? skin :
                                                features[index].color ? item : lighter(background, 0.8),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        // marginRight:'4%'
                                    }}>
                                    {
                                        features[index].color ?
                                            <></>
                                            : <img src={item}
                                                style={{
                                                    width: '150%',
                                                    paddingTop: '1%', paddingBottom: '1%'
                                                }}
                                            />
                                    }

                                </Button>
                            ))
                        }

                        {
                            features[index].picker ?
                                <ColorPicker
                                    onChange={(values) => handleColor(features[index].name, values)}
                                    // allowClear
                                    disabledAlpha={false}
                                    // defaultValue={'#f5f5f5'}
                                    // defaultValue={handleBackground(features[index].name)}
                                    value={handleBackground(features[index].name)}
                                    style={{
                                        height: '8vh', aspectRatio: '1/1',
                                        borderRadius: '2vh', border: `3px solid ${lighter(background, 0.8)}`,
                                        marginBottom: '4%', marginLeft: '2%', marginRight: '2%',
                                        backgroundColor: handleBackground(features[index].name),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                    size={'10vh'} />
                                : <></>
                        }

                    </Row>

                    {/* <div style={{
                            width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        }}>
                            
                        </div> */}


                </Col>

            </Content>

        </>
    )
}
