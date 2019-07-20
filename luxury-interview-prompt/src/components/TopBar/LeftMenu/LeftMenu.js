import React from 'react';
import styles from '../TopBar.module.css';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';

const LeftMenu = () => (
  <div className={styles.leftMenuContainer}>
    <div className={styles.mysteryRectangle} />
    <IconButton
      className={styles.leftMenu}
      edge="start"
      color="inherit"
      aria-label="Open drawer"
    >
      <MenuRounded />
    </IconButton>
  </div>
);

export default LeftMenu;
