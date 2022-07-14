import { faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './subtitle.module.scss';

export default function Subtitle({ children, icon, secondary }) {
    return (
        <h2 className={`${styles.subtitle} ${secondary && styles.secondary}`}>
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
            {children}
        </h2>
    )
}
