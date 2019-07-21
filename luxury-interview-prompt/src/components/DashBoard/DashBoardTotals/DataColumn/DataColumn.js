import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataColumn.module.css';

const DataColumn = ({ numbers, children }) => (
  <div className={styles.container}>
    <div className={styles.numbers}>
      {numbers}
    </div>
    <div className={styles.description}>
      {children}
    </div>
  </div>
);

DataColumn.propTypes = {
  numbers: PropTypes.string,
  children: PropTypes.string,
}

DataColumn.defaultProps = {
  numbers: 'N/A',
}

export default DataColumn;
