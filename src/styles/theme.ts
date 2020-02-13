import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  /**
   *  Palette
   */
  palette: {
    // Type - light / dark
    type: 'dark',

    // Primary
    primary: {
      light: '#111',
      main: '#000',
      dark: '#000',
      contrastText: '#fff'
    },

    // Primary
    secondary: {
      main: '#ff0000',
      dark: '#ff0000',
      contrastText: '#fff'
    },

    // Background
    background: {
      default: '#111',
      paper: '#333'
    }

    // Typography
    // text: {
    //   primary: '',
    //   secondary: '',
    //   disabled: ''
    // },

    // Divider
    // divider: '',

    // Actions
    // action: {
    //   active: '',
    //   hover: '',
    //   selected: '',
    //   disabled: '',
    //   disabledBackground: ''
    // }
  },

  /**
   *  Typography
   */
  typography: {
    body2: {
      fontSize: 18
    }
  },

  /**
   *  Z-index
   */
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },

  transitions: {
    easing: {
      easeInOut: 'ease',
      easeOut: 'ease',
      easeIn: 'ease',
      sharp: 'ease'
    }
  },

  /**
   *  Overrides
   */
  overrides: {
    // Style sheet name ⚛️
    // MuiButton: {
    //   // Name of the rule
    //   text: {
    //     // Some CSS
    //     color: 'white'
    //   }
    // }
  }
});

export default theme;
