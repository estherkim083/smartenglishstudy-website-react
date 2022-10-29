
const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`
  },
  textspan: {
    fontFamily:'CookieRun-Regular'
  },
  card: {
    minWidth: 275,
  },
  num: {
    fontSize: 14,
    marginLeft: 5
  },
  button: {
    marginRight: theme.spacing(1)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  cardSocmed: {    
    width: 400
  },
  gutterBottom: {
    marginBottom: theme.spacing(3)
  },
  title: {
    fontSize: 20,
    height: 30,
    fontWeight: theme.typography.fontWeightMedium
  },
  desc: {
    height: 45,
    overflow: 'hidden'
  },
  contentProfile: {
    flex: '1 0 auto',
    textAlign: 'center',
    marginTop: -70
  },
  mediaProfile: {
    height: 0,
    paddingTop: '66.25%',
    borderRadius: '50%',
    width: '120%',
    left: '-10%',
    position: 'relative',
    top: -70
  },
  avatar: {
    boxShadow: theme.shadows[7]
  },
  avatarBig: {
    width: 80,
    height: 80,
    margin: '-56px auto 10px',
    background: theme.palette.secondary.dark,
    boxShadow: theme.shadows[7]
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonProfile: {
    margin: 20
  },
  bottomLink: {
    width: '100%',
  },
  verified: {
    fontSize: 16,
    color: theme.palette.primary.main
  },
});

export default styles;
