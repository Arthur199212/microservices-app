import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      marginRight: '0.5rem'
    },
    button: {
      marginTop: '1rem',
      padding: '0.5rem',
      width: '7.5rem'
    }
  })
)

export default useStyles
