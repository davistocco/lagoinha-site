import Image from 'next/image';
import React from 'react'
import styles from './header.module.scss';

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Image src="/images/Graf_Horiz_Black.png" alt="logo" width='200px' height='100px' objectFit='contain' />
                <ul className={styles.links}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#pedido-de-oracao">Pedido de oração</a></li>
                    <li><a href="#nossa-localizacao">Nossa localização</a></li>
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
