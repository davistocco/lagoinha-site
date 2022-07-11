import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.cover}>
        <div className={styles.agenda}>
          <div className={styles.title}>Horário dos cultos</div>
          <div className={styles.card}>
            <Image src="/images/passaro-lagoinha-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
            <div className={styles.detail}>
              <div className={styles['day-of-week']}>Domingo</div>
              <div className={styles.event}>
                <div className={styles.time}>09h</div>
                <div className={styles.name}>Culto de Celebração</div>
              </div>
              <div className={styles.event}>
                <div className={styles.time}>19h</div>
                <div className={styles.name}>Culto de Celebração</div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/images/legacy-icon-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
            <div className={styles.detail}>
              <div className={styles['day-of-week']}>Sábado</div>
              <div className={styles.event}>
                <div className={styles.time}>20h</div>
                <div className={styles.name}>Culto Legacy Jovens</div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/images/passaro-lagoinha-black.png" alt="logo" width='40px' height='40px' objectFit='cover' />
            <div className={styles.detail}>
              <div className={styles['day-of-week']}>Quinta-Feira</div>
              <div className={styles.event}>
                <div className={styles.time}>20h</div>
                <div className={styles.name}>Culto Fé</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
