import React from 'react';
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined';
import styles from '../SideBar.module.css';

const MenuMeeting = () => {

  return (
    <div className={styles.sideBarGroup}>
      <div
          className={styles.sideBarItem}
          tabIndex="0"
      >
        <FiberManualRecordOutlined style={{color: "#f7c95c"}} />
        <span className={styles.sideBarText}>
          Executive Meeting
        </span>
      </div>
      <div
        className={styles.sideBarItem}
        tabIndex="0"
      >
        <FiberManualRecordOutlined style={{color: "ea5d50"}} />
        <span className={styles.sideBarText}>
          HelpDesk Redesign
        </span>
      </div>
      <div
        className={styles.sideBarItem}
        tabIndex="0"
      >
        <FiberManualRecordOutlined style={{color: "917dd6"}} />
        <span className={styles.sideBarText}>
          Sony Board Meeting
        </span>
      </div>
    </div>
  );
}

export default MenuMeeting;
