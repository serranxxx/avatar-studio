import { Button, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginCard } from './LoginCard'
import { RandomColor } from '../layout/hooks/Randomizer'
import { texts } from '../layout/hooks/body_parts'

export const LoginPage = () => {

  const [color, setcolor] = useState(RandomColor())

  const changeBody = () => {
    document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${RandomColor()}80)`;
    setcolor(RandomColor())
  }

  useEffect(() => {
    const intervalId = setInterval(changeBody, 1500); // Cambia el estado cada 1000 milisegundos (1 segundo)
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // El array de dependencias está vacío para que el efecto se ejecute solo al montar el componente


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
          flexDirection: 'column'
        }}>
          <div>
            <img src={texts.title} style={{
              width: '70vh'
            }} />
          </div>

          <Link to="/avatar-studio/create-avatar"
          >
            <Button
              className='avatar'
              style={{
                marginTop: '3vh', backgroundColor: `${color}70`,
                width: '40vh', height: '8vh',
                borderRadius: '3vh', border: `0px solid ${color}80`,
                fontSize: '3vh', fontWeight: 500, transition: 'all 0.25s ease-in-out',
                color: '#fff', boxShadow: '0px 7px 20px #00000020'
              }}>
              Let's start
            </Button>

          </Link>


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
           <LoginCard />
          
          <Link to="/avatar-studio/create-avatar"
          >
            <Button
              className='avatar'
              style={{
                marginTop: '3vh', backgroundColor: `${color}70`,
                width: '40vh', height: '8vh',
                borderRadius: '3vh', border: `0px solid ${color}70`,
                fontSize: '3vh', fontWeight: 500, transition: 'all 0.25s ease-in-out',
                color: '#fff', boxShadow: '0px 7px 20px #00000020'
              }}>
              Let's start
            </Button>

          </Link>


        </Col>

       

      </div>
    </>


  )
}
