
import { Button } from 'antd'
import { RandomColor, RandomFace, RandomGlasses, RandomHair, RandomHats, RandomMoustache, RandomSkin } from '../layout/hooks/Randomizer'
import { useEffect, useState } from 'react'
import { BodyAvatar, HeadAvatar, HeadAvatarSmall } from '../layout/BodyAvatar'
import { beards } from '../layout/hooks/body_parts'

export const LoginCard = (props) => {

    const [Face, setFace] = useState(RandomFace(Math.floor(Math.random() * 3) + 1))
    const [skin, setSkin] = useState(RandomSkin(1))
    const [background, setBackground] = useState(RandomColor())
    const [clothe, setClothe] = useState(RandomColor())
    const [Hair, setHair] = useState(RandomHair(Math.floor(Math.random() * 4) + 1))
    const [hairColor, setHairColor] = useState(RandomColor())
    const [beardColor, setbeardColor] = useState(RandomColor())
    const [Glasses, setGlasses] = useState(RandomGlasses(Math.floor(Math.random() * 8) + 1))
    const [Hat, setHat] = useState(RandomHats(Math.floor(Math.random() * 7) + 1))
    const [Beard, setBeard] = useState(RandomMoustache(Math.floor(Math.random() * 5) + 1))

    const getRandomAvatar = () => {
        setFace(RandomFace(Math.floor(Math.random() * 3) + 1))
        setSkin(RandomSkin(Math.floor(Math.random() * 8) + 1))
        setHair(RandomHair(Math.floor(Math.random() * 4) + 1))
        setHairColor(RandomColor())
        setGlasses(RandomGlasses(Math.floor(Math.random() * 8) + 1))
        setBeard(RandomMoustache(Math.floor(Math.random() * 5) + 1))
        setbeardColor(RandomColor())
        setHat(RandomHats(Math.floor(Math.random() * 7) + 1))
        setClothe(RandomColor())
        setBackground(RandomColor())

    }

    useEffect(() => {
        const intervalId = setInterval(getRandomAvatar, 1500); // Cambia el estado cada 1000 milisegundos (1 segundo)
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []); // El array de dependencias está vacío para que el efecto se ejecute solo al montar el componente


    return (
        <>

            < div

                // key={avatar.id}
                style={{
                    marginLeft: '1vh', marginTop: '1vh',
                    width: 'auto', aspectRatio: '1/1', borderRadius: '50%',
                    background: 'transparent', border: `0px solid ${background}`,
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '1%'
                }
                }>

                <div
                    // className='avatar'
                    // onMouseEnter={getRandomAvatar}
                    style={{
                        width: '150px', aspectRatio: '1/1', borderRadius: '2vh', paddingTop: '5%',
                        // boxShadow: '0 0px 20px #00000020', transition: 'all 0.45s ease-in-out',
                        display: 'flex', alignItems: 'flex-end', justifyContent: 'center', borderRadius: '50%',
                    }}>
                    <div
                        style={{
                            width: '100%',
                            // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 50%), ${background}80)`,
                            backgroundColor: 'transparent',
                            position: 'relative',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column', borderRadius: '50%',
                            transition: 'all 0.65s ease-in-out',
                        }}>

                        <HeadAvatarSmall face={Face} skin={skin} hair={Hair} color={hairColor} glasses={Glasses} hat={Hat} beard={Beard} beardColor={beardColor} />
                        <BodyAvatar clothe={clothe} />


                    </div>




                </div>

            </div >

        </>


    )
}
