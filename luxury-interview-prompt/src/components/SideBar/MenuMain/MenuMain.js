import React from 'react';
import CalendarTodayRounded from '@material-ui/icons/CalendarTodayRounded';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import HomeRounded from '@material-ui/icons/HomeRounded';import styles from '../SideBar.module.css';

const MenuMain = () => {
  const activeMenu = {
    color: "#2C333d",
    backgroundColor: "#ffffff"
  };
  return (
    <div className={styles.sideBarGroup}>
      <div
          className={styles.sideBarItem}
          tabIndex="0"
      >
        <CalendarTodayRounded />
        <span className={styles.sideBarText}>
          Calendar
        </span>
      </div>
      <div
        className={styles.sideBarItem}
        tabIndex="0"
      >
        <DescriptionOutlined />
        <span className={styles.sideBarText}>
          Documentation
        </span>
      </div>
      <div
        style={activeMenu}
        className={styles.sideBarItem}
        tabIndex="0"
      >
        <HomeRounded className={styles.active} />
        <span className={styles.sideBarText}>
          Dashboard
        </span>
        <div className={styles.sideBarSelected} />
      </div>
    </div>
  );
};

export default MenuMain;
