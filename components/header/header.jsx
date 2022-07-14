import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <li><a href="">Encontre um GC</a></li>
                    <li><a href="#nosso-app">Nosso APP</a></li>
                </ul>
                <div className={styles.extra}>
                    <div className={styles.contact}>
                        <a href="https://wa.me/5516994057448/" target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.instagram.com/lagoinharibeiraopreto/" target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com/LagoinhaRibeiraoPreto/" target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.youtube.com/c/IgrejaBatistaLagoinhaRibeir%C3%A3oPretoSP" target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                    <button className={`${styles.btn} ${styles['btn-primary']}`}> <a href="#contribua">Contribua</a> </button>
                </div>
            </header>
        </div>
    )
}
