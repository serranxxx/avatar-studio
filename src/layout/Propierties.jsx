import { Button } from 'antd'
import React, { useContext, useState } from 'react'
import { appContext } from '../context/appContext'
import { HeadAvatar } from './BodyAvatar'

export const Propierties = (props) => {

    // const [counter, setCounter] = useState(1)
    const { skin, background } = useContext(appContext)
    return (
        <>
            {

                props.size.map((propiertie) => (
                    <Button
                        onClick={() => props.action(propiertie)}
                        key={propiertie}
                        style={{
                            height: '10vh', aspectRatio: '1/1', borderRadius: '2vh',
                            backgroundColor:
                                `${props.type === 'skin' ?
                                    propiertie : props.type === 'background'
                                        ? propiertie : props.type === 'clothes'
                                            ? propiertie : props.type === 'hair'
                                                ? '#f3f3f3' : props.type === 'glasses' ?
                                                    '#f3f3f3' : props.type === 'hats' ?
                                                        '#f3f3f3' : props.type === 'beard' ?
                                                            '#f3f3f3' : skin} `,

                            marginRight: '1vh', border: '4px solid #fff', marginLeft: '1vh'
                        }}>

                        {
                            props.type === 'skin'
                                ? <></>
                                : props.type === 'background'
                                    ? <></>
                                    : props.type === 'clothes'
                                        ? <></>

                                        : <img style={{
                                            width: '110%',
                                            paddingTop: '1%', paddingBottom: '1%'
                                        }} src={propiertie} />
                        }

                    </Button>
                ))
            }
        </>
    )
}
