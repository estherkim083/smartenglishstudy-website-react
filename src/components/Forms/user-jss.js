
import cyan from '@material-ui/core/colors/cyan';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import BackgroundImage from '../../images/paper-lov.png'

const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const wrapper = (theme, opacity) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  // backgroundColor: alpha(theme.palette.background.paper, opacity),
  backgroundRepeat: 'no-repeat',
  // color: theme.palette.text.primary,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
});

const styles = theme => ({
  root: {
    ...rootWraper
  },
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  containerSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  fullWrap: {
    ...wrapper(theme, 0.5),
    height: '100%',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& $topBar': {
      width: '100%'
    },
  },
  petal: {
    // backgroundImage: theme.palette.type === 'dark' ? `url(${bgLight})` : `url(${bg})`,
    backgroundImage: `url(${BackgroundImage})`,
    height:'100vh',
    marginTop:'-20px',
    marginLeft:'-10px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    '& $icon': {
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginBottom: theme.spacing(3),
      '& a': {
        display: 'none'
      }
    }
  },
  outer: {},
  brand: {
    fontFamily: 'CookieRun-Regular',
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
    position: 'relative',
    fontWeight: 500,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&$outer': {
      color: theme.palette.common.white,
    },
    '&:hover': {
      color: theme.palette.secondary.main
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2)
    },
    '& img': {
      width: 30,
      marginRight: 10,
    },
  },
  formWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: '0 100px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 150px'
    },
  },
  pageFormWrap: {
    width: '100%',
    margin: `${theme.spacing(2)}px auto`,
    [theme.breakpoints.up('sm')]: {
      width: 480,
    },
  },
  pageFormSideWrap: {
    margin: '0 auto',
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  field: {

  },
  socmedLogin: {
    [theme.breakpoints.up('sm')]: {
      padding: '24px 100px 1px',
    },
    '& button': {
      padding: '4px 24px'
    }
  },
  socmedSideLogin: {
    padding: '24px 24px 1px',
    margin: '0 auto',
    '& button': {
      padding: '4px 16px',
      margin: `0 ${theme.spacing(1)}px`
    },
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  userFormWrap: {
    width: '94%',
    [theme.breakpoints.up('md')]: {
      width: 720
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    },
  },
  sideFormWrap: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  fullFormWrap: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "CookieRun-Regular"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "CookieRun-Regular"
  },
  label: {},
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: `${theme.spacing(2)}px 0`,
    fontSize: 12,
    '& $label': {
      fontSize: 12,
      '& span': {
        fontSize: 12
      }
    },
    '& button': {
      margin: `0 ${theme.spacing(1)}px`
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    },
  },
  blueBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  buttonLink: {
    background: 'none',
    padding: 0,
    textTransform: 'none',
    transition: 'color ease 0.3s',
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "CookieRun-Regular",
    fontSize: '1.0rem',
    '&:hover': {
      background: 'none',
      color: "#FF0000" // 이부분에서 색상 변경가능.
    }
  },
  tabLabel: {
    fontFamily:"CookieRun-Regular"
  },
  agreelabel : {
    fontFamily:"CookieRun-Regular"
  },
  rememberlabel: {
    fontFamily:"CookieRun-Regular"
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  tab: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
  },
  link: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  agreeLabelAndButton: {
    marginBottom: '-14px',
  },
  socmedFull: {
    textAlign: 'center',
    width: '100%',
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    '& button': {
      fontSize: '17px',
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing(2)}px`
    },
    [theme.breakpoints.up('sm')]: {
      '& button': {
        width: 400,
      }
    }
  },
  optArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(0.5)}px`
  },
});

export default styles;
