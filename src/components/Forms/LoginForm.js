import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import People from '@material-ui/icons/People';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import brand from '../../api/dummy/brand';
import logo from '../../images/logo.svg';
import TextFieldRedux from './ReduxFormMUI'
import { CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import {socialLoginGet,naverLoginGetUserInfo} from '../../axios';
import { useGoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

import { Map } from 'immutable';
import axios from 'axios';
import GoogleIconImage from '../../images/btn_google_light_normal_ios_2x.png';
import Snackbar from '@material-ui/core/Snackbar';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function LoginForm(props) {
  let { type } = useParams();
  const [toast, setToast]= useState(null);
  const [toastMessage, setToastMessage]= useState(null);
  
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
      socialLoginGet(userInfo.data.email)
          .then(res => {
            userInfoToken = Map({
              token: res.data.token
            });
            
            const token= userInfoToken.get("token")
            localStorage.setItem("user_name", userInfo.data.name);
            localStorage.setItem("email", userInfo.data.email);
            localStorage.setItem("token", token);
            window.location.href='/smartenglishstudy-website-react';
          })
        .catch(error => {
          
          setToast("error");
          setToastMessage(error.response.data);
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  

  const initialFormData = Object.freeze({
		email: '',
		user_name: '',
		password: '',
    passwordConfirm: ''
	});
  
	const [formData, updateFormData] = useState(initialFormData);
  const location= useLocation();
  const CODE= location.search.split('=')[1];
  const NaverLogin = ()=> {
    var token= location.search.split('=')[1];
    token= token.split('&')[0];
    console.log(token);
    naverLoginGetUserInfo(token)
      .then(res => {
          localStorage.setItem("user_name", res.data.user_name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.token);
          window.location.href='/smartenglishstudy-website-react';
        
    })
    .catch(error => {
      
      setToast("error");
      setToastMessage(error.response.data);
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
  const KakaoLogin= () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers :{ 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=https://estherkim083.github.io/smartenglishstudy-website-react/auth/kakao&code=${CODE}`,
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
      socialLoginGet(data.kakao_account.email)
          .then(res => {
            userInfoToken = Map({
              token: res.data.token
            });            
            const token= userInfoToken.get("token")
            localStorage.setItem("user_name", data.kakao_account.profile.nickname);
            localStorage.setItem("email", data.kakao_account.email);
            localStorage.setItem("token", token);
            window.location.href='/smartenglishstudy-website-react';
          })
        .catch(error => {
          
          setToast("error");
          setToastMessage(error.response.data);
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
  const KAKAO_AUTH_URL= `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=https://estherkim083.github.io/smartenglishstudy-website-react/auth/kakao&response_type=code`;
  
  const handleKakaoLogin =() => {
    window.location.href= KAKAO_AUTH_URL;
  };
  const handleNaverLogin= ()=> {
    window.location.href=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4N4hr24Can8FuT0yjggz&redirect_uri=https://estherkim083.github.io/smartenglishstudy-website-react/auth/naver&state=sdfkjashftreer`;
  };

  // 카카오 로그인 버튼 스타일링  
  const imgSrc = require('../../images/kakao_login_medium.png');
  const KakaoButton = styled.div`
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  text-align: center;
  cursor: pointer;
  userSelect: none;
  width: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `;
  const Image = styled.img`
    width: 100px;
    height: 20px;
  `;
  const naverImgSrc = require('../../images/naver_login.png');
  const NaverButton = styled.div`
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  text-align: center;
  cursor: pointer;
  userSelect: none;
  width: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `;
  // 구글 로그인 버튼 스타일링
  const GoogleBtnTxt= styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    margin-right: 2px;
    margin-top: 5px;
    color: #757575;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `;

  const GoogleBtn=styled.div`
    transition: background-color .3s, box-shadow .3s;
    height:  27px;
    padding: 12px 9px 12px 42px;
    border: none;
    border-radius: 6px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    width: 13%;
      
    background-image: url(${GoogleIconImage});
    background-size: 40px;
    background-color: white;
    background-repeat: no-repeat;
    background-position:8px center;
  `;
  

  useEffect(() => {
    if(type=="kakao") {
      if(location.search) {
        KakaoLogin();
      }
      else {
        console.log('no kakao code');
      }
    }else if(type=="naver") {
      if(location.search) {
        NaverLogin();
      }
      else {
        console.log('no kakao code');
      }

    }
  }, []);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
    // deco,
  } = props;
  return (
    <Paper className={classNames(classes.fullWrap, classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/smartenglishstudy-website-react/auth/register/email">
          <VpnKeyIcon/>
          &nbsp;
          Create new account
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Sign In
      </Typography>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        로그인을 해주세요.
      </Typography>
      <section className={classes.pageFormWrap}>
        <div className={classes.btnArea}>          
          <GoogleBtn onClick={() => googleLogin()}>
            <GoogleBtnTxt>Sign in</GoogleBtnTxt>
          </GoogleBtn>
          <KakaoButton onClick={handleKakaoLogin}>
            <img src={imgSrc} />
          </KakaoButton>
          <NaverButton onClick={handleNaverLogin}>
            <img src={naverImgSrc} style={{borderRadius: '6%'}}/>
          </NaverButton>
        </div>
      </section>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        Or login with email
      </Typography>
      <section className={classes.pageFormWrap}>
        <form onSubmit={handleSubmit}>
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
                type={showPassword ? 'text' : 'password'}
                label="Your Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                required
                validate={required}
                className={classes.field}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div className={classes.optArea}>
            <FormControlLabel className={classes.label} control={<Field name="checkbox" component={CheckboxRedux} />} 
            label={<span className={classes.rememberlabel}>Remember</span>}/>
            <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>Forgot Password</Button>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth color="primary" size="large" type="submit">
              Continue
              <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
            </Button>
          </div>
        </form>
      </section>
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(LoginForm);

const reducerLogin = 'login';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducerLogin, 'usersLogin']),
  }),
)(LoginFormReduxed);

export default withStyles(styles)(FormInit);
