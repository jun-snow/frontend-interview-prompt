import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import BarChart from '@material-ui/icons/BarChart';
import MenuRounded from '@material-ui/icons/MenuRounded';
import FileCopy from '@material-ui/icons/FileCopy';
import Settings from '@material-ui/icons/Settings';
import styles from '../SideBar.module.css';

const MenuLayout = () => (
  <div className={styles.sideBarGroup}>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <BarChart />
      <span className={styles.sideBarText}>
        UI Elements
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <MenuRounded />
      <span className={styles.sideBarText}>
        Form Elements
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <Settings />
      <span className={styles.sideBarText}>
        Plugins
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <FileCopy />
      <span className={styles.sideBarText}>
        Pages
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
  </div>
);

export default MenuLayout;
