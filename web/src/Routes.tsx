import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'

import { NewGoldListPage } from './pages/GoldLists/newGoldList'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OpenGoldList } from './pages/GoldLists/openGoldList';
import { NewWordPage } from './pages/Words/newWord';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/goldlist/:id' element={<OpenGoldList />} />
        <Route path='/goldlist/edit/:id' element={<h1>"Editar Gold List"</h1>} />
        <Route path='/newgoldlist' element={<NewGoldListPage />} />
        <Route path='/newword/:id' element={<NewWordPage />} />
      </Route>
    </Routes>
  );
}