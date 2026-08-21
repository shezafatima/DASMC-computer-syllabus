import React from 'react';
import styles from './styles.module.css';

export default function GradeHero({grade, title, blurb}) {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>Grade {grade}</div>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>{title}</h1>
        {blurb && <p className={styles.blurb}>{blurb}</p>}
      </div>
    </div>
  );
}
