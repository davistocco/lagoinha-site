import React from 'react'
import styles from './gc.module.scss';
import Subtitle from '../subtitle/subtitle';
import { faHouseChimney, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export default function Gc(props) {
    const gcs = props.gcs.data;

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Subtitle icon={faPersonCircleQuestion} secondary>O que é um GC?</Subtitle>
                <p>GC - GRUPO DE CRESCIMENTO</p>
                <p>Toda semana nos reunimos em casas espalhadas pela cidade para aprender mais da Palavra de Deus, e compartilhar as maravilhas que acontecem em nossas vidas!</p>
                <p>O GC é aberto para qualquer pessoa e você pode participar encontrando o mais próximo da sua casa!</p>

                <Subtitle icon={faHouseChimney} secondary>Encontre um GC</Subtitle>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome do GC</th>
                            <th>Bairro</th>
                            <th>Endereço</th>
                            <th>Data</th>
                            <th>Líderes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gcs.map(gc =>
                                <tr>
                                    <td>{gc.attributes.name}</td>
                                    <td>{gc.attributes.address?.data?.attributes?.district}</td>
                                    <td>{gc.attributes.address?.data?.attributes?.street}, {gc.attributes.address?.data?.attributes?.number}</td>
                                    <td>{gc.attributes.day_of_week} às {gc.attributes.starts_at}</td>
                                    <td>{gc.attributes.leadership}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}