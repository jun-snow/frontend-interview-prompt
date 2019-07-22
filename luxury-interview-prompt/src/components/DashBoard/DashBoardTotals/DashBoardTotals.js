import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../DashBoard.module.css';
import DataColumn from './DataColumn';
import { parseData } from './helper';

const totalURL = 'http://www.mocky.io/v2/5d018fbd3100005400ab2968';

const DashBoardTotals = () => {
  const defaultData = {
    newFeedbacks: "597",
    totalProfit: "16.6M$",
    newOrders: "7.5K",
    BrandPopularity: "+48%",
  }
  const [totalData, setTotalData] = useState(defaultData);

  const fetchData = async () => {
    const res = await axios.get(totalURL);
    const parsedData = parseData(res.data);
    setTotalData(parsedData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className={styles.totalsContainer}>
      <div className={styles.totalsInnerContainer}>
        <div className={styles.totalsHeader}>
          <h2 className={styles.totalsTitle}>
            Totals
          </h2>
          <p className={styles.totalsDescription}>
            Last Week
          </p>
        </div>
        <div className={styles.totalsData}>
          <div className={styles.totalsColumn}>
            <DataColumn numbers={totalData.newFeedbacks}>
              New Feedbacks
            </DataColumn>
            <div className={styles.totalsDivider} />
            <DataColumn numbers={totalData.totalProfit}>
              Total Profit
            </DataColumn>
            <div className={styles.totalsDivider} />
          </div>
          <div className={styles.totalsColumn}>
            <DataColumn numbers={totalData.newOrders}>
              New Orders
            </DataColumn>
            <div className={styles.totalsDivider} />
            <DataColumn numbers={totalData.BrandPopularity}>
              Brand Popularity
            </DataColumn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardTotals;
