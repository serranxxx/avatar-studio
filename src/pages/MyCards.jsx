import { Layout, message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { HeaderApp } from '../layout/Home/HeaderApp'
import { ContentCards } from '../layout/Cards/ContentCards'
import { appContext } from '../context/appContext'
import { SiderCards } from '../layout/Cards/SiderCard'
import { lighter } from '../helpers/functions'

export const MyCards = () => {
    const { newData, data, setBackground, background } = useContext(appContext)
    const [cardID, setCardID] = useState('')

    useEffect(() => {
      setBackground('#bcdde6')
    }, [])

    
    return (


        <>
            <Layout
                style={{ minHeight: '100vh', backgroundColor:background }}>
                <HeaderApp location={'cards'}/>
                <Layout style={{
                    backgroundColor:lighter(background,0.8) 
                }}>
                    <ContentCards setCardID={setCardID}/> 
                    <SiderCards cardID={cardID}/>
                </Layout>
               
                

            </Layout>
        </>

    )
}
