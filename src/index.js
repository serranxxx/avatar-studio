import React from 'react';
import ReactDOM from 'react-dom/client';
import AvatarStudio from './AvatarStudio';
import { BrowserRouter } from 'react-router-dom';
import './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AvatarStudio />
  </BrowserRouter>
);

