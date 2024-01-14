import React, { useContext, useEffect, useState } from 'react'
import { AvatarCard } from '../AvatarCard'
import { appContext } from '../../context/appContext'
import { Content } from 'antd/es/layout/layout'
import { Card } from './Card'


export const ContentCards = ({
    setCardID
}) => {



    const [favoriteState, setFavoriteState] = useState(false)

    const { newData, data, setBackground, background } = useContext(appContext)
    const [filteredData, setFilteredData] = useState(data)

    const deleteAvatar = (id_) => {

        const updatedAvatars = data.filter(avatar => avatar.id !== id_);
        newData(updatedAvatars)
    };

    useEffect(() => {
        newData(data)
        setFilteredData(data)
    }, [data])

    const makeFavorite = (id_) => {
        const Avatar = data.find(avatar => avatar.id === id_)
        if (Avatar) {
            Avatar.favorite = !Avatar.favorite
            newData([...data])
        }
    }

    const myFavorites = () => {
        if (!favoriteState) {
            setFavoriteState(!favoriteState)
            const favoriteAvatars = data.filter(avatar => avatar.favorite !== false);
            setFilteredData(favoriteAvatars)
        } else {
            setFavoriteState(!favoriteState)
            setFilteredData(data)
        }

    }



    return (

        <>
            <Content
                className='large'
                // className='scrollable-div resume-large'
                style={{
                    marginTop: '15vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '0vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    alignItems: 'flex-start', justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                <div style={{
                    width: '90%',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap',
                }}>
                    <Card
                        data={filteredData}
                        setCardID={setCardID}
                        deleteAvatar={deleteAvatar}
                        makeFavorite={makeFavorite}
                    />
                </div>

            </Content>

            <Content
                className='small'
                // className='scrollable-div resume-large'
                style={{
                    marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '11vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    alignItems: 'flex-start', justifyContent: 'flex-start',
                    flexDirection: 'row',
                }}>
                <div style={{
                    width: '100%',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap',
                }}>
                    <Card
                        data={filteredData}
                        setCardID={setCardID}
                        deleteAvatar={deleteAvatar}
                        makeFavorite={makeFavorite}
                    />
                </div>

            </Content>
        </>

    )
}
