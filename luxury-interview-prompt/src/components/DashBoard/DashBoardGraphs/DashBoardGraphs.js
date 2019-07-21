import React from 'react';
import styles from './DashBoardGraphs.module.css';
import SiteVisits from './SiteVisits';
import Revenue from './Revenue';

const DashBoardGraphs = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <SiteVisits />
      <Revenue />
    </div>
  </div>
);

export default DashBoardGraphs;
