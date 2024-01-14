import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai";
import { BodyAvatar, HeadAvatar, HeadAvatarSmall } from "../BodyAvatar";
import { Button, Col, Row } from "antd";
import { darker, lighter } from "../../helpers/functions";


export const Card = ({ makeFavorite, data, deleteAvatar, setCardID }) => {

    return (
        <>
            {
                data.map((avatar) => (

                    <Col 
                    className='avatar'
                    style={{
                        margin: '1%',
                        transition: 'all 0.45s ease-in-out',
                        
                    }}>
                        <div
                            onClick={() => setCardID(avatar.id)}
                            style={{
                                width: '150px', aspectRatio: '1/1', borderRadius: '2vh 2vh 0 0',
                                cursor:'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: avatar.background,
                                border:`1px solid ${darker(avatar.background,0.8)}`

                                // border: '1px solid red'
                            }}>
                            <HeadAvatarSmall face={avatar.face} skin={avatar.skin} hair={avatar.hair} color={avatar.hairColor} glasses={avatar.glasses}
                                hat={avatar.hat} beard={avatar.beard} beardColor={avatar.beardColor} />
                            {/* <BodyAvatar clothe={avatar.clothes} /> */}

                        </div >
                        <Row style={{
                            width: '100%', borderRadius: '0 0 2vh 2vh',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding:'0 1% 0 1%', backgroundColor: darker(avatar.background, 0.8)
                        }}>

                            <Button
                                type="ghost"
                                onClick={() => deleteAvatar(avatar.id)}
                                icon={<FaRegTrashCan size={15}  style={{
                                    color: lighter(avatar.background, 0.4)
                                }}/>}
                            />

                            <Button
                                type="ghost"
                                onClick={() => makeFavorite(avatar.id)}
                                icon={!avatar.favorite
                                    ? <AiOutlineStar size={20} style={{
                                        color: lighter(avatar.background, 0.4)
                                    }}/>
                                    : <AiFillStar size={20} style={{
                                        color: lighter(avatar.background, 0.4)
                                    }}/>}
                            />

                            


                        </Row>
                    </Col>


                ))}
        </>


    )
}
