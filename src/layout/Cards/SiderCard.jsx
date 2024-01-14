import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, ColorPicker, Layout, Progress, Row, message } from 'antd';
import { UserOutlined, EditFilled, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { appContext } from '../../context/appContext';
import { darker, lighter } from '../../helpers/functions';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { features } from '../../helpers/features';
import { faces } from '../../helpers/body';
import { BodyAvatar, HeadAvatar } from '../BodyAvatar';
const { Sider } = Layout;

export const SiderCards = ({
    cardID
}) => {

    const [collapsed, setCollapsed] = useState(true)
    const [card, setCard] = useState(null)
    const [index, setIndex] = useState(0)
    const {
        setSkin, setBackground, data,
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

    useEffect(() => {
        const currentCard = data.find((item => item.id === cardID))
        if (currentCard) {
            setCard(currentCard)
            setBackground(currentCard.background)
            setCollapsed(false)
        }
    }, [cardID])

    useEffect(() => {
      if (collapsed) {
        setBackground('#bcdde6')
      }
    }, [collapsed])
    


    return (
        <Sider
            trigger={<div
                style={{
                    backgroundColor: collapsed ? darker(background, 0.9) : card ? darker(card.background, 0.6) : darker(background, 0.9)
                }} >
                {collapsed
                    ? <DoubleRightOutlined style={{ color: lighter(background, 0.6) }} />
                    : <DoubleLeftOutlined style={{ color: lighter(background, 0.6) }} />}</div>}
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            collapsible
            collapsedWidth={50}
            width={'35%'}
            style={{
                // backgroundColor: lighter(background, 0.4), 
                background: 
                collapsed ? lighter(background,0.4) :
                card ? 
                `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${`${card.background}80`})`
                : background,
                transition: 'all 0.25s ease-in-out',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '10vh 0 0vh 0',
                width: '100%', borderLeft: `0px solid ${card ? darker(card.background, 0.6) : darker(background, 0.9)}`

            }}
        >

            {
                !collapsed ?

                    card ?
                        <div
                            style={{
                                height: '100%', width: '350px',
                                position: 'relative',
                                // position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column',
                                
                            }}>

                            <HeadAvatar face={card.face} skin={card.skin} hair={card.hair} color={card.hairColor}
                                glasses={card.glasses} hat={card.hats} beard={card.beard} beardColor={card.beardColor} />
                            <BodyAvatar clothe={card.clothes} />
                        </div>
                        : <></>


                    // <img src={card.face} /> 
                    : <></>
            }


        </Sider>
    )
}
