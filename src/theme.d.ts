// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    header?: {
      main:string,
    }
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

    coverLetter?: {
      main: string;
    };

    subtext?: {
      main: string;
    };

  }
  interface Palette {
    header: {
      main: string; 
    }; 
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
    coverLetter: {
      main: string;
    };
    subtext: {  
      main: string;
    };
  }
}
