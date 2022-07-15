import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Subtitle from '../../subtitle/subtitle'
import styles from './contribute.module.scss';
import Image from 'next/image';

export default function Contribute() {
    return (
        <section id='contribua' className={styles.section}>
            <div className={styles.contribute}>
                <Subtitle icon={faHandHoldingHeart}>Contribua</Subtitle>
                <Image src="/images/contribute.png" alt="logo" width='1200' height='470' objectFit='contain' />
            </div>
        </section>
    )
}
