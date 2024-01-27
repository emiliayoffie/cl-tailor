const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div>
        Built by{' '}
        <a
          href="https://github.com/emiliayoffie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emilia Yoffie
        </a>
      </div>
      <a href="https://www.buymeacoffee.com/emiliayoffie" target="_blank">
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" 
          alt="Buy Me A Coffee" 
          style={{ height: '40px', width: '145px' }} 
        />
      </a>
    </footer>
  );
};


export default Footer;
