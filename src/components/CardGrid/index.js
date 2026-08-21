import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function CardGrid({children}) {
  return <div className={styles.grid}>{children}</div>;
}

export function Card({to, icon, title, subtitle, children}) {
  const content = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.cardTitle}>{title}</div>
      {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
      {children && <div className={styles.cardBody}>{children}</div>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles.card}>
        {content}
      </Link>
    );
  }

  return <div className={`${styles.card} ${styles.cardStatic}`}>{content}</div>;
}
