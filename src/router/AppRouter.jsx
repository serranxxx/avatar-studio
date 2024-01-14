import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/LoginPage';
import { LayoutPage } from '../layout/LayoutPage';
import { MyAvatars } from '../layout/MyAvatars';
import { HomePage } from '../pages/HomePage';
import { MyCards } from '../pages/MyCards';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/avatar-studio/login" element = {<Login />} />
        <Route path = "/avatar-studio*" element = {<Login />} />
        <Route path = "/avatar-studio/home" element = {<HomePage />} />
        <Route path = "/avatar-studio/cards" element = {<MyCards />} />
        <Route path = "/avatar-studio/create-avatar" element = {<LayoutPage />} />
        <Route path = "/avatar-studio/my-avatars" element = {<MyAvatars />} />
    </Routes>
  )
}
