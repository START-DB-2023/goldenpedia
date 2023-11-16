import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Root from "./routes/root";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { ErrorPage } from './components/ErrorPage.tsx';
import { HomePage } from './components/HomePage.tsx';
import { AboutPage } from './components/AboutPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='sobre' element={<AboutPage/>}></Route>
        </Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);