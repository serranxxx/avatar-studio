import React from 'react'
import { Propierties } from './Propierties'
import { Button, ColorPicker, Tabs } from 'antd'
import { Selector } from './Selector';

export const LayoutPage = () => {

    const items = [
        {
            key: 'skin',
            label: `Skin`,
            children: <Selector />,
        },
        {
            key: 'face',
            label: `Face`,
            children: <Selector />,
        },
        {
            key: 'hair',
            label: `Hair`,
            children: <Selector />,
        },
        {
            key: 'glasses',
            label: `Glasses`,
            children: <Selector />,
        },
        {
            key: 'moustache',
            label: `Moustache`,
            children: <Selector />,
        },
        {
            key: 'hats',
            label: `Hats`,
            children: <Selector />,
        },
        {
            key: 'clothes',
            label: `Clothes`,
            children: <Selector />,
        },
        {
            key: 'background',
            label: `Background`,
            children: <Selector />,
        },
        
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div style={{
            height: '100vh', width: 'auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                height: '90vh', width: '95vw', border: '4px solid #000',
                borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div
                    style={{
                        height: '90%', width: '30%',
                        backgroundColor: '#a8c1f4',
                    }}
                    className='img' />

                <div style={{
                    width:'80vw', height:'10%',
                    position:'absolute', top:'7vh', display:'flex', 
                    alignItems:'center', justifyContent:'center', flexDirection:'row'
                }}>
                    <Button style={{
                        height:'60%', borderRadius:'2vh 0 0 2vh',
                        border:'1.6px solid #000', fontWeight:500
                    }}>New avatar</Button>
                    <Button style={{
                        height:'60%', borderRadius:'0 2vh 2vh 0', fontWeight:500,
                        border:'1.6px solid #000', marginLeft:'0.5vh'
                    }}>My avatars</Button>

                    <Button style={{
                        position:'absolute', right:'2vh',
                        border:'1.6px solid #000'
                    }}/>
                </div>

                <Tabs 
                style={{
                    width:'auto', height:'auto',
                    position:'absolute', bottom:'8vh', fontWeight:500,
                    display:'flex', alignItems:'center', justifyContent:'center'
                }}
                defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

        </div>
    )
}
