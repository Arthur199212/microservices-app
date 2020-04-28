import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    email: {
      marginTop: '1.5rem',
      display: 'flex'
    },
    root: {
      marginTop: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    spinnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    title: {
      width: '100%'
    }
  })
)

export default useStyles
