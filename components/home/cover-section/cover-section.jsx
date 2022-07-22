import Image from 'next/image'
import React from 'react'
import Subtitle from '../../subtitle/subtitle.jsx';
import styles from './cover-section.module.scss';

export default function CoverSection() {
    return (
        <section id='inicio' className={styles.section}>
            <div className={styles.cover}>
                <Subtitle>Nossa Igreja</Subtitle>
                <Image src="/images/Artboard 2.png" alt="logo" width='1200' height='480' objectFit='contain' />
            </div>
        </section>
    )
}
