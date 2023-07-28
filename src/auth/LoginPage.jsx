import { Button } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoginCard } from './LoginCard'
import { RandomColor } from '../layout/hooks/Randomizer'

export const LoginPage = () => {

  const changeBody = () => {
    document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${RandomColor()}80)`;
  }


  return (
    <div
      onMouseEnter={changeBody}
      style={{
        height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'Row',
      }}>


      <Link to="/avatar-studio/create-avatar"
        onMouseEnter={changeBody}>
        <LoginCard />
      </Link>






    </div>

  )
}
