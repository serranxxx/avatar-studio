import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/LoginPage';
import { LayoutPage } from '../layout/LayoutPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/avatar-studio/login" element = {<LoginPage />} />
        <Route path = "/avatar-studio" element = {<LayoutPage />} />
        <Route path = "/avatar-studio/studi-page" element = {<LayoutPage />} />
    </Routes>
  )
}
