import React from 'react';
import styles from './RevenueData.module.css';

const RevenueData = ({ entry, children}) => (
  <div className={styles.group}>
    <div className={styles.title}>
      {children}
    </div>
    <div className={styles.entry}>
      {entry}
    </div>
  </div>
);

export default RevenueData;
