import React, { useState ,useCallback, useEffect  } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import People from '@material-ui/icons/People';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import brand from '../../api/dummy/brand';
import logo from '../../images/logo.svg';
import TextFieldRedux from './ReduxFormMUI';
import {  CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import {socialRegisterPost, naverRegisterGetUserInfo} from '../../axios';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleIconImage from '../../images/btn_google_light_normal_ios_2x.png';
import NaverIconImage from '../../images/naver_logo.png';
import styled from 'styled-components';
import { Map } from 'immutable';
import { useParams } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';


// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.get('password')) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const [tab, setTab] = useState(0);
  const history = useHistory();
  let { type } = useParams();
  const [fetchedOnce, setFetchedOnce] = useState(false);
  const location= useLocation();
  const CODE= location.search.split('=')[1];
  
  const [notifState, setNotif] = useState({
    open: false,
    open2: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const {
    vertical,
    horizontal,
    open,
    open2
  } = notifState;

  const [toast, setToast]= useState(null);
  const [toastMessage, setToastMessage]= useState(null);

  const NaverRegister = ()=> {
    var token= location.search.split('=')[1];
    token= token.split('&')[0];
    console.log(token);
    naverRegisterGetUserInfo(token)
      .then(res => {
          localStorage.setItem("user_name", res.data.user_name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.token);
          window.location.href='/';
        
    })
    .catch(error => {
      
      setToast("error");
      if(error.response.data== "이 이메일 계정은 이미 존재합니다") {
        setToastMessage(error.response.data);
      }
      setNotif({
        ...notifState,
        open2: true,
      });
      setTimeout(() => {
        setNotif({
          ...notifState,
          open2: false,
        });
      }, 2000);
    });

    };

  const KakaoRegister= () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers :{ 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=
      https://estherkim083.github.io/smartenglishstudy-website-react/auth/register/kakao&code=${CODE}`,
    })
      .then(res=> res.json())
      .then(data => {

        console.log(data.access_token);
        if(data.access_token) {
          // localStorage.setItem('token', data.access_token);
          getUserKakaoInfo(data.access_token);

        }else {
          console.log('kakao-not-logined');
        }
      });
  }
  const getUserKakaoInfo= (KAKAO_ACCESS_TOKEN) => {
    console.log(KAKAO_ACCESS_TOKEN);
    fetch(`https://kapi.kakao.com/v2/user/me`, {
      method: 'POST',
      headers :{ 'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization': 
                    `Bearer ${KAKAO_ACCESS_TOKEN}`},
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      console.log(data.kakao_account.email);
      console.log(data.kakao_account.profile.nickname);
      
      var userInfoToken= Map();
      socialRegisterPost(data.kakao_account.email, data.kakao_account.profile.nickname)
          .then(res => {
            userInfoToken = Map({
              token: res.data.token
            });
            
            const token= userInfoToken.get("token")
            localStorage.setItem("user_name", data.kakao_account.profile.nickname);
            localStorage.setItem("email", data.kakao_account.email);
            localStorage.setItem("token", token);
            window.location.href='/';
          })
          .catch(error => {
            setToast("error");
            if(error.response.data== "이 이메일 계정은 이미 존재합니다") {
              setToastMessage(error.response.data);
            }
            setNotif({
              ...notifState,
              open2: true,
            });
            setTimeout(() => {
              setNotif({
                ...notifState,
                open2: false,
              });
            }, 2000);
          });
    });

  } 
  useEffect(() => {
    if(type=="naver") {
      console.log("naver");
      NaverRegister();

    }else if(type=="kakao") {
      if(location.search) {
        KakaoRegister();
      }
      else {
        console.log('no kakao code');
      }
    }
  }, []);
  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo= await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers : {Authorization :`Bearer ${tokenResponse.access_token}`}});
      console.log(userInfo);
      console.log(userInfo.data.email);
      console.log(userInfo.data.name);
      var userInfoToken= Map();
      socialRegisterPost(userInfo.data.email, userInfo.data.name)
          .then(res => {
            userInfoToken = Map({
              token: res.data.token
            });
            setTimeout(() => {
              const token= userInfoToken.get("token")
              localStorage.setItem("user_name", userInfo.data.name);
              localStorage.setItem("email", userInfo.data.email);
              localStorage.setItem("token", token);
              window.location.href='/';
              }, 1000);
            
          })
        .catch(error => {
            setToast("error");
            if(error.response.data== "이 이메일 계정은 이미 존재합니다") {
              setToastMessage(error.response.data);
            }
            setNotif({
              ...notifState,
              open2: true,
            });
            setTimeout(() => {
              setNotif({
                ...notifState,
                open2: false,
              });
            }, 2000);
        });
    },
    onError: errorResponse => console.log(errorResponse)
  });

  const handleChangeTab = (event, value) => {
    setTab(value);
  };
  
	const initialFormData = Object.freeze({
		email: '',
		user_name: '',
		password: '',
    passwordConfirm: ''
	});
  
	const [formData, updateFormData] = useState(initialFormData);

  const KAKAO_AUTH_URL= `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=https://estherkim083.github.io/smartenglishstudy-website-react/auth/register/kakao&response_type=code`;


	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

  const handleKakaoRegister =() => {
    window.location.href= KAKAO_AUTH_URL;
  };
  const handleNaverRegister= ()=> {
    window.location.href=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4N4hr24Can8FuT0yjggz&redirect_uri=https://estherkim083.github.io/smartenglishstudy-website-react/auth/register/naver&state=sdfkjashftreer`;
    
  };

  // 카카오 로그인 버튼 스타일링  
  const imgSrc = require('../../images/kakao_login_large_wide.png');
  const KakaoButton = styled.div`
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  text-align: center;
  cursor: pointer;
  userSelect: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;
  // 구글 로그인 버튼 스타일링
  const GoogleBtnTxt= styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    margin-right: 2px;
    color: #757575;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
    font-family: 'Roboto', sans-serif;
  `;

  const GoogleBtn=styled.div`
    transition: background-color .3s, box-shadow .3s;
      
    padding: 12px 9px 12px 42px;
    border: none;
    border-radius: 6px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    width: 86%;
      
    background-image: url(${GoogleIconImage});
    background-size: 60px;
    background-color: white;
    background-repeat: no-repeat;
    background-position:8px center;
  `;
  //NaverIconImage
  
  const NaverBtnTxt= styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    margin-right: 2px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
    font-family: 'NanumSquareR';
  `;
  const NaverBtn=styled.div`
    transition: background-color .3s, box-shadow .3s;
      
    padding: 12px 9px 12px 42px;
    border: none;
    border-radius: 6px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    width: 86%;
      
    background-image: url(${NaverIconImage});
    background-size: 60px;
    background-color: #03c75a;
    background-repeat: no-repeat;
    background-position:8px center;
  `;

  const {
    classes,
    handleSubmit,
    pristine,
    submitting
  } = props;
  return (
    <Paper className={classNames(classes.fullWrap, classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/auth/email">
          <VpnKeyIcon/>
          &nbsp;
          Already have account ?
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Register
      </Typography>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        회원가입을 해주세요.
      </Typography>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        indicatorColor="secondary"
        textColor="secondary"
        centered
        className={classes.tab}
      >
        <Tab label={<span className={classes.tabLabel}>With Email</span>} />
        <Tab label= {<span className={classes.tabLabel}>With Social Media</span>}/>
      </Tabs>
      {tab === 0 && (
        <section className={classes.pageFormWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="name"
                  component={TextFieldRedux}
                  placeholder="Username"
                  label="Username"
                  required
                  className={classes.field}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder="Your Email"
                  label="Your Email"
                  required
                  validate={[required, email]}
                  className={classes.field}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type="password"
                  label="Your Password"
                  required
                  validate={[required, passwordsMatch]}
                  className={classes.field}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="passwordConfirm"
                  component={TextFieldRedux}
                  type="password"
                  label="Re-type Password"
                  required
                  validate={[required, passwordsMatch]}
                  className={classes.field}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControlLabel
                control={(
                  <Field name="checkbox" component={CheckboxRedux} required className={classes.agree} />
                )}
                label={<span className={classes.agreelabel}>Agree With</span>}
                className={classes.agreeLabelAndButton}
              /> 
              <a href="#" style={{fontFamily:"CookieRun-Regular"}} className={classes.link}>Terms &amp; Condition</a>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" fullWidth color="primary" type="submit">
                Continue
                <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
              </Button>
            </div>
          </form>
        </section>
      )}
      {tab === 1 && (
        <section className={classes.socmedFull}>
          <Button fullWidth size="large" type="button" onClick={() => googleLogin()}>
            <GoogleBtn>
              <GoogleBtnTxt>Login in with Google</GoogleBtnTxt>
            </GoogleBtn>
          </Button>
          <Button fullWidth size="large" type="button">
            <KakaoButton onClick={handleKakaoRegister}>
              <img src={imgSrc} />
            </KakaoButton>
          </Button>
          <Button fullWidth size="large" type="button" onClick={()=> handleNaverRegister()}>
            <NaverBtn id='naverIdLogin'>
              <NaverBtnTxt>네이버 회원가입</NaverBtnTxt>
            </NaverBtn>
          </Button>
        </section>
      )}
      {toast!= null && toastMessage!= null && 
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open2}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{toastMessage}</span>}
          />
      }
    </Paper>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(RegisterForm);

const RegisterFormMapped = connect(
  state => ({
    force: state,
  }),
)(RegisterFormReduxed);

export default withStyles(styles)(RegisterFormMapped);
