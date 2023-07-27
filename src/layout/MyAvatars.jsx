import { Button } from 'antd'
import React, { useContext } from 'react'
import { Link, } from 'react-router-dom'
import { AvatarCard } from './AvatarCard'
import { appContext } from '../context/appContext'
import { RandomColor } from './hooks/Randomizer'

export const MyAvatars = () => {

    // const { data } = useContext(appContext)
    const data = JSON.parse(localStorage.getItem('MyAvatars'))
    return (
        <>
            <div style={{
                width:'100%', height:'15vh',
                display:'flex', alignItems:'center', justifyContent:'center'
            }}>
                <Link to="/avatar-studio/create-avatar">
                    <Button
                        className='avatar'
                        style={{
                            backgroundColor: `${RandomColor()}80`,
                            width: '30vh', borderRadius: '2vh',
                            height: '40%', border: '0px solid #000', fontWeight: 500,
                            color: '#fff', transition: 'all 0.45s ease-in-out',
                        }}>Create new avatar</Button>
                </Link>
            </div>

            <div style={{
                height: 'auto', width: 'auto',
                // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 50%), #f3f3f3)`,
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row',
                flexWrap: 'wrap', marginTop:'-5vh'
            }}>

                <AvatarCard data={data} />

            </div>
        </>


    )
}
