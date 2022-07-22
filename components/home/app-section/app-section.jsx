import { faBookBible, faCalendarCheck, faHandHoldingHeart, faMobileScreen, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'
import Subtitle from '../../subtitle/subtitle';
import styles from './app-section.module.scss';

export default function AppSection() {
    return (
        <section id='nosso-app' className={styles.section}>
            <div className={styles.app}>
                <div className={styles.mobile}>
                    <Image src="/images/iphone.png" alt="logo" width={400} height={600} objectFit='cover' />

                </div>
                <div className={styles.description}>
                    <Subtitle secondary icon={faMobileScreen}>
                        Nosso APP
                    </Subtitle>
                    <p className='font-lg'>Baixe o nosso aplicativo e fique por dentro de tudo que acontece na sua igreja.</p>
                    <ul>
                        <li>
                            <div className={styles['icon-wrapper']}>
                                <FontAwesomeIcon icon={faStar} size='2x' ></FontAwesomeIcon>
                            </div>
                            <span>Acesse conteúdos exclusivos</span>
                        </li>
                        <li>
                            <div className={styles['icon-wrapper']}>
                                <FontAwesomeIcon icon={faHandHoldingHeart} size='2x'></FontAwesomeIcon>
                            </div>
                            <span>Faça suas contribuições através do aplicativo</span>
                        </li>
                        <li>
                            <div className={styles['icon-wrapper']}>
                                <FontAwesomeIcon icon={faBookBible} size='2x'></FontAwesomeIcon>
                            </div>
                            <span>Leia a Bíblia direto do celular</span>
                        </li>
                        <li>
                            <div className={styles['icon-wrapper']}>
                                <FontAwesomeIcon icon={faUserGroup} size='2x'></FontAwesomeIcon>
                            </div>
                            <span>Fique conectado com todos os amigos da igreja</span>
                        </li>
                        <li>
                            <div className={styles['icon-wrapper']}>
                                <FontAwesomeIcon icon={faCalendarCheck} size='2x'></FontAwesomeIcon>
                            </div>
                            <span>Se inscreva nos eventos da igreja</span>
                        </li>
                    </ul>
                    <div className={styles.badges}>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=br.org.lagoinharibeirao.appEK1834" target='_blank' rel="noreferrer">
                                <Image src="/images/google-play-badge.png" alt="logo" layout='fill' objectFit='contain' />
                            </a>
                        </div>
                        <div>
                            <a href="https://apps.apple.com/br/app/lagoinha-ribeir%C3%A3o/id1613226290?l=en" target='_blank' rel="noreferrer">
                                <Image src="/images/app-store-badge.png" alt="logo" layout='fill' objectFit='contain' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
