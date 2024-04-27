import React, { useState } from 'react';
import App from '../App';
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { blue, green, red, blueGrey } from '@mui/material/colors';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: mode === 'light' ? { main: '#64b5f6' } : { main: '#f06292' },
    secondary: mode === 'light' ? { main: '#2979ff' } : { main: '#81d4fa' },
    error: mode === 'light' ? { main: '#f44336' } : { main: '#ffb74d' },
    background: {
      default: mode === 'light' ? blue[50] : '#403841',
    },
    text: {
      primary: mode === 'light' ? '#42a5f5' : '#aed581',
      secondary: mode === 'light' ? '#9e9e9e' : blue[100],
    },
    addField: mode === 'light' ? { main: '#9ccc65' } : { main: '#aed581' },
    homeAndBuiltBy:
      mode === 'light' ? { main: '#ce93d8' } : { main: '#eeeeee' },
    howToUse: mode === 'light' ? { main: '#f48fb1' } : { main: '#ffb74d' },
    gitHub: mode === 'light' ? { main: '#9ccc65' } : { main: '#aed581' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: mode === 'light' ? alpha('#bbdefb', 0.5) : alpha('#f48fb1', 0.1), 
          },
        },
      },
    },
  },
});

export const ToggleColorMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );
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
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
