import React, { useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeToggle from '../Buttons/ThemeToggle';
import { ColorModeContext } from '../Theme/ToggleColorMode';
import GroupSizesColors from '../Buttons/GroupSizesColors';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--header-background-color',
      theme.palette.mode === 'light' ? '#fafafa' : '#333'
    );
  }, [theme.palette.mode]);
  const buttons = [
    <>
      <Button
        key="star-on-github"
        style={{ color: theme.palette.gitHub.main }}
        startIcon={<GitHubIcon sx={{ fontSize: 28 }} />}
        component="a"
        sx={{ textTransform: 'none' }}
        href="https://github.com/emiliayoffie/cl-tailor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Star on GitHub
      </Button>
      <ThemeToggle
        key="theme-toggle"
        onChange={colorMode.toggleColorMode}
        checked={theme.palette.mode === 'dark'}
      />
    </>,
  ];

  return (
    <header>
      <div className="cl-tailor-container">
      <Box
   sx={{
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
    },
  }}
>
  <h1
    style={{
      color: theme.palette.primary.main,
      fontSize: '2em',
    }}
  >
    <span style={{ fontWeight: 'normal' }}>CL-</span>
    <span style={{ fontWeight: 'bold' }}>Tailor</span>
  </h1>
</Box>
      </div>
      <GroupSizesColors buttons={buttons} />
    </header>
  );
};

export default Header;
