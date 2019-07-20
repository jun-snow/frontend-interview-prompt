import React from 'react';
import styles from '../TopBar.module.css';
import InputBase from '@material-ui/core/InputBase';
import SearchRounded from '@material-ui/icons/SearchRounded';

const Search = () => (
  <div className={styles.searchContainer}>
    <div className={styles.searchIcon}>
      <SearchRounded />
    </div>
    <InputBase
      className={styles.searchMenu}
      placeholder="Search..."
    >
    </InputBase>
  </div>
);

export default Search;
