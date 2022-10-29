import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from '../../../api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RegisterForm from '../../../components/Forms/RegisterForm';
import styles from '../../../components/Forms/user-jss';
import {registerPost} from '../../../axios';

import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Redirect } from 'react-router';

function Register(props) {

  const submitForm = values => {
        var userInfo= Map();
        console.log(values);
        registerPost(values.get("email"), values.get("name"), values.get("password"), values.get("passwordConfirm"))
              .then(res => {
                    userInfo = Map({
                      token: res.data.token
                    });
                    setTimeout(() => {
                      const token= userInfo.get("token")
                      localStorage.setItem("user_name", values.get("name"));
                      localStorage.setItem("email", values.get("email"));
                      localStorage.setItem("token", token);
                      setRedirect(true);
                  }, 1000);
              })
              .catch(error => {});
        
  };

  const title = brand.name + ' - Login Version 3';
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
  else {
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <div className={classes.fullFormWrap}>
            <RegisterForm onSubmit={(values) => submitForm(values)} />
          </div>
        </div>
      </div>
    );
  }
 
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
});


const RegisterMapped = connect(
  mapStateToProps,
)(Register);

export default withStyles(styles)(RegisterMapped);
