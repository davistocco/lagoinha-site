import React from 'react'
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <p>Primeira Igreja Batista da Lagoinha em Ribeirão Preto - CNPJ 44.542.522/0001-90</p>
                <p>Igreja Lagoinha © 2022</p>
            </div>
        </footer>
    )
}
