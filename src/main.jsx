import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import QRCodePage from './components/QRCodePage/QRCodePage';
import datas from './datas.json';
import NavBar from './components/NavBar/NavBar';

import styles from "./main.module.css";


const generateRoutes = () => {
  return datas.map((item, index) => {
    return {
      path: `/${index}`,
      element: (
        <>
          <main>
            <QRCodePage {...item} />
          </main>
          <footer>
            <NavBar datas={datas}/>
          </footer>
        </>
      ),
      loader: () => Promise.resolve(item),
    };
  });
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirection automatique vers le premier item dans datas.json lorsqu'on se rend sur l'url racine '/' */}
        <Route path="/" element={<Navigate to="/1" />} />
        
        {generateRoutes().map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
