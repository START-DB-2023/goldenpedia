import { useState } from 'react';
import './App.css'


import { BrowserRouter, Outlet } from 'react-router-dom';
import { Router } from './Routes';

export function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
