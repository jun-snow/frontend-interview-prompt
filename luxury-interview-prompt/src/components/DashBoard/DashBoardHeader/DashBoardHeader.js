import React from 'react';
import styles from '../DashBoard.module.css';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';


const DashBoardHeader = () => (
  <div className={styles.header}>
    <div>
      <h1 className={styles.title}>
        Dashboard
      </h1>
      <p className={styles.description}>
        dashboard &amp; statistics
      </p>
    </div>
    <Button
      variant="contained"
      className={styles.dateDropdown}
    >
      17 January 2016 - 15 February 2016
      <ExpandMore className={styles.downArrow}/>
    </Button>

    {/* <Select
      IconComponent={() => (
        <ExpandMore className={styles.downArrow}/>
      )}
      className={styles.dateDropdown}
    >
      17 January 2016 - 15 February 2016
      
    </Select> */}
  </div>
);

export default DashBoardHeader;
