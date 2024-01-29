import React, { useState } from 'react';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { green, yellow, blue, pink, grey, red, teal } from '@mui/material/colors';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: mode === 'light' ? blue : teal,
      secondary: mode === 'light' ? { main: blue[300] } : { main: blue[300] },
      error: mode === 'light' ? { main: red[900] } : {main: red[900] },
      background: {
        default: mode === 'light' ? grey[900] : grey[900],
        // paper: mode === 'light' ? pink[100] : pink[100],
      },
      text: {
        primary: mode === 'light' ? blue[100] : blue[100],
        secondary: mode === 'light' ? blue[100] : blue[100],
      },
    },
  });

export const ToggleColorMode = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      []
    );
  
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

  export default ToggleColorMode;
  