import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Lobby from "./components/Lobby";
import StartGameNotify from "./components/StartGameNotify";
import Fight from "./components/Fight";
import Path from "./components/Path";
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route exact path="/Lobby" element={<Lobby />} />
            <Route exact path="/start" element={<StartGameNotify />} />
            <Route exact path="/fight" element={<Fight />} />
            <Route exact path="/path" element={<Path />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
