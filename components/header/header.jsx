import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect } from 'react'
import styles from './header.module.scss';
import Link from 'next/link'

export default function Header() {
    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
          } else {
            document.getElementById("header").style.top = "-110px";
          }
          prevScrollpos = currentScrollPos;
        }
    }, []);
    
    return (
        <div className={styles.wrapper} id='header'>
            <header className={styles.header}>
                <Link href='/'>
                    <Image className={styles.logo} src="/images/Graf_Horiz_Black.png" alt="logo" width='200px' height='100px' objectFit='contain' />
                </Link>
                <ul className={styles.links}>
                    <li><Link href="/#">Início</Link></li>
                    <li><Link href="/#pedido-de-oracao">Pedido de oração</Link></li>
                    <li><Link href="/#nossa-localizacao">Nossa localização</Link></li>
                    <li><Link href="/#nosso-app">Nosso APP</Link></li>
                    <li><Link href='/encontre-um-gc'>Encontre um GC</Link></li>
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
                    <button className={`${styles.btn} ${styles['btn-primary']}`}> <Link href="/#contribua">Contribua</Link> </button>
                </div>
            </header>
        </div>
    )
}
