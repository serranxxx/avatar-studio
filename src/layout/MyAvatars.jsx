import { Button } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'
import { AvatarCard } from './AvatarCard'
import { appContext } from '../context/appContext'
import { RandomColor } from './hooks/Randomizer'
import { AiFillStar } from "react-icons/ai";
import { MdBuild } from "react-icons/md";
import { HiLogout } from "react-icons/hi";

export const MyAvatars = () => {

    // const { data } = useContext(appContext)
    const data_ = JSON.parse(localStorage.getItem('MyAvatars'))
    const [favoriteState, setFavoriteState] = useState(false)
    const bg = JSON.parse(localStorage.getItem('avatar-background'))

    const { newData } = useContext(appContext)
    const [data, setData] = useState(data_)
    const [filteredData, setFilteredData] = useState(data)

    const deleteAvatar = (id_) => {

        const updatedAvatars = data.filter(avatar => avatar.id !== id_);
        setData(updatedAvatars)
    };

    useEffect(() => {
        newData(data)
        setFilteredData(data)
    }, [data])

    const makeFavorite = (id_) => {
        const Avatar = data.find(avatar => avatar.id === id_)
        if (Avatar) {
            Avatar.favorite = !Avatar.favorite
            setData([...data])
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

    useEffect(() => {
        const changeBody = () => {
            document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), #bcdde6)`;
        }
        changeBody()

    }, [])


    return (
        <div style={{
            width: '100%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <div style={{
                width: 'auto', height: '15vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexWrap: 'wrap'

            }}>

                <Button
                    icon={<AiFillStar size={20} />}
                    className='avatar'
                    onClick={myFavorites}
                    style={{
                        backgroundColor: `${favoriteState ? '#f0c145' : `#bcdde670`}`,
                        width: 'auto', borderRadius: '1vh', marginLeft: '2vh',
                        height: 'auto', border: `${favoriteState? '1.6px solid #f0c14580' : '1.6px solid #bcdde680'}`, fontWeight: 500,
                        color: '#fff', transition: 'all 0.45s ease-in-out',
                        fontSize: '3vh'
                    }}>Favorites</Button>

                <Link to="/avatar-studio/create-avatar">
                    <Button
                        icon={<MdBuild size={20} />}
                        className='avatar'
                        style={{
                            backgroundColor: `#bcdde670`,
                            width: 'auto', borderRadius: '1vh', marginLeft: '2vh',
                            height: 'auto', border: '1.6px solid #bcdde680', fontWeight: 500,
                            color: '#fff', transition: 'all 0.45s ease-in-out',
                            fontSize: '3vh'
                        }}>Create new avatar</Button>
                </Link>

                <Link to="/avatar-studio/login">
                    <Button
                        icon={<HiLogout size={20} />}
                        className='avatar logout-my-avatars'
                        style={{
                            backgroundColor: `#bcdde670`,
                            width: 'auto', borderRadius: '1vh', marginLeft: '2vh',
                            height: 'auto', border: '1.6px solid #bcdde680', fontWeight: 500,
                            color: '#fff', transition: 'all 0.5s ease-in-out',
                            fontSize: '3vh'
                        }}>Logout</Button>
                </Link>


            </div>

            <div style={{
                height: 'auto', width: 'auto',
                // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 50%), #f3f3f3)`,
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row',
                flexWrap: 'wrap', marginTop: '-5vh'
            }}>

                <AvatarCard data={filteredData} deleteAvatar={deleteAvatar} makeFavorite={makeFavorite} />

            </div>
        </div>


    )
}
