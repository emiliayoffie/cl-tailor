import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
import ToggleColorMode from './Components/ToggleColorMode.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);
