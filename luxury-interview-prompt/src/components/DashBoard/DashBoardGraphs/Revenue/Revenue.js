import React from 'react';
import styles from './Revenue.module.css';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';

const revenueImg = 'https://portfolio-jun.s3-us-west-1.amazonaws.com/luxury_revenue.png';

const Revenue = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.title}>
          Revenue
        </div>
        <div className={styles.description}>
          Monthly Stats
        </div>
      </div>
      <Button
        variant="contained"
        size="small"
        className={styles.filterButton}
      >
        Filter Range
        <ExpandMore className={styles.downArrow}/>
      </Button>
    </div>
    <img
      className={styles.revenueImg}
      src={revenueImg}
      alt="Revenue graph"
    />
  </div>
);

export default Revenue;
