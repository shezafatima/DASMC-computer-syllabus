import React from 'react';
import styles from './styles.module.css';

const ICONS = {
  mini: '🎯',
  final: '🏆',
};

const LABELS = {
  mini: 'Mini Projects',
  final: 'Final Project',
};

export default function ProjectCallout({type = 'mini', title, children}) {
  const icon = ICONS[type] ?? ICONS.mini;
  const label = title || LABELS[type] || LABELS.mini;

  return (
    <div className={`${styles.callout} ${type === 'final' ? styles.final : styles.mini}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
