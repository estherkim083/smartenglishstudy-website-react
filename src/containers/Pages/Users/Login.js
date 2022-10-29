import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from '../../../api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoginForm from '../../../components/Forms/LoginForm';
import styles from '../../../components/Forms/user-jss';
import {loginGet} from '../../../axios';
import { Redirect } from 'react-router';
import { Map } from 'immutable';

function Login(props) {

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
              .catch(error => {});
  };

  const title = brand.name + ' - Login';
  const description = brand.desc;
  const { classes } = props;
  
  const [redirect, setRedirect ]= useState(false);
  var session_token=localStorage.getItem('token')
  
  if (redirect) {
    return <Redirect push to="/" />;
  }
  else if(session_token !== null) {
    return <Redirect push to="/"/>
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
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
