import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import MenuRounded from '@material-ui/icons/MenuRounded';
import FileCopy from '@material-ui/icons/FileCopy';
import Settings from '@material-ui/icons/Settings';
import styles from '../SideBar.module.css';

const MenuLayout = () => (
  <div className={styles.sideBarGroup}>
    <div
      style={{ marginLeft: "-1px"}}
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <FontAwesomeIcon icon={faGem} size="lg"/>
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
