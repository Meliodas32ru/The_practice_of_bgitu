import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Lobby from "./components/Lobby";
import StartGameNotify from "./components/StartGameNotify";
import Fight from "./components/Fight";
import Path from "./components/Path";
import Chest from "./components/Chest";
import Win from "./components/Win";
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route exact path="/lobby" element={<Lobby />} />
            <Route exact path="/start" element={<StartGameNotify />} />
            <Route exact path="/fight" element={<Fight />} />
            <Route exact path="/path" element={<Path />} />
            <Route exact path="/chest" element={<Chest />} />
            <Route exact path="/win" element={<Win />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
