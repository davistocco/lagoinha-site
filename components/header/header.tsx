import Image from 'next/image';
import React from 'react'
import styles from './header.module.scss';

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Image src="/images/lagoinha-white.png" alt="logo" width='200px' height='100px' objectFit='contain' />
                <ul className={styles.links}>
                    <li>Início</li>
                    <li>Pedido de oração</li>
                    <li>Nossa localização</li>
                    <li>Encontre um gc</li>
                </ul>
                <div className={styles.extra}>
                    <button className={`${styles.btn} ${styles['btn-transparent']}`}>Fale com a gente</button>
                    <button className={`${styles.btn} ${styles['btn-primary']}`}>Contribua</button>
                </div>
            </header>
        </div>
    )
}
