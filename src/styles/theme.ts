import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#111',
      main: '#000',
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff0000',
      dark: '#ff0000',
      contrastText: '#fff'
    }
    // background: {
    //   default: '#fff'
    // }
  },
  typography: {
    body2: {
      fontSize: 18
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
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
