import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: '1rem',
      height: '3.5rem'
    },
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -70%)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    iconContainer: {
      margin: '0 auto',
      backgroundColor: '#3f51b5'
    },
    infoContainer: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
      marginLeft: '0.3rem',
      color: '#1976d2',

      '&:hover': {
        textDecoration: 'underline'
      }
    },
    textfield: {
      marginTop: '1rem'
    },
    title: {
      marginTop: '0.6rem',
      textAlign: 'center'
    }
  })
)

export default useStyles
