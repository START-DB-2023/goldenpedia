import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'

import { NewGoldListPage } from './pages/GoldLists/newGoldList'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OpenGoldList } from './pages/GoldLists/openGoldList';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/goldlist' element={<OpenGoldList />} />
        <Route path='/newgoldlist' element={<NewGoldListPage />} />
      </Route>
    </Routes>
  );
}