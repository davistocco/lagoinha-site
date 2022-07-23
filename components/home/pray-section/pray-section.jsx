import { faCamera, faPrayingHands } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { toast } from 'react-toastify'
import Button from '../../button/button'
import Form from '../../form/form'
import Input from '../../input/input'
import Subtitle from '../../subtitle/subtitle'
import Textarea from '../../textarea/textarea'
import styles from './pray-section.module.scss'

export default function PraySection({ photos }) {
    const [loading, setLoading] = useState(false);

    const [prayRequest, setPrayRequest] = useState({
        values: {
            name: '',
            email: '',
            phone: '',
            description: '',
        },
        rules: {
            name: {
                required: 'Nome obrigatório!'
            },
            email: {
                required: 'E-mail obrigatório!'
            },
            phone: {
                required: 'Telefone obrigatório!'
            },
        },
        isValid: undefined,
        submitted: false
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const toastOptions = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };

        if (!prayRequest.isValid) {
            toast.error('Preencha os campos obrigatórios!', toastOptions);
            return;
        }

        setLoading(true);

        axios.post('/api/pray-request', prayRequest.values).then(response => {
            toast.success('Pedido de oração enviado!', toastOptions);
        }).catch(error => {
            toast.error('Erro ao enviar pedido de oração', toastOptions);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <section className={styles.section} id='pedido-de-oracao'>
            <div className={styles.wrapper}>
                <div className={styles.contribution}>
                    <div className={styles.pray}>
                        <Subtitle icon={faPrayingHands} secondary>Pedido de Oração</Subtitle>
                        <Form form={prayRequest} setForm={setPrayRequest} onSubmit={handleSubmit}>
                            <Input type='text' name='name' label='Nome' maxLength='30'
                                rules={{ required: 'Nome obrigatório!' }}
                                hasError={prayRequest.rules.name.hasError}></Input>
                            <Input type='text' name='email' label='E-mail' maxLength='255'
                                rules={{ required: 'E-mail obrigatório!' }}
                                hasError={prayRequest.rules.email.hasError}></Input>
                            <Input type='text' name='phone' label='Telefone' maxLength='11'
                                rules={{ required: 'Telefone obrigatório!' }}
                                hasError={prayRequest.rules.phone.hasError}></Input>
                            <Textarea name="description" rows="5" label='Descrição do pedido' maxLength='300'></Textarea>
                            <Button loading={loading}>Enviar</Button>
                        </Form>
                    </div>
                    <div className={styles.photos}>
                        <Subtitle icon={faCamera} secondary>Galeria de Fotos</Subtitle>
                        <Carousel showArrows={true} showStatus={false} autoPlay={true}
                            interval={4000} className={styles.carousel} showThumbs={false}
                            infiniteLoop={true}>
                            {
                                photos.map((photo, index) =>
                                    <div key={index} className={styles.item}>
                                        <Image src={photo.url} alt="logo" className={styles.img} layout='fill' objectFit='contain' />
                                    </div>
                                )
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
