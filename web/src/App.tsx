import { useState } from 'react';
import './App.css'
import { HomePage } from './components/HomePage';
import { NewGoldListPage } from './components/NewGoldListPage';


import { Outlet } from 'react-router-dom';
import NavDrawer from './components/NavDrawer';

function App() {

  return (
    <>
    <header>
      <h1>GoldenPedia</h1>
      <NavDrawer/>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
      <p>Desenvolvido por L,T e A</p>
    </footer>
    </>
  )
}

export default App
