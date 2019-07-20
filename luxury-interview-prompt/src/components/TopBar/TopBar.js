import React from 'react';
import styles from './TopBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import LeftMenu from './LeftMenu';

const TopBar = () => {
  return (
    <div id={styles.topBar}>
      <AppBar
        position="fixed"
        className={styles.appBarContainer}
      >
        <ToolBar className={styles.toolBar} disableGutters>
          <LeftMenu />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default TopBar;
