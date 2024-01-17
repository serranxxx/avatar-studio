import { Button, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RandomColor } from '../layout/hooks/Randomizer'
import { texts } from '../layout/hooks/body_parts'
import { LoginCard } from '../auth/LoginCard'
import { darker, lighter } from '../helpers/functions'
import { randomColor } from '../helpers/randoms'

export const Login = () => {

  const [color, setcolor] = useState(RandomColor())

  const changeBody = () => {
    setcolor(RandomColor())

  }

  useEffect(() => {
    const intervalId = setInterval(changeBody, 1500); // Cambia el estado cada 1000 milisegundos (1 segundo)
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // El array de dependencias está vacío para que el efecto se ejecute solo al montar el componente

  useEffect(() => {
    document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${color}80)`;
  }, [color])


  return (
    <>
      <div
        className='login-large'
        style={{
          height: '100vh', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'Row',
        }}>

        <Col style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', marginRight: '25px'
        }}>
          <Col style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <p style={{
              margin: 0, fontSize: '4em',
              fontWeight: 'bolder', textAlign: 'left',
              color: darker(color, 0.8)
            }}>avatar</p>
            <p style={{
              margin: '-2vh 0 -5vh 0', fontSize: '4em',
              fontWeight: 'bolder', textAlign: 'left',
              color: lighter(color, 0.7)
            }}>studio</p>


            <Link to="/avatar-studio/home"
            >
              <Button
                className='avatar'
                style={{
                  marginTop: '7vh', backgroundColor: darker(color, 0.6),
                  width: '22vh', height: '4vh',
                  borderRadius: '3vh', border: `0px solid ${color}80`,
                  fontSize: '1.3em', fontWeight: 500, transition: 'all 0.25s ease-in-out',
                  color: lighter(color, 0.5),
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                  // boxShadow: '0px 7px 20px #00000020'
                }}>
                Let's create
              </Button>

            </Link>
          </Col>



        </Col>

        <LoginCard />

      </div>

      <div
        className='login-small'
        style={{
          height: '100vh', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'Row',
        }}>

        <Col style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column'
        }}>


          <Col style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <p style={{
              margin: 0, fontSize: '4em',
              fontWeight: 'bolder', textAlign: 'left',
              color: darker(color, 0.8)
            }}>avatar</p>
            <p style={{
              margin: '-3vh 0 1vh 0', fontSize: '4em',
              fontWeight: 'bolder', textAlign: 'left',
              color: lighter(color, 0.8)
            }}>studio</p>

          </Col>

          <LoginCard />

          <Link to="/avatar-studio/home"
          >
            <Button
              className='avatar'
              style={{
                marginTop: '2vh', backgroundColor: darker(color, 0.6),
                width: '22vh', height: '4vh',
                borderRadius: '3vh', border: `0px solid ${color}80`,
                fontSize: '1.3em', fontWeight: 500, transition: 'all 0.25s ease-in-out',
                color: lighter(color, 0.5),
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                // boxShadow: '0px 7px 20px #00000020'
              }}>
              Let's create
            </Button>

          </Link>


        </Col>



      </div>
    </>


  )
}
