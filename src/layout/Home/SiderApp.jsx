import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, ColorPicker, Layout, Progress, Row, message } from 'antd';
import { UserOutlined, EditFilled, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { appContext } from '../../context/appContext';
import { darker, lighter } from '../../helpers/functions';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { features } from '../../helpers/features';
import { faces } from '../../helpers/body';
const { Sider } = Layout;

export const SiderApp = () => {

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
        <Sider
            trigger={<div
                style={{
                    backgroundColor: darker(background, 0.9)
                }} >
                {!collapsed
                    ? <DoubleRightOutlined style={{ color: lighter(background, 0.6) }} />
                    : <DoubleLeftOutlined style={{ color: lighter(background, 0.6) }} />}</div>}
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            collapsible
            collapsedWidth={50}
            width={'30%'}
            style={{
                backgroundColor: lighter(background, 0.4), transition: 'all 0.25s ease-in-out',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '10vh 0 0vh 0',
                width: '100%', borderLeft: `0px solid ${darker(background, 0.8)}`

            }}
        >

            {
                !collapsed ?
                    <Col style={{
                        // width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'column', width: '30vw', height: '100%',
                        // marginTop: '5vh'
                    }}>
                        {/* <Row style={{
                            width: '80%', display: 'flex', alignItems: 'center',
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
                                        width: '80%', height: '4vh',
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

                        </Row> */}

                        <div style={{
                            width: '100%', backgroundColor: darker(background, 0.6), display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            borderBottom: `1.5px solid ${darker(background, 0.9)}`
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
                                            height: '10vh', aspectRatio: '1/1', cursor: 'pointer',
                                            borderRadius: '2vh', border: `6px solid ${lighter(background, 0.8)}`,
                                            marginBottom: '4%', marginLeft: '2%', marginRight: '2%',
                                            backgroundColor:
                                                features[index].name === 'Face' ? skin :
                                                    features[index].color ? item : lighter(background, 0.3),
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            // padding: '5%'
                                            // marginRight:'4%'
                                        }}>
                                        {
                                            features[index].color ?
                                                <></>
                                                : item ? <img src={item}
                                                    style={{
                                                        width: '90%',
                                                        paddingTop: '1%', paddingBottom: '1%'
                                                    }}
                                                /> : <></>
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
                                            height: '10vh', aspectRatio: '1/1',
                                            borderRadius: '2vh', border: `6px solid ${lighter(background, 0.8)}`,
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
                    : <></>
            }


        </Sider>
    )
}
