import React, { useEffect, useState } from 'react'
import { Propierties } from './Propierties'
import { ColorPicker } from 'antd'
import { faces, hairs } from './body_parts'

export const Selector = (props) => {

    const [current, setCurrent] = useState([])

    const changeColor = (value) => {
        if (props.type === 'hair'){
            props.color(`#${value.toHex()}`)
        } else props.action(`#${value.toHex()}`)
        
    }


    useEffect(() => {
        const typeOfsize = () => {
            if (props.type === 'skin') setCurrent(['#6e3d39',  '#8c4b25',  '#995c30',  '#c7775c',  '#e59c65', '#ffb79e',  '#ffcba2', '#fee2d5'])
            if (props.type === 'face') setCurrent([faces.face_1, faces.face_2, faces.face_3])
            if (props.type === 'background') setCurrent(['#809bce', '#95b8d1', '#b8e0d2', '#d6eadf', '#eac4d5', '#f3f3f3'])
            if (props.type === 'clothes') setCurrent(['#d4afb9', '#d1cfe2', '#9cadce', '#7ec4cf', '#52b2cf', '#aaa'])
            if (props.type === 'hair') setCurrent([ hairs.hair_2, hairs.hair_4, hairs.hair_5])
        }

        typeOfsize()
    }, [])


    return (
        <>
            <div
                className='scrollable-div'
                style={{
                    width: 'auto', height: 'auto',
                    backgroundColor: '#ffffff50', border: '2.5px solid #000', padding: '2%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', borderRadius: '2vh',
                }}>
                {
                    current ? <Propierties type={props.type} size={current} action={props.action} />
                        : <></>
                }
                {
                    props.type === 'face'
                        ? <></>
                        : props.type === 'skin'
                            ? <></>
                            : <ColorPicker
                                onChange={changeColor}
                                style={{
                                    border: '2px solid #000', borderRadius: '1vh', marginLeft: '1vh', marginRight: '1vh'
                                }} />
                }


            </div>
        </>
    )
}
