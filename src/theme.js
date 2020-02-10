import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ff0000'
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
