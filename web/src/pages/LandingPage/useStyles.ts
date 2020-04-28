import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    getStartedButton: {
      margin: '1rem 0 5rem'
    },
    mainScreen: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    },
    spinnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    titleContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      flex: 1
    }
  })
)

export default useStyles
