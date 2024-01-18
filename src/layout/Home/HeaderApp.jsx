import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Layout, Menu, Row, Select, Switch } from 'antd';
import { PiCompassToolBold, PiUsersThreeBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { appContext } from '../../context/appContext';
import { darker, lighter } from '../../helpers/functions';
import { Link } from 'react-router-dom';
const { Header } = Layout;


export const HeaderApp = ({
    location
}) => {

    const { background } = useContext(appContext)

    return (
        <>
            <Header
                className='large'
                style={{
                    position: 'fixed', zIndex: 1, width: '100%',
                    backgroundColor: darker(background, 0.8), backdropFilter: 'blur(16px)',
                    // padding:'0 5% 0 5%',
                    // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
                    // boxShadow: '10px 0px 10px #00000040',
                    borderBottom: '1px solid #f5f5f510',
                    height: '10vh',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>

                <p style={{
                    fontWeight: 'lighter', color: lighter(background, 0.7),
                    fontSize: '2em'
                }}><b style={{
                    fontWeight: 600
                }}>Avatar</b> Studio</p>

                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row',
                    // width: '18%'
                }}>
                    {
                        location === 'home' ?
                            < Button
                                icon={<PiCompassToolBold size={15}
                                    style={{
                                        color: darker(background, 0.5),
                                    }} />}
                                // type='ghost'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', fontWeight: 'bolder',
                                    backgroundColor: lighter(background, 0.5),
                                    border: '0px solid #000',
                                    color: darker(background, 0.5),

                                }}
                            >
                                Create avatar
                            </Button>
                            : <Link to="/avatar-studio/home">
                                <Button
                                    icon={<PiCompassToolBold size={15}
                                        style={{
                                            color: darker(background, 0.5),
                                        }} />}
                                    // type='ghost'
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '3vh', fontWeight: 'bolder',
                                        backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>
                    }

                    {
                        location === 'cards' ?
                            <Button
                                icon={<PiUsersThreeBold size={15}
                                    style={{
                                        color: darker(background, 0.5),
                                    }} />}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', fontWeight: 'bolder',
                                    backgroundColor: lighter(background, 0.5),
                                    border: '0px solid #000', margin: '0 5px 0 5px',
                                    color: darker(background, 0.5),

                                }}
                            >
                                My cards
                            </Button>
                            :
                            <Link to="/avatar-studio/cards">
                                <Button
                                    icon={<PiUsersThreeBold size={15}
                                        style={{
                                            color: darker(background, 0.5),
                                        }} />}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000', margin: '0 5px 0 5px',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>

                    }

                    <Link to="/avatar-studio/login">
                        <Button
                            icon={<IoMdLogOut size={15}
                                style={{
                                    color: darker(background, 0.5),
                                }} />}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', backgroundColor: lighter(background, 0.5),
                                border: '0px solid #000',
                                color: darker(background, 0.5),

                            }}
                        />
                    </Link>

                </Row>


            </Header >

            <Header
                className='small'
                style={{
                    position: 'fixed', zIndex: 1, width: '100%',
                    backgroundColor: darker(background, 0.4), backdropFilter: 'blur(16px)',
                    // padding:'0 5% 0 5%',
                    // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
                    // boxShadow: '10px 0px 10px #00000040',
                    borderBottom: '1px solid #f5f5f510',
                    height: '9vh',
                    alignItems: 'center', justifyContent: 'center'
                }}>

                <p style={{
                    fontWeight: 'lighter', color: lighter(background, 0.7),
                    fontSize: '2em'
                }}><b style={{
                    fontWeight: 600
                }}>Avatar</b> Studio</p>

                {/* <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row',
                    // width: '18%'
                }}>
                    {
                        location === 'home' ?
                            < Button
                                icon={<PiCompassToolBold size={15}
                                    style={{
                                        color: darker(background, 0.5),
                                    }} />}
                                // type='ghost'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', fontWeight: 'bolder',
                                    backgroundColor: lighter(background, 0.5),
                                    border: '0px solid #000',
                                    color: darker(background, 0.5),

                                }}
                            >
                                Create avatar
                            </Button>
                            : <Link to="/avatar-studio/home">
                                <Button
                                    icon={<PiCompassToolBold size={15}
                                        style={{
                                            color: darker(background, 0.5),
                                        }} />}
                                    // type='ghost'
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '3vh', fontWeight: 'bolder',
                                        backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>
                    }

                    {
                        location === 'cards' ?
                            <Button
                                icon={<PiUsersThreeBold size={15}
                                    style={{
                                        color: darker(background, 0.5),
                                    }} />}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '3vh', fontWeight: 'bolder',
                                    backgroundColor: lighter(background, 0.5),
                                    border: '0px solid #000', margin: '0 5px 0 5px',
                                    color: darker(background, 0.5),

                                }}
                            >
                                My cards
                            </Button>
                            :
                            <Link to="/avatar-studio/cards">
                                <Button
                                    icon={<PiUsersThreeBold size={15}
                                        style={{
                                            color: darker(background, 0.5),
                                        }} />}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: lighter(background, 0.5),
                                        border: '0px solid #000', margin: '0 5px 0 5px',
                                        color: darker(background, 0.5),

                                    }}
                                />
                            </Link>

                    }

                    <Link to="/avatar-studio/login">
                        <Button
                            icon={<IoMdLogOut size={15}
                                style={{
                                    color: darker(background, 0.5),
                                }} />}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', backgroundColor: lighter(background, 0.5),
                                border: '0px solid #000',
                                color: darker(background, 0.5),

                            }}
                        />
                    </Link>

                </Row> */}


            </Header >
        </>
    )
}
