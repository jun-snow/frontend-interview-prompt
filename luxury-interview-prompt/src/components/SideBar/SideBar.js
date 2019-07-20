import React from 'react';
import styles from './SideBar.module.css';
import MenuMain from './MenuMain';
import MenuAdmin from './MenuAdmin';
import MenuInfo from './MenuInfo';
import MenuLayout from './MenuLayout';
import MenuMeeting from './MenuMeeting';


const SideBar = () => {
  
  return (
    <nav className={styles.sideBarContainer}>
      <MenuMain />
      <MenuAdmin />
      <MenuInfo />
      <MenuLayout />
      <MenuMeeting />
    </nav>
  );
};

export default SideBar;
