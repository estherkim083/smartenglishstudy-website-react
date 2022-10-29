import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import decorationLight from '../../images/decoration_light.svg';
import decorationDark from '../../images/decoration_dark.svg';
import styles from './appStyles-jss';

function Decoration(props) {
  const {
    classes,
    mode,
    horizontalMenu
  } = props;
  
  return (
    <div className={classes.bgWrap}>
      <div
        className={classNames(
          classes.bgbar,
          horizontalMenu && classes.highTop,
          classes.solidBg
        )}
      >
      </div>
    </div>
  );
}

Decoration.propTypes = {
  classes: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  horizontalMenu: PropTypes.bool.isRequired,
};

export default (withStyles(styles)(Decoration));
