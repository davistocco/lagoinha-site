import React from 'react'
import Subtitle from '../../subtitle/subtitle';
import styles from './location-section.module.scss'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function LocationSection() {
    return (
        <section id='nossa-localizacao' className={styles.section}>
            <div className={styles.location}>
                <div className={styles.address}>
                    <Subtitle icon={faLocationDot}>Nossa Localização</Subtitle>
                    <p>Av. Nove de Julho, 2241 - Vila Seixas<br />Ribeirão Preto - SP</p>
                </div>
                <div className={styles.maps}>
                    <div className={styles['iframe-container']}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.7178121283068!2d-47.798905038997816!3d-21.19352141448668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bff5311d66ff%3A0x5e43e3deccd30dd4!2sIgreja%20Batista%20da%20Lagoinha%20em%20Ribeir%C3%A3o%20Preto!5e0!3m2!1sen!2sbr!4v1657569471673!5m2!1sen!2sbr"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
