import React from 'react';
import styles from './DashBoard.module.css';
import DashBoardHeader from './DashBoardHeader';
import DashBoardTotals from './DashBoardTotals';
import DashBoardGraphs from './DashBoardGraphs';

const DashBoard = () => {
  return (
    <main id={styles.container}>
      <DashBoardHeader />
      <div className={styles.panelContainer}>
        <DashBoardTotals />
        <DashBoardGraphs />
      </div>
    </main>
  );
}

export default DashBoard;
