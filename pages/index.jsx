import { faClock, faLocationDot, faPlaceOfWorship, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CoverSection from '../components/home/cover-section/cover-section.jsx';
import Subtitle from '../components/subtitle/subtitle.jsx';
import AppSection from '../components/app-section/app-section.jsx';
import Footer from '../components/footer/footer.jsx';
import Contribute from '../components/contribute/contribute.jsx';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <CoverSection />

      <section className={styles.info}>
        <div className={styles.description}>
          <Subtitle icon={faPlaceOfWorship}>Um lugar de novos começos</Subtitle>
          <p>A Igreja Batista da Lagoinha nasceu em Belo Horizonte - MG e há mais de 6 décadas atua de forma relevante na expansão do evangelho. Atualmente, como Lagoinha Global, inúmeras igrejas crescem em diferentes lugares do Brasil e mundo afora.
            Em Ribeirão Preto - SP, a Igreja Batista da Lagoinha nasceu há 4 anos e deseja que cada pessoa tenha um relacionamento público com Jesus.
            São mais de 600 Lagoinhas que atuam com uma única visão: alcançar a população para Cristo.</p>
        </div>
        <div className={styles.agenda}>
          <h2 className={styles.subtitle}>
            <FontAwesomeIcon icon={faClock} className={styles.icon} />
            Horário dos cultos
          </h2>
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

      <section className={styles.section2} id='pedido-de-oracao'>
        <div className={styles.wrapper}>
          <div className={styles.contribution}>
            <div className={styles.pray}>
              <h2 className={`${styles.subtitle} ${styles.secondary}`}>
                <FontAwesomeIcon icon={faPrayingHands} className={styles.icon} />
                Pedido de Oração</h2>
              <form action="">
                <div className={styles['form-item']}>
                  <label htmlFor="">Nome</label>
                  <input type="text" id='name' />
                </div>
                <div className={styles['form-item']}>
                  <label htmlFor="">E-mail</label>
                  <input type="text" id='name' />
                </div>
                <div className={styles['form-item']}>
                  <label htmlFor="">Telefone</label>
                  <input type="text" id='name' />
                </div>
                <div className={styles['form-item']}>
                  <label htmlFor="">Descrição do pedido</label>
                  <textarea name="pray-request" id="" rows="5" ></textarea>
                </div>
                <button className={`${styles.btn} ${styles['btn-primary']}`}>Enviar</button>
              </form>
            </div>
            <Carousel showArrows={false} showStatus={false} className={styles.carousel} showThumbs={false}>
              <div style={{ height: 300, width: 50 }}>
              </div>
              <div style={{ height: 300, width: 50 }}>
              </div>
              <div style={{ height: 300, width: 50 }}>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <Contribute></Contribute>

      <section id='nossa-localizacao' className={styles.maps}>
        <div className={styles.address}>
          <h2 className={styles.subtitle}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            Nossa Localização
          </h2>
          <Image src="/images/igreja-batista.png" alt="logo" width='200px' height='200px' objectFit='contain' />
          <p>Av. Nove de Julho, 2241 - Vila Seixas<br />Ribeirão Preto - SP</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.7178121283068!2d-47.798905038997816!3d-21.19352141448668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bff5311d66ff%3A0x5e43e3deccd30dd4!2sIgreja%20Batista%20da%20Lagoinha%20em%20Ribeir%C3%A3o%20Preto!5e0!3m2!1sen!2sbr!4v1657569471673!5m2!1sen!2sbr"
          width="100%" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <AppSection></AppSection>

      <Footer></Footer>

    </main>
  )
}
