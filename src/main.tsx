import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import ToggleColorMode from './Components/Theme/ToggleColorMode.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);
