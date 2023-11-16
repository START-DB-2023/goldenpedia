import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'

import { NewGoldListPage } from './pages/NewGoldList'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newgoldlist" element={<NewGoldListPage/>} /> 
    </Routes>
  )
}