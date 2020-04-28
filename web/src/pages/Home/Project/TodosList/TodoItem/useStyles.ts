import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editButton: {
      marginLeft: '0.5rem',
      color: '#e0e0e0',
      cursor: 'pointer',
      transition: 'color 0.1s ease-out',

      '&:hover': {
        color: '#b5b5b5'
      }
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1
    },
    todoInput: {
      '&:before': {
        content: 'none'
      },
      '&:after': {
        content: 'none'
      }
    }
  })
)

export default useStyles
