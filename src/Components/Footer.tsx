import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  return (
    <footer style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '10px',
      color: theme.palette.text.primary 
    }}>
      <div>
        Built by{' '}
        <a
          href="https://github.com/emiliayoffie"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.primary.main, 
            textDecoration: 'none' 
          }}
        >
          Emilia Yoffie
        </a>
      </div>
      <a href="https://www.buymeacoffee.com/emiliayoffie" target="_blank">
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" 
          alt="Buy Me A Coffee" 
          style={{ height: '40px', width: '145px' }}/>
          </a>
    </footer>
  );
};

export default Footer;
