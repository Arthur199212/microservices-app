import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todo: {
      margin: '0.5rem 0 0 0',
      display: 'flex',
      alignItems: 'center',
      border: '0.5px solid #f3f3f3',
      backgroundColor: '#ffffff',
      cursor: 'default',
      userSelect: 'none',
      transition: 'box-shadow 0.2s ease-out',

      '&:hover': {
        boxShadow: '0px 0px 8px 0px #f0f0f0'
      }
    }
  })
)

export default useStyles
