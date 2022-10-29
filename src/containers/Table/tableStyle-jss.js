import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing(1),
  },
  rootTable: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginTop: '50px',
    padding: '20px',
    marginLeft: '-30px', 
  },
  cellTitleStyle: {
    fontFamily: "CookieRun-Regular",
    fontSize:"15px",
    fontWeight:"bold"
  },
  cellRegularStyle: {
    fontFamily: "CookieRun-Regular",
    fontSize:"15px",
    fontWeight: 10,
  },
  highlight:
    theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark,
    },
  toolbar: {
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.main, 0.6) : alpha(theme.palette.primary.main,0.5),
    minHeight: 48,
    //maxWidth: 1353,
    //minWidth: 830,
    
    minWidth: 480,
    '@media (max-width: 500px)': {
      minWidth: 570,
    },
    '@media (min-width: 500px)': {
      minWidth: 570,
    },
    '@media (min-width: 600px)': {
      minWidth: 550,
    },
    '@media (min-width: 1000px)': {
      minWidth: 600,
    },    
  },
  table: {
    maxWidth: 1500,
    minWidth: 600,
  },
  title: {
    flex: '0 0 auto',
    '& h6': {
      fontSize: 18,
      fontFamily: "CookieRun-Regular",
      color: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.2) : darken(theme.palette.primary.dark, 0.2),
    }
  },
  hover: {
    '& tbody tr:hover': {
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.5)
    }
  },
  bordered: {
    border: theme.palette.type === 'dark' ? `1px solid ${theme.palette.grey[900]}` : `1px solid ${theme.palette.primary.light}`,
    '& thead tr': {
      background: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.primary.light
    },
    '& td, th': {
      border: theme.palette.type === 'dark' ? `1px solid ${theme.palette.grey[900]}` : `1px solid ${theme.palette.primary.light}`
    },
    '& tr td, tr th': {
      '&:first-child': {
        borderLeft: 'none'
      },
      '&:last-child': {
        borderRight: 'none'
      }
    }
  },
});

export default styles;
