import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
      width: '3.5rem',
      minWidth: '3.5rem'
    }
  })
)

export default useStyles
