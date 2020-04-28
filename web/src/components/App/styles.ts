import {
  createMuiTheme,
  Theme
} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff'
    }
  },

})

export const styles = (theme: Theme) => ({
  '@global': {
    'html': {
      boxSizing: 'border-box'
    },
    'body': {
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: '0.875rem',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    '*': {
      margin: 0,
      padding: 0
    },
    'ol': {
      listStyle: 'none'
    },
    'ul': {
      listStyle: 'none'
    },
    'a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  }
})
