import React from 'react';
import styles from '../TopBar.module.css';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';

const profileImg = "https://avatars1.githubusercontent.com/u/42755381?s=460&v=4";

const Profile = () => (
  <div className={styles.profileContainer}>
    <img
      className={styles.profileImage}
      src={profileImg}
      alt="hired"
    />
    <IconButton aria-label="Open drawer">
      <ExpandMore className={styles.downArrow}/>
    </IconButton>
  </div>
);

export default Profile;
