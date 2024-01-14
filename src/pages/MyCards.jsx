import { Drawer, Layout, message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { HeaderApp } from '../layout/Home/HeaderApp'
import { ContentCards } from '../layout/Cards/ContentCards'
import { appContext } from '../context/appContext'
import { SiderCards } from '../layout/Cards/SiderCard'
import { lighter } from '../helpers/functions'
import { FooterApp } from '../layout/Home/FooterApp'
import { HeadAvatar, BodyAvatar } from '../layout/BodyAvatar'

export const MyCards = () => {
    const { setBackground, background, data } = useContext(appContext)
    const [cardID, setCardID] = useState(null)
    const [smallCardID, setSmallCardID] = useState(null)
    const [card, setCard] = useState(null)
    const [visible, setVisible] = useState(false)
    // const [cards, setCards] = useState(data)

    const onClose = () => {
        setVisible(false)
        setSmallCardID(null)
        setCard(null)
    }

    useEffect(() => {
        setBackground('#bcdde6')
    }, [])

    useEffect(() => {
        if (smallCardID) {
            const currentCard = data.find(item => item.id === smallCardID);
            if (currentCard) {
                setCard(currentCard);
            }
        }
    }, [smallCardID])

    useEffect(() => {
        if (card) {
            setVisible(true)
        }
    }, [card])






    return (


        <>
            <Layout className='large'
                style={{ minHeight: '100vh', backgroundColor: background }}>
                <HeaderApp location={'cards'} />
                <Layout style={{
                    backgroundColor: lighter(background, 0.8)
                }}>
                    <ContentCards setCardID={setCardID} />
                    <SiderCards cardID={cardID} />
                </Layout>



            </Layout>

            <Layout className='small'
                style={{ minHeight: '100vh' }}>

                <HeaderApp />
                <ContentCards setCardID={setSmallCardID} />
                <FooterApp location={'cards'} />
                {/* <SiderApp /> */}


            </Layout>

            <Drawer

                placement="bottom"
                onClose={onClose}
                height='100%'
                open={visible}
                style={{
                    backgroundColor: card ? lighter(card.background, 0.5) : '#fff',
                    // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${card ? background : '#fff'})`,
                }}>

                {
                    card ?
                        <div
                            style={{
                                height: '100%', width: '350px',
                                position: 'relative',
                                // position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column',

                            }}>

                            <img src={card.face} style={{
                                opacity:'0.5'
                            }} />

                            <HeadAvatar face={card.face} skin={card.skin} hair={card.hair} color={card.hairColor}
                                glasses={card.glasses} hat={card.hats} beard={card.beard} beardColor={card.beardColor} />
                            <BodyAvatar clothe={card.clothes} />
                        </div>
                        : <></>
                }


            </Drawer>
        </>

    )
}
