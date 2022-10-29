import { fade, darken } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: {
    flexGrow: 1,    
  },
  
  input: {
    display: "none",
  },
  cover: {
    '& $name, & $subheading': {
      color: theme.palette.common.black,
      fontFamily: 'CookieRun-Regular',
    },
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: 200,
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.8) : theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundSize: 'cover',
    textAlign: 'center',
    boxShadow: theme.shadows[7],
    backgroundPosition: 'bottom center',
    borderRadius: theme.rounded.medium,
  },
  profileTab: {
    marginTop: -72,
    [theme.breakpoints.down('sm')]: {
      marginTop: -48,
    },
    borderRadius: `0 0 ${theme.rounded.medium} ${theme.rounded.medium}`,
    background: fade(theme.palette.background.paper, 0.8),
    position: 'relative'
  },
  content: {
    background: fade(theme.palette.secondary.main, 0.3),
    height: '100%',
    width: '100%',
    padding: `70px ${theme.spacing(3)}px 30px`
  },
  name: {
    marginTop: '-30px',
    marginLeft: '15px',
  },
  subheading: {},
  avatar: {
    marginTop: '50px',
    margin: `0 auto ${theme.spacing(2)}px`,
    width: 87,
    height: 87,
  },
  opt: {
    position: 'absolute',
    top: 10,
    right: 10,
    '& button': {
      color: theme.palette.common.white
    }
  },
  verified: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  button: {
    marginTop: theme.spacing(1)
  }
});

export default styles;
