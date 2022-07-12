import { faClock, faLocationDot, faPlaceOfWorship, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.cover}>


      </section>

      <section className={styles.info}>
        <div className={styles.text}>
          <h2 className={styles.subtitle}>
            <FontAwesomeIcon icon={faPlaceOfWorship} className={styles.icon} />
            Um lugar de novos começos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae saepe alias laboriosam nobis, voluptas, aliquam temporibus beatae laudantium excepturi odio commodi eligendi quasi suscipit quidem? Soluta odio, et autem sint fugiat rerum quo eligendi voluptatibus sed provident rem accusamus. Enim mollitia earum deleniti omnis consequatur voluptatibus sit exercitationem sapiente.</p>
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

      <section className={styles.section2}>
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

      <section className={styles.maps}>
        <div className={styles.address}>
          <h2 className={styles.subtitle}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            Nossa Localização
          </h2>
          <Image src="/images/igreja-batista.png" alt="logo" width='200px' height='200px' objectFit='contain' />
          <p>Av. Nove de Julho, 2241 - Vila Seixas<br />Ribeirão Preto - SP</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.7178121283068!2d-47.798905038997816!3d-21.19352141448668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bff5311d66ff%3A0x5e43e3deccd30dd4!2sIgreja%20Batista%20da%20Lagoinha%20em%20Ribeir%C3%A3o%20Preto!5e0!3m2!1sen!2sbr!4v1657569471673!5m2!1sen!2sbr"
          width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

    </main>
  )
}
