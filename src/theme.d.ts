// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    addField?: {
      main: string;
    };
    homeAndBuiltBy?: { 
      main: string; 
    }
    howToUse?: { 
      main: string; 
    }
    gitHub?: { 
      main: string; 
    }
  }
  interface Palette {
    addField: {
      main: string;
    };
    homeAndBuiltBy: {
      main: string;
    };
    howToUse: {
      main: string;
    };
    gitHub: { 
      main: string; 
    }
  }
}
