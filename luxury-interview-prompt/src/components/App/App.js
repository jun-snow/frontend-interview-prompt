import React from 'react';
import styles from './App.module.css';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import DashBoard from '../DashBoard';

const App = () => {
  return (
    <div className={styles.app}>
      <TopBar />
      <div className={styles.appInnerContainer}>
        <SideBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
