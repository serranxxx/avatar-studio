
import { Button } from 'antd'
import { BodyAvatar, HeadAvatar } from './BodyAvatar'

export const AvatarCard = (props) => {


    return (
        <>
            {
                props.data.map((avatar) => (
                    < div

                        key={avatar.id}
                        style={{
                            marginLeft: '2vh', marginTop: '5vh', marginBottom: '1vh',
                            width: 'auto', aspectRatio: '4/5',
                            background: avatar.background, borderRadius: '2vh', border: `2px solid ${avatar.background}`,
                            display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '1%'
                        }
                        }>
                        <div>

                        </div>
                        <div
                            className='avatar'
                            style={{
                                width: '350px', aspectRatio: '1/1', borderRadius: '2vh', paddingTop: '5%',
                                boxShadow: '0 0px 20px #00000020', transition: 'all 0.45s ease-in-out',
                                display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
                            }}>
                            <div
                                style={{
                                    width: '100%',
                                    background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 50%), ${avatar.background}80)`,
                                    position: 'relative',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexDirection: 'column', borderRadius: '2vh'
                                }}>

                                <HeadAvatar face={avatar.face} skin={avatar.skin} hair={avatar.hair} color={avatar.hairColor} glasses={avatar.glasses} hat={avatar.hat} beard={avatar.beard} beardColor={avatar.beardColor} />
                                <BodyAvatar clothe={avatar.clothes} />

                                <div style={{
                                    width: '90%', height: '15%',
                                    position: 'absolute', bottom: '0vh', borderRadius: '2vh',
                                    backgroundColor: 'transparent',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {/* <p style={{
                                        width:'60%', marginLeft:'3%', bottom:'-4vh',
                                        color:avatar.background,
                                        fontWeight:700, fontSize:'5vh', position:'absolute'
                                    }}>
                                        {avatar.name}
                                    </p> */}

                                    <Button
                                        type='ghost'
                                        style={{
                                            color: '#ffffff99', fontWeight: 500,
                                            backgroundColor: '#ffffff60',
                                        }}>
                                        Delete
                                    </Button>
                                    <Button
                                        type='ghost'
                                        style={{
                                            marginLeft: '1vh',
                                            color: '#ffffff99', fontWeight: 500,
                                            backgroundColor: '#ffffff60',
                                        }}>
                                        Download
                                    </Button>

                                </div>
                            </div>



                        </div>

                    </div >
                ))}
        </>


    )
}
