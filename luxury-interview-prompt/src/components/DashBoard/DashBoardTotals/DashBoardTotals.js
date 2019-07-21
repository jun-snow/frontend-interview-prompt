import React from 'react';
import styles from '../DashBoard.module.css';
import DataColumn from './DataColumn';

const DashBoardTotals = () => (
  <div className={styles.totalsContainer}>
    <div className={styles.totalsHeader}>
      <h2 className={styles.totalsTitle}>
        Totals
      </h2>
      <p className={styles.totalsDescription}>
        Last Week
      </p>
    </div>
    <div className={styles.totalsData}>
      <DataColumn numbers={'597'}>
        New Feedbacks
      </DataColumn>
      <div className={styles.totalsDivider} />
      <DataColumn numbers={'16.6M$'}>
        Total Profit
      </DataColumn>
      <div className={styles.totalsDivider} />
      <DataColumn numbers={'7.5K'}>
        New Orders
      </DataColumn>
      <div className={styles.totalsDivider} />
      <DataColumn numbers={'+48%'}>
        Brand Popularity
      </DataColumn>
    </div>
  </div>
);

export default DashBoardTotals;
