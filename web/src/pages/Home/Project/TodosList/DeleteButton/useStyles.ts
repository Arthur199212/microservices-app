import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deleteButton: {
      width: '3rem',
      minWidth: '3rem'
    }
  })
)

export default useStyles
