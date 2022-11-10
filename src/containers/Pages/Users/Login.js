import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from '../../../api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoginForm from '../../../components/Forms/LoginForm';
import styles from '../../../components/Forms/user-jss';
import {loginGet} from '../../../axios';
import { Redirect } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import { Map } from 'immutable';

function Login(props) {

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

  const submitForm = values => {
    
        loginGet(values.get("email"), values.get("password"))
              .then(res => {
                    var userInfo = Map({
                      user_name: res.data.user.user_name,
                      token: res.data.token
                    });
                    
                  setTimeout(() => {
                    const user_name= userInfo.get("user_name")
                    const token= userInfo.get("token")
                    localStorage.setItem("user_name", user_name);
                    localStorage.setItem("email", values.get("email"));
                    localStorage.setItem("token", token);
                    setRedirect(true);
                  }, 1000); 
                    
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

  const title = brand.name + ' - Login';
  const description = brand.desc;
  const { classes } = props;
  
  const [redirect, setRedirect ]= useState(false);
  var session_token=localStorage.getItem('token')
  
  if (redirect) {
    return <Redirect push to="/smartenglishstudy-website-react" />;
  }
  else if(session_token !== null) {
    return <Redirect push to="/smartenglishstudy-website-react"/>
  }
  else{
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className={classes.container}>
          <div className={classes.fullFormWrap}>
            <LoginForm onSubmit={(values) => submitForm(values)} />
          </div>
        </div>
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
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
