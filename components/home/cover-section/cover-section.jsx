import Image from 'next/image'
import Link from 'next/link.js';
import React from 'react'
import Subtitle from '../../subtitle/subtitle.jsx';
import styles from './cover-section.module.scss';

export default function CoverSection() {
    return (
        <section id='inicio' className={styles.section}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image className={styles.logo} src="/images/lagoinha-white.png" alt="logo" width='200px' height='100px' objectFit='contain' />
                </Link>
            </div>
            <div className={styles.cover}>
                <Subtitle>Nossa Igreja</Subtitle>
                <Image src="/images/Artboard 2.png" alt="logo" width='1200' height='480' objectFit='contain' />
            </div>
        </section>
    )
}
