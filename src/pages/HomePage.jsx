import { Layout } from 'antd'
import React, { useContext, useEffect } from 'react'
import { HeaderApp } from '../layout/Home/HeaderApp'
import { ContentHome } from '../layout/Home/ContentHome'
import { SiderApp } from '../layout/Home/SiderApp'
import { appContext } from '../context/appContext'
import { ContentMobile } from '../layout/Home/ContentMobile'
import { FooterApp } from '../layout/Home/FooterApp'

export const HomePage = () => {

    const { newData, data, setBackground, background } = useContext(appContext)

    useEffect(() => {
        setBackground('#bcdde6')
    }, [])

    return (
        <>
            <Layout className='large'
                style={{ minHeight: '100vh' }}>
                <HeaderApp location={'home'} />
                <Layout>
                    <ContentHome />
                    <SiderApp />
                </Layout>

            </Layout>

            <Layout className='small'
                style={{ minHeight: '100vh' }}>

                <HeaderApp />
                <ContentHome />

                <ContentMobile />
                <FooterApp location={'home'}/>
                {/* <SiderApp /> */}


            </Layout>
        </>

    )
}
