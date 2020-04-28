import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
      width: '3.5rem',
      minWidth: '3.5rem'
    },
    listItemContainer: {
      display: 'flex'
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
)

export default useStyles
