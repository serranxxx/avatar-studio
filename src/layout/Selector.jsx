import React from 'react'
import { Propierties } from './Propierties'
import { ColorPicker } from 'antd'

export const Selector = () => {
    return (
        <>
            <div 
            className='scrollable-div'
            style={{
                width: 'auto', height: '12vh', 
                backgroundColor: '#f3f3f395', paddingLeft: '2%', paddingRight:'2vh',
                border: '2.5px solid #000', 
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'row', borderRadius: '2vh 2vh 2vh 2vh',
            }}>
                <Propierties size={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
                <ColorPicker style={{
                    
                    border: '2px solid #000', borderRadius: '1vh'
                }} />
            </div>
        </>
    )
}
