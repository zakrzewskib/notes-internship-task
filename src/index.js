import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotesProvider from './store/NotesProvider';

import './index.css';
import App from './App';
import NotePage from './components/Notes/NotePage';

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
