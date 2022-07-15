import Head from 'next/head';
import React from 'react'
import Gc from '../components/gc/gc'
import { getGcs } from '../domains/gc'

export default function EncontreUmGc(props) {
    return (
        <>
            <Head>
                <title>Encontre um GC - Igreja Batista da Lagoinha em Ribeirão Preto</title>
            </Head>
            <Gc {...props} />
        </>
    )
}

export async function getStaticProps() {
    const gcs = await getGcs();

    return {
        props: {
            gcs: gcs
        }
    }
}

