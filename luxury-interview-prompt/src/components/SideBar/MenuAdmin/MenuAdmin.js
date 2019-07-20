import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import WhatsHotRounded from '@material-ui/icons/WhatshotRounded';
import CheckBoxOutlined from '@material-ui/icons/CheckBoxOutlined';
import ViewAgenda from '@material-ui/icons/ViewAgenda';
import styles from '../SideBar.module.css';

const MenuAdmin = () => (
  <div className={styles.sideBarGroup}>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <WhatsHotRounded />
      <span className={styles.sideBarText}>
        Admin Plugins
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <CheckBoxOutlined />
      <span className={styles.sideBarText}>
        Admin Forms
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <ViewAgenda className={styles.rotate} />
      <span className={styles.sideBarText}>
        Admin Layouts
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
  </div>
);

export default MenuAdmin;
