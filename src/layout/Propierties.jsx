import { Button } from 'antd'
import React from 'react'

export const Propierties = (props) => {
    return (
        <>
            {
                props.size.map((propiertie) => (
                    <Button 
                    key={propiertie}
                    style={{
                        height: '70%', aspectRatio: '1/1', borderRadius: '2vh', backgroundColor: '#fff',
                        marginRight: '2vh', border: '2px solid #000'
                    }} />
                ))
            }
        </>
    )
}
