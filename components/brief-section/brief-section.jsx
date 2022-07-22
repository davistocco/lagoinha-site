import { faClock, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Subtitle from '../subtitle/subtitle'
import styles from './brief-section.module.scss'

export default function BriefSection() {
    return (
        <section className={styles.info}>
            <div className={styles.description}>
                <Subtitle icon={faPlaceOfWorship}>Um lugar de novos começos</Subtitle>
                <p>A Igreja Batista da Lagoinha nasceu em Belo Horizonte - MG e há mais de 6 décadas atua de forma relevante na expansão do evangelho. Atualmente, como Lagoinha Global, inúmeras igrejas crescem em diferentes lugares do Brasil e mundo afora.
                    Em Ribeirão Preto - SP, a Igreja Batista da Lagoinha nasceu há 4 anos e deseja que cada pessoa tenha um relacionamento público com Jesus.
                    São mais de 600 Lagoinhas que atuam com uma única visão: alcançar a população para Cristo.</p>
            </div>
            <div className={styles.agenda}>
                <Subtitle icon={faClock}>Hoŕario dos Cultos</Subtitle>
                <div className={styles.card}>
                    <Image src="/images/passaro-lagoinha-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
                    <div className={styles.detail}>
                        <div className={styles['day-of-week']}>Domingo</div>
                        <div className={styles.event}>
                            <div className={styles.time}>09h30</div>
                            <div className={styles.name}>Culto de Celebração</div>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.time}>19h00</div>
                            <div className={styles.name}>Culto de Celebração</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src="/images/legacy-icon-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
                    <div className={styles.detail}>
                        <div className={styles['day-of-week']}>Sábado</div>
                        <div className={styles.event}>
                            <div className={styles.time}>20h00</div>
                            <div className={styles.name}>Culto Legacy Jovens</div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src="/images/passaro-lagoinha-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
                    <div className={styles.detail}>
                        <div className={styles['day-of-week']}>Quinta-Feira</div>
                        <div className={styles.event}>
                            <div className={styles.time}>20h00</div>
                            <div className={styles.name}>Culto Fé</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
