import React from 'react';
import styles from '../DashBoard.module.css';
import DataColumn from './DataColumn';

const DashBoardTotals = () => (
  <div className={styles.totalsContainer}>
    <div className={styles.totalsHeader}>
      <p>Totals</p>
      <p>Last Week</p>
    </div>
    <div className={styles.totalsData}>
      <DataColumn numbers={'597'}>
        New Feedbacks
      </DataColumn>
      <DataColumn numbers={'16.6M$'}>
        Total Profit
      </DataColumn>
      <DataColumn numbers={'7.5K'}>
        New Orders
      </DataColumn>
      <DataColumn numbers={'+48%'}>
        Brand Popularity
      </DataColumn>
    </div>
  </div>
);

export default DashBoardTotals;
