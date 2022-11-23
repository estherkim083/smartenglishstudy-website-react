import { fade } from '@material-ui/core/styles/colorManipulator';
import { gradientBgLight, gradientBgDark } from '../../containers/Templates/appStyles-jss';
const drawerWidth = 240;

const styles = theme => ({
  
  appBar: {
    background: 'rgba(0,0,0,0)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $menuButton': {
      color: theme.palette.type === 'dark' ? gradientBgLight(theme) : gradientBgDark(theme),
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 10,
    },
    '&$left': {
      '& $menuButton': {
        marginLeft: 13,
      },
      '& $headerTitle': {
        left: theme.spacing(2),
      }
    },
    '&$leftBig': {
      '& $menuButton': {
        marginLeft: 30,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          marginLeft: 13,
        },
      },
      '& $headerTitle': {
        left: 0,
      }
    },
    '&$right': {
      '& $menuButton': {
        marginRight: 13,
      },
      '& $headerTitle': {
        right: theme.spacing(2),
      },
      '& > div': {
        flexDirection: 'row-reverse'
      },
      '& $flex': {
        textAlign: 'left'
      }
    },
  },
  attachedbar: {
    position: 'fixed',
    '& $menuButton': {
      margin: `0 ${theme.spacing(2)}px`
    },
    '& $wrapper': {
      [theme.breakpoints.down('lg')]: {
        border: `1px solid ${theme.palette.divider}`
      },
    },
  },
  appMenu: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(0.5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      background: fade(theme.palette.primary.main, 0.8),
    },
    color: theme.palette.text.primary
  },
  dark: {},
  light: {},
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 22,
    display: 'inline-block',
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '&$light': {
      background: fade(theme.palette.common.white, 0.2),
    },
    '&$dark': {
      background: theme.palette.type === 'dark' ? theme.palette.grey[700] : fade(theme.palette.common.white, 0.8),
      boxShadow: theme.shade.light,
      '& input': {
        color: theme.palette.grey[700],
      },
      '& input::placeholder': {
        color: theme.palette.grey[400],
        opacity: 1 /* Firefox */
      },
      '& input:-ms-input-placeholder': {
        color: theme.palette.grey[400],
      },
      '& input::-ms-input-placeholder': { /* Internet Explorer 10-11 */
        color: theme.palette.grey[400],
      }
    },
    '& $miniInput': {
      width: 70
    },
  },
  search: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  miniInput: {
    paddingLeft: 0,
    textIndent: '999999px'
  },
  fixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(1) * -8,
    }
  },
  notifMenu: {
    '& li': {
      height: 'auto',
      '& h3': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }
    }
  },
  badgeMenu: {
    '& span': {
      top: 0,
      right: -30
    }
  },
  textNotif: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
    },
  },
  textNotifDate: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
      fontFamily: "CookieRun-Regular"
    },
  },
  notifIcon: {
    '& i': {
      width: 28,
      height: 28,
      fontSize: 28
    },
    '&$dark': {
      '& i': {
        color: theme.palette.text.primary,
      }
    },
    '&$light': {
      '& i': {
        color: theme.palette.common.white,
      }
    },
  },
  brand: {
    display: 'flex',
    marginTop: '-10px',
    alignItems: 'center',
    marginLeft: '590px',
    "@media (min-width: 1000px)": {
      marginLeft: '590px',
    },
    "@media (min-width: 1620px)": {
      marginLeft: '750px',
    },
    padding: '10px 20px 5px',
    height: 64,
    position: 'absolute',
    width: '100%',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: "HSSaemaul-Regular",
    fontSize: 35,
    '& img': {
      marginRight: 10,
      width: 30
    },
  },
  mainMenu: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2, 0),
    boxShadow: theme.shadows[3],
    position: 'relative',
    transition: 'padding 0.3s ease',
    '& > div': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  headMenu: {
    fontSize: 14,
    fontFamily: "CookieRun-Regular",
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    minHeight: 'auto',
    margin: `0 ${theme.spacing(0.5)}px`,
    lineHeight: '2em'
  },
  opened: {
    color: theme.palette.primary.main,
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.main}`,
    '& svg': {
      fill: theme.palette.primary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(0.5),
    opacity: 0.3
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.main,
    },
    '& svg': {
      fill: theme.palette.primary.light,
    },
    '& $rightIcon': {
      opacity: 0.7
    }
  },
  paperMenu: {
    overflow: 'auto',
    maxHeight: 500
  },
  title: {
    fontSize: 15,
    textTransform: 'uppercase',
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '25px',
    background: theme.palette.primary.main,
    borderRadius: theme.rounded.medium,
    fontFamily: "CookieRun-Regular",
  },
  dropDownMenu: {
    minWidth: 300,
    marginTop: theme.spacing(1.5),
    position: 'relative',
  },
  active: {},
  menuItem: {
    '& span': {
      fontSize: 14,
      fontFamily: "CookieRun-Regular",
    },
    '&$active': {
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
      '& span': {
        color: theme.palette.primary.main,
        fontFamily: "CookieRun-Regular",
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
      }
    }
  },
  button: {},
  headerProperties: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    zIndex: 1
  },
  fadeOut: {},
  invert: {},
  headerAction: {
    margin: `0 ${theme.spacing(3)}px`,
    transition: 'opacity 0.5s ease',
    '& $button': {
      margin: `0 ${theme.spacing(1)}px / 2`,
      '& i': {
        color: fade(theme.palette.common.white, 0.87),
        width: 28,
        height: 28,
        fontSize: 28,
        
      }
    },
    '&$fadeOut': {
      opacity: 0,
    },
    '&$invert': {
      '& $button': {
        '& i': {
          color: fade(theme.palette.text.primary, 0.5),
        }
      }
    }
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  searchHeaderMenu: {
    flex: 1,
    flexDirection: 'row-reverse',
    display: 'flex',
    alignItems: 'center'
  }
});

export default styles;
