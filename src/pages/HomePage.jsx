import { Layout } from 'antd'
import React, { useContext, useEffect } from 'react'
import { HeaderApp } from '../layout/Home/HeaderApp'
import { ContentHome } from '../layout/Home/ContentHome'
import { SiderApp } from '../layout/Home/SiderApp'
import { appContext } from '../context/appContext'

export const HomePage = () => {

    const { newData, data, setBackground, background } = useContext(appContext)

    useEffect(() => {
      setBackground('#bcdde6')
    }, [])

    return (
        <>
            <Layout
                style={{ minHeight: '100vh' }}>
                <HeaderApp location={'home'}/>
                <Layout>
                    <ContentHome />
                    <SiderApp />
                </Layout>

            </Layout>
        </>

    )
}
