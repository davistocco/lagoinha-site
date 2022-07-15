import React from 'react'
import Gc from '../components/gc/gc'
import { getGcs } from '../domains/gc'

export default function EncontreUmGc(props) {
    return (
        <Gc {...props} />
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

