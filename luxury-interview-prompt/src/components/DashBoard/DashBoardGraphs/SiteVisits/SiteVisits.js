import React from 'react';
import styles from './SiteVisits.module.css';
import Button from '@material-ui/core/Button';

const visitsImg = 'https://portfolio-jun.s3-us-west-1.amazonaws.com/luxury_visits.png';

const SiteVisits = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.title}>
          Site visits
        </div>
        <div className={styles.description}>
          Weekly Stats
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          className={styles.newButton}
        >
          new
        </Button>
        <Button
          variant="outlined"
          className={styles.returningButton}
        >
          returning
        </Button>
      </div>
    </div>
    <img
      className={styles.visitsImg}
      src={visitsImg}
      alt="Site visits graph"
    />
  </div>
);

export default SiteVisits;
