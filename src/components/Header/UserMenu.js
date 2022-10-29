import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import dummy from '../../api/dummy/dummyContents';
import link from '../../api/ui/link';
import styles from './header-jss';
import { connect } from 'react-redux';
import {logoutAxios} from '../../axios';
import ListItemText from '@material-ui/core/ListItemText';

function UserMenu(props) {
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    openMenu: null
  });

  const handleMenu = menu => (event) => {
    const { openMenu } = menuState;
    setMenuState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, openMenu: null });
  };

  
  const { classes, 
          dark,
        } = props;
  const { anchorEl, openMenu } = menuState;
  const TextFont= {
    fontFamily: "CookieRun-Regular"
  };
  
  const [login, setLogin] = useState(false);
  useEffect(() => {
    
    const user_name= localStorage.getItem("user_name");
    const email= localStorage.getItem("email");
    const token= localStorage.getItem("token");
    if(token) {
      setLogin(true);
    }

  },[]);
  const logoutSubmit= () => {
      const email= localStorage.getItem("email");
      logoutAxios(email)
        .then(res => {
            console.log(res);
            localStorage.removeItem("user_name");
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            setLogin(false);
                
          })
          .catch(error => {});
  };


  return (
    <div>
      <Button onClick={handleMenu('user-setting')}>
        <Avatar
          alt={dummy.user.name}
          src={dummy.user.avatar}
        />
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenu === 'user-setting'}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to={link.profile} style={{fontFamily:"CookieRun-Regular"}}>My Profile</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={link.email} style={{fontFamily:"CookieRun-Regular"}}>
          My Inbox
          <ListItemIcon>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {login ? (
          <MenuItem onClick={logoutSubmit} component={Link} to="/" style={{fontFamily:"CookieRun-Regular"}}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        ) : (          
          <MenuItem component={Link} to="/auth/email" style={{fontFamily:"CookieRun-Regular"}}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            Log In
          </MenuItem>
        )}

      </Menu>
    </div>
  );
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};


UserMenu.defaultProps = {
  dark: false
};

const reducer = 'login';

const mapStateToProps = state => ({
  force: state, // force state from reducer
});

const UserMenuMapped = connect(
  mapStateToProps,
)(UserMenu);


export default withStyles(styles)(UserMenuMapped);


