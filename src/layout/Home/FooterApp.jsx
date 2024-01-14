import React, { useContext, useState } from 'react'
import { Button, Layout, Row, } from 'antd';
import { appContext } from '../../context/appContext';
import { darker, lighter } from '../../helpers/functions';
import { PiCompassToolBold, PiUsersThreeBold } from 'react-icons/pi';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';

const { Footer } = Layout;


export const FooterApp = ({
    location
}) => {

    const { background } = useContext(appContext)

    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            backdropFilter: 'blur(16px)',
            backgroundColor: darker(background, 0.8), backdropFilter: 'blur(16px)',
            // padding:'0 5% 0 5%',
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            // boxShadow: '10px 0px 10px #00000040',
            borderBottom: '1px solid #f5f5f510',
            height: '11vh',
            alignItems: 'center', justifyContent: 'center'
        }}>

            <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', 
                    // marginBottom:'10px'
                    // width: '18%'
                }}>
                    {
                        location === 'home' ?
                            < Button
                                icon={<PiCompassToolBold size={25}
                                    style={{
                                        color: lighter(background, 0.5),
                                    }} />}
                                // type='ghost'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '1vh', fontWeight: 'bolder',
                                    backgroundColor: darker(background, 0.5),
                                    border: '0px solid #000', height:'40px', width:'40px',
                                    // height:'5vh', aspectRatio:'1/1',
                                    color: lighter(background, 0.5),

                                }}/>
                            : <Link to="/avatar-studio/home">
                                <Button
                                    type='ghost'
                                    icon={<PiCompassToolBold size={25}
                                        style={{
                                            color: lighter(background, 0.5),
                                        }} />}
                                    // type='ghost'
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '3vh', fontWeight: 'bolder',
                                        // backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>
                    }

                    {
                        location === 'cards' ?
                            <Button
                                icon={<PiUsersThreeBold size={25}
                                    style={{
                                        color: lighter(background, 0.5),
                                    }} />}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '1vh', fontWeight: 'bolder',
                                    backgroundColor: darker(background, 0.5),
                                    border: '0px solid #000',  height:'40px', width:'40px',
                                    margin: '0 15px 0 15px',
                                    // height:'5vh', aspectRatio:'1/1',
                                    color: lighter(background, 0.5),}}/>
                            :
                            <Link to="/avatar-studio/cards">
                                <Button
                                    type="ghost"
                                    icon={<PiUsersThreeBold size={25}
                                        style={{
                                            color: lighter(background, 0.5),
                                        }} />}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '50%',
                                        // backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000', margin: '0 15px 0 15px',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>

                    }

                    <Link to="/avatar-studio/login">
                        <Button
                            type='ghost'
                            icon={<IoMdLogOut size={25}
                                style={{
                                    color: lighter(background, 0.5),
                                }} />}
                            style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', fontWeight: 'bolder',
                                    // backgroundColor: lighter(background, 0.5),
                                    border: '0px solid #000', 
                                    // height:'5vh', aspectRatio:'1/1',
                                    color: darker(background, 0.5),}}/>
                    </Link>

                </Row>


        </Footer>





        // </Header>
    )
}
