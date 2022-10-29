import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    
    '@media (max-width: 200px)': {
      visibility: false
    },
    '@media (min-width: 500px)': {
      marginLeft: "50px",
    },
    '@media (min-width: 600px)': {
      marginLeft: "100px",
    },
    '@media (min-width: 700px)': {
      marginLeft: "200px",
    },
    '@media (min-width: 800px)': {
      marginLeft: "280px",
    },    
    '@media (min-width: 900px)': {
      marginLeft: "400px",
    },    
    '@media (min-width: 1000px)': {
      marginLeft: "500px",
    },    
    '@media (min-width: 1100px)': {
      marginLeft: "580px",
    },
    '@media (min-width: 1200px)': {
      marginLeft: "690px",
    },
    '@media (min-width: 1350px)': {
      marginLeft: "700px",
    },
    '@media (min-width: 1400px)': {
      marginLeft: "930px",
    },
  },
});
function FloatingButtons(props) {
  const { classes, theme } = props;
  const handleListeningBtnOnClick= () => {
    console.log('clicked');
    window.location.href='/listening/listening-create-scripts/'+9999999999;
  };
  return (
    <Fab color="primary" aria-label="add" className={classes.button} onClick={handleListeningBtnOnClick} >
      <AddIcon/>
    </Fab>
  );
}

FloatingButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingButtons);
