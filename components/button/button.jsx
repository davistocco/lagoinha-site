import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './button.module.scss';

export default function Button({ children, loading, secondary }) {
  return (
    <button type='submit' className={`${styles.btn} ${styles.primary} ${secondary && styles.secondary}`}>
      {
        loading && <FontAwesomeIcon icon={faSpinner} className={styles.icon} />
      }
      {children}
    </button>
  )
}
