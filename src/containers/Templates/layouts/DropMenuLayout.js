import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import HeaderMenu from '../../../components/Header/HeaderMenu';
import dataMenu from '../../../api/ui/menu';
import Decoration from '../Decoration';
import styles from '../appStyles-jss';

function DropMenuLayout(props) {
  const {
    classes,
    pageLoaded,
    mode,
    changeMode,
    history,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    children
  } = props;
  return (
    <Fragment>
      <HeaderMenu
        type="top-navigation"
        dataMenu={dataMenu}
        changeMode={changeMode}
        mode={mode}
        history={history}
        toggleDrawerOpen={toggleDrawer}
        openMobileNav={sidebarOpen}
        loadTransition={loadTransition}
        logoLink="/"
      />
      <main
        className={
          classNames(
            classes.content,
            classes.highMargin
          )
        }
        id="mainContent"
      >
        <Decoration
          mode={mode}
          horizontalMenu
        />
        <section className={classNames(classes.mainWrap, classes.topbarLayout)}>
          { !pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />) }
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              {children}
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

DropMenuLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(DropMenuLayout));
