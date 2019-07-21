import React from 'react';
import styles from './DashBoard.module.css';
import DashBoardHeader from './DashBoardHeader';
import DashBoardTotals from './DashBoardTotals';
import DashBoardGraphs from './DashBoardGraphs';
import DashBoardFooter from './DashBoardFooter';

const DashBoard = () => {
  return (
    <div id={styles.container}>
      <main className={styles.mainContainer}>
        <DashBoardHeader />
        <div className={styles.panelContainer}>
          <DashBoardTotals />
          <DashBoardGraphs />
        </div>
      </main>
      <DashBoardFooter />
    </div>
  );
}

export default DashBoard;
