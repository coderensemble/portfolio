import React from 'react';
import styles from '../styles/Intro.module.css';

function Intro() {
  return (
    <div className={styles.intro_container}>
      <div className={`${styles.star} ${styles.star1}`}></div>
      <div className={`${styles.star} ${styles.star2}`}></div>
    </div>
  );
}

export default Intro;
