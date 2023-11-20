import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'

import { NewGoldListPage } from './pages/GoldLists/newGoldList'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/newgoldlist' element={<NewGoldListPage />} />
      </Route>
    </Routes>
  );
}