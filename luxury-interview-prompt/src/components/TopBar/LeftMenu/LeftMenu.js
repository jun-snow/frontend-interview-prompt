import React from 'react';
import styles from '../TopBar.module.css';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';

const LeftMenu = () => (
  <>
    <div className={styles.mysteryRectangle} />
    <IconButton
      className={styles.searchMenu}
      edge="start"
      color="inherit"
      aria-label="Open drawer"
    >
      <MenuRounded />
    </IconButton>
  </>
);

export default LeftMenu;
