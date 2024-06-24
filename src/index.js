import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Lobby from "./components/Lobby";
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route exact path="/Lobby" element={<Lobby />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
