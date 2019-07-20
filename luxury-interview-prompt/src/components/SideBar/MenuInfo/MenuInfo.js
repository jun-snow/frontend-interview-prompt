import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import BarChart from '@material-ui/icons/BarChart';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import styles from '../SideBar.module.css';

const MenuInfo = () => (
  <div className={styles.sideBarGroup}>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <BarChart />
      <span className={styles.sideBarText}>
        Information Panels
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
    <div
      className={styles.sideBarItem}
      tabIndex="0"
    >
      <ShoppingBasketOutlined />
      <span className={styles.sideBarText}>
        Ecommerce
      </span>
      <KeyboardArrowRightRounded className={styles.rightArrow} />
    </div>
  </div>
);

export default MenuInfo;
