import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/LoginPage';
import { LayoutPage } from '../layout/LayoutPage';
import { MyAvatars } from '../layout/MyAvatars';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/avatar-studio/login" element = {<LoginPage />} />
        <Route path = "/avatar-studio*" element = {<LoginPage />} />
        <Route path = "/avatar-studio/create-avatar" element = {<LayoutPage />} />
        <Route path = "/avatar-studio/my-avatars" element = {<MyAvatars />} />
    </Routes>
  )
}
