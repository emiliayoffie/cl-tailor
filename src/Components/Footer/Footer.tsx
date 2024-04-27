import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '10px',
      color: theme.palette.homeAndBuiltBy.main,
      // marginTop: '230px',
    }}>
      <div>
        Built by{' '}
        <a
          href="https://github.com/emiliayoffie"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.gitHub.main, 
            textDecoration: 'none' 
          }}
        >
          Emilia Yoffie
        </a>
      </div>
            
      <a href="https://www.buymeacoffee.com/emiliayoffie"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=emiliayoffie&button_colour=8e807b&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
    </footer>
  );
};

export default Footer;

// style="height: 60px !important;width: 217px !important;" ></a>