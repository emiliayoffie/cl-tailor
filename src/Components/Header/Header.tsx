import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import GroupSizesColors from '../Buttons/GroupSizesColors';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeToggle from '../Buttons/ThemeToggle';
import { ColorModeContext } from '../Theme/ToggleColorMode';

type headerProps = {
  onHowToUseClick: () => void;
};

const Header = ({ onHowToUseClick }: headerProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const buttons = [
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button key="home" style={{ color: '#eeeeee' }}>
          Home
        </Button>
      </Link>
      <Link to="/how-to-use" style={{ textDecoration: 'none' }}>
        <Button
          key="how-to-use"
          style={{ color: '#ffb74d' }}
          onClick={onHowToUseClick}
        >
          How to Use
        </Button>
      </Link>
      <Button
        key="star-on-github"
        style={{ color: '#aed581' }}
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
      <GroupSizesColors buttons={buttons} />
      <h1
        style={{
          color: theme.palette.primary.light,
        }}
      >
        Cover Letter Tailor
      </h1>
    </header>
  );
};

export default Header;
