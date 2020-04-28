import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      flexGrow: 1
    }
  })
)

export default useStyles
