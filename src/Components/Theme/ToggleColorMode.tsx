import React, { useState } from 'react';
import App from '../App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: mode === 'light' ? { main: '#0091ea' } : { main: '#f06292' },
    secondary: mode === 'light' ? { main: blue[300] } : { main: blue[300] },
    error: mode === 'light' ? { main: red[500] } : { main: '#ffb74d' },
    background: {
      default: mode === 'light' ? '#eeeeee' : '#403841',
    },
    text: {
      primary: mode === 'light' ? blue[700] : blue[100],
      secondary: mode === 'light' ? blue[400] : blue[100],
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
