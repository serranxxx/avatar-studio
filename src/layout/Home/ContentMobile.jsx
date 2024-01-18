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
            case 'Beards': return beards_color
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
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column',
                    height: '45vh',
                    // backgroundColor:'red',

                    background: darker(background, 0.5)
                    // padding: '2% 5% 2% 5%',
                }}>


                <Col style={{
                    // width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', width: '100%', height: '100%',
                    marginTop: '0vh'
                }}>
                    <div style={{
                        width: '100%', backgroundColor: darker(background, 0.6), display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        borderBottom: `1.5px solid ${darker(background, 0.4)}`
                    }}>
                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-around',
                            flexDirection: 'row', width: '100%',
                            backgroundColor: 'transparent',
                            margin: '2vh 0 0 0',
                            // border: '1px solid red',
                            padding: '0 8% 0 8%',

                        }}>
                            {
                                features.map((item) => (
                                    <Button
                                        onClick={() => setIndex(item.index)}
                                        type='ghost'
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: '2vh', borderRadius: '0',
                                            borderBottom: index === item.index ?
                                                `2px solid ${lighter(background, 0.6)}` : '0px solid #000',
                                            marginTop: '1vh'
                                        }}
                                        icon={<item.icon
                                            style={{
                                                color: index === item.index ?
                                                    lighter(background, 0.6)
                                                    : `${background}80`,
                                                marginBottom: '1vh'
                                            }}
                                            size={item.size}
                                        />} />
                                ))
                            }

                        </Row>
                    </div>



                    <Row style={{
                        width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row', marginTop: '5vh'
                    }}>


                        {
                            features[index].items.map((item) => (
                                <Button
                                    onClick={() => newFeature(features[index].name, item)}
                                    style={{
                                        height: '9vh', aspectRatio: '1/1', cursor: 'pointer',
                                        borderRadius: '2vh', border: `6px solid ${lighter(background, 0.2)}`,
                                        marginBottom: '4%', marginLeft: '2%', marginRight: '2%',
                                        backgroundColor:
                                            features[index].name === 'Face' ? skin :
                                                features[index].color ? item : darker(background, 0.8),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        // padding: '5%'
                                        // marginRight:'4%'
                                    }}>
                                    {
                                        features[index].color ?
                                            <></>
                                            : <img src={item}
                                                style={{
                                                    width: '90%',
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
                                        height: '9vh', aspectRatio: '1/1',
                                        borderRadius: '2vh', border: `6px solid ${lighter(background, 0.2)}`,
                                        marginBottom: '4%', marginLeft: '2%', marginRight: '2%',
                                        backgroundColor: handleBackground(features[index].name),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                    size={'10vh'} />
                                : <></>
                        }

                    </Row>


                </Col>

            </Content>

        </>
    )
}
