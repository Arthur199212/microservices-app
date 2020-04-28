import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      marginLeft: '0.3rem',
      color: '#1976d2',

      '&:hover': {
        textDecoration: 'underline'
      }
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  })
)

export default useStyles
