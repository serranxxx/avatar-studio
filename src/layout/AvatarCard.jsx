

import { BodyAvatar, HeadAvatar } from './BodyAvatar'
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai";


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
                                    width: '90%', height: '18%',
                                    position: 'absolute', bottom: '0vh', borderRadius: '2vh',
                                    backgroundColor: 'transparent', flexWrap: 'wrap',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <p style={{
                                        color: '#ffffff99', fontWeight: 500,
                                        fontSize: '3vh', cursor: 'default'
                                    }}>
                                        {avatar.name}
                                    </p>
                                    {
                                        !avatar.favorite
                                            ? <AiOutlineStar
                                                className='icon-fav'
                                                size={25}
                                                onClick={() => props.makeFavorite(avatar.id)}
                                                style={{
                                                    marginLeft: '2vh', cursor: 'pointer',
                                                    color: '#ffffff99', fontWeight: 500,
                                                    transition: 'all 0.25s ease-in-out',
                                                }} />
                                            : <AiFillStar
                                                className='icon-fav'
                                                size={25}
                                                onClick={() => props.makeFavorite(avatar.id)}
                                                style={{
                                                    marginLeft: '2vh', cursor: 'pointer',
                                                    color: '#f0c36a99', fontWeight: 500,
                                                    transition: 'all 0.25s ease-in-out',
                                                }} />
                                    }

                                    {/* <BiSolidDownload
                                        size={25}
                                        className='icon-download'
                                        onClick={handleDownload}
                                        style={{
                                            marginLeft: '1vh', cursor: 'pointer',
                                            color: '#ffffff99', fontWeight: 500,
                                            transition: 'all 0.25s ease-in-out',


                                        }} /> */}

                                    <AiFillDelete
                                        className='icon-delete'
                                        onClick={() => props.deleteAvatar(avatar.id)}
                                        size={25}
                                        style={{
                                            marginLeft: '1vh', cursor: 'pointer',
                                            color: '#ffffff99', fontWeight: 500,
                                            transition: 'all 0.25s ease-in-out',
                                        }} />

                                </div>
                            </div>



                        </div>

                    </div >
                ))}
        </>


    )
}
